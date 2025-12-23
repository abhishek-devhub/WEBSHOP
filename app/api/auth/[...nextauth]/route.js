import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/Database";


export const authOptions = ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req) {
                await connectDB();
                const { email, password } = credentials;
                const user = await User.findOne({ email });
                if (!user) {
                    return null;
                }
                const ispasswordValid = await bcrypt.compare(password, user.password);
                if (!ispasswordValid) {
                    return null;
                }
                return user;
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            await connectDB();
            if (user) {
                let dbUser = await User.findOne({ email: user.email });
                if (!dbUser) {
                    dbUser = await User.create({
                        email: user.email,
                        name: user.name || "User",
                    });
                }
                token._id = dbUser._id.toString();
                token.email = dbUser.email;
                token.name = dbUser.name;
            }
            return token
    },
    async session({ session, user, token }) {
        session.user = {
            _id: token._id,
            email: token.email,
            name: token.name,
        };
        return session;
    },
},
})

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
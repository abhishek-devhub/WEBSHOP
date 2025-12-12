import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/Database";


const handler = NextAuth({
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
                const user = await User.findOne({ email  });
                if(!user){
                    return null;
                }
                const ispasswordValid = await bcrypt.compare(password , user.password);
                if(!ispasswordValid){
                    return null;
                }
                return user;
            }
        })
    ],
})

export { handler as GET, handler as POST }
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials , req){
                if(credentials.email === "shuklajihaihum@gmail.com" && credentials.password === "password"){
                    return {id: "1", name: "John Does" ,password: "password"}
                }
                return null;
            }
        })
    ],
})

export { handler as GET , handler as POST }
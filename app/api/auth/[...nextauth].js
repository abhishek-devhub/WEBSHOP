import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name:'Credentials',
            credentials:{
                email:{label:Email , type:"text", placeholder:"abc@gmail.com"},
                password:{label:"Password", type:"password"}
            },
            async authorize(credentials , req){
                const user = {id:"1", name:"Abhishek", email:"a@gmail.com"}
                if(user){
                    return user;
                }else{
                    return null;
                }
            }
            
        })
    ]
}

export default NextAuth(authOptions);
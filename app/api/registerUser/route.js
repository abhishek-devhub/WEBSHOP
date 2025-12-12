import User from "@/models/User";
import { connectDB } from "@/lib/Database";
import bcrypt from "bcryptjs";

export async function POST(request){
    await connectDB();
    try{
    const body = await request.json();
    const {username , email , password} = body
    
    if(!username || !email || !password){
        return new Response("Missing required fields" , {status: 400});
    }
    
        const hashpassword = await bcrypt.hash(password , 10);
        const newUser = new User({username , email , password:hashpassword});
        await newUser.save();
        return new Response("User registered successfully" , {status: 201});
    } catch(error){
        return new Response("Error registering user" , {status: 500});
    }
}

export async function GET(request){
    await connectDB();
    try{
        const users = await User.find({});
        return new Response(JSON.stringify(users) , {status: 200});
    }catch(error){
        return new Response("Error fetching users" , {status: 500});
    }
}
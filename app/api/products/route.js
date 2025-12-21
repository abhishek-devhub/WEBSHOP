import Product from "@/models/Product";
import { connectDB } from "@/lib/Database";

export async function POST(request) {
    await connectDB()
    try {
        const body  = await request.json()
        const {imageUrl , name , slug , description , price , sizes , colors, stock  } = body
        const newProducts = new Product({
            imageUrl , name , slug , description , price , sizes , colors ,stock
        })
        await newProducts.save()
        return new Response('Product Saved Successfully', {status:201})
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({message:'ERROR'}, {status:500}))
    }
}

export  async function GET(request){
    await connectDB();
    try {
        const products = await Product.find({})
        return new Response(JSON.stringify({products} , {status: 200}))
    } catch (error) {
        return new Response(JSON.stringify({message:'Error Getting Products' , status:500}))
    }
}
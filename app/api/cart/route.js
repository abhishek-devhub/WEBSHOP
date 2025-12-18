import Cart from "@/models/Cart";
import { connectDB } from "@/lib/Database";

export async function POST(request) {
    await connectDB()
    try {
        const body = await request.json()
        const { name, image, size, price, quantity } = body
        const discount = 0
        const deliveryCharges = 50
        const totalAmount = quantity * price + deliveryCharges - discount


        const newCart = new Cart({
            items: [
                {
                    name,
                    image,
                    size,
                    price,
                    quantity,
                    discount
                }
            ],
            deliveryCharges,
            totalAmount
        })
        await newCart.save()
        return new Response(JSON.stringify({ message: "Cart added successfully" }));

    } catch (error) {
        console.log(error)
        return new Response('Cart access failed!', { status: 500 })
    }
}

export async function GET(request) {
    await connectDB()
    try {
        const carts = await Cart.find({})
        return new Response(JSON.stringify(carts), { status: 200 })
    } catch (error) {
        return new Response("Error fetching cartDetails", { status: 500 });

    }
}
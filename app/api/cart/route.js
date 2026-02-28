import Cart from "@/models/Cart";
import { connectDB } from "@/lib/Database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
    await connectDB()
    const session = await getServerSession(authOptions)
    // console.log(session)
    if (!session) {
        return new Response('Unauthorized', { status: 401 })
    }
    const userId = session.user._id
    try {
        const body = await request.json()
        const { productId, name, image, size, price, quantity } = body
        const discount = (price +250) - price
        const deliveryCharges = 0
        const totalAmount = quantity * price + deliveryCharges - discount

        let cart = await Cart.findOne({ userId })
        if (!cart) {
            cart = new Cart({
                userId,
                items: [
                    {
                        productId,
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
        } else {
            const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId)
            if (existingItemIndex !== -1) {
                cart.items[existingItemIndex].quantity += quantity
            } else {
                cart.items.push({
                    productId,
                    name,
                    image,
                    size,
                    price,
                    quantity,
                    discount
                })
            }
        }
        cart.totalAmount = cart.items.reduce((acc, item) => acc + item.quantity * item.price, 0) + deliveryCharges - discount
        await cart.save()
        return new Response(JSON.stringify({ message: "Cart added successfully" }));

    } catch (error) {
        console.log(error)
        return new Response('Cart access failed!', { status: 500 })
    }
}

export async function GET(request) {
    await connectDB()
    const session = await getServerSession(authOptions)
    if (!session) {
        return new Response('Unauthorized', { status: 401 })
    }
    const userId = session.user._id
    try {
        let cart = await Cart.findOne({ userId }).populate('items.productId')
        if (!cart) {
            cart = {
                items: [],
                totalAmount: 0,
                deliveryCharges: 0
            };
        } else {
            cart = {
                items: cart.items.map(item => ({
                    _id: item._id,
                    name: item.productId.name,
                    size: item.size,
                    price: item.price,
                    quantity: item.quantity,
                    imageUrl: [item.image],
                    discount:item.discount
                })),
                totalAmount: cart.totalAmount,
                deliveryCharges: cart.deliveryCharges
            };
        }

        return new Response(JSON.stringify(cart), { status: 200 })
    } catch (error) {
        return new Response("Error fetching cartDetails", { status: 500 });

    }
}

export async function PATCH(request) {
    await connectDB()
    const session = await getServerSession(authOptions)
    if (!session) {
        return new Response('Unauthorized', { status: 401 })
    }
    const userId = session.user._id
    try {
        const { id, quantity } = await request.json()
        const cart = await Cart.findOne({ userId })
        if (!cart) {
            return new Response('Cart Not Found', { status: 404 })
        }
        const item = cart.items.id(id)
        if (!item) {
            return new Response('No Item Found', { status: 404 })
        }
        item.quantity = quantity
        cart.totalAmount = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0) + cart.deliveryCharges

        await cart.save()

        const responsebody = {
            items: cart.items.map(item => ({
                _id: item._id,
                name: item.name,
                size: item.size,
                price: item.price,
                quantity: item.quantity,
                imageUrl: [item.image],
                discount:item.discount   
                 })),
            totalAmount: cart.totalAmount,
            deliveryCharges: cart.deliveryCharges
        }
        return new Response(JSON.stringify(responsebody) , {status:200})
    } catch (error) {
        return new Response('ERROR IN UPDATING' , {status:500})
    }
}

export async function DELETE(request) {
    await connectDB()
    const session = await getServerSession(authOptions)
    if (!session) {
        return new Response('Unauthorized', { status: 401 })
    }
    const userId = session.user._id
    try {
        const { id } = await request.json()
        const cart = await Cart.findOne({ userId })
        if (!cart) {
            return new Response('Cart Not Found', { status: 404 })
        }
        const item = cart.items.id(id)
        if (!item) {
            return new Response('No Item Found', { status: 404 })
        }
        cart.items = cart.items.filter(item => item._id.toString() !== id)
        cart.totalAmount = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0) + cart.deliveryCharges

        await cart.save()

        return new Response(JSON.stringify(cart) , {status:200})
    } catch (error) {
        return new Response('ERROR IN DELETING THE CART' , {status:500})
    }
}

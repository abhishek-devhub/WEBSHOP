import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
       
    },
    items: [
        {
            productId: {
                type: String,
                ref: "Product",
               
            },
            name: String,
            image: String,
            size: String,
            price: Number,
            quantity: {
                type: Number,
                default: 1
            },
            discount: {
                type: Number,
                default: 0
            }
        }
    ],
    deliveryCharges: {
        type: Number,
        default: 50
    },
    totalAmount: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
)

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema)

export default Cart
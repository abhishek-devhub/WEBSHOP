import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    imageUrl: {
        type: [String],
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sizes: {
        type: [String],
        required: true,
    },
    colors:{
        type:[String],
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
},
    { timestamps: true }
)

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
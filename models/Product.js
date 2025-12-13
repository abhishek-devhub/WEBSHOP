import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    imageUrl:{
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
    colors: {
        type: [String],
        required: true,
    },
    stock: {    
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
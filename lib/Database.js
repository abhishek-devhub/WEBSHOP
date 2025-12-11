import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI);
} else {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
export default mongoose;
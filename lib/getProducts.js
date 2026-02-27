import Product from "@/models/Product";
import { connectDB } from "@/lib/Database";

export async function getProducts() {
  await connectDB();
  const products = await Product.find({}).lean();
  return JSON.parse(JSON.stringify(products));
}
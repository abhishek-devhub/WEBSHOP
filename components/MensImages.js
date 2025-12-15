import cloudinary from "@/lib/Cloudinary";

export const getMensImages = async () => {
  const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 60,
    });

    const products = result.resources.map((img, index) => ({
          id: img.public_id,
          name:  "Mens T-Shirt",
          CardDescription: "A stylish men's product.",
          price: 29.99,
          image: img.secure_url,
          Offer: index % 3 === 0 ? "Hot Deal" : null,
        }));
    return products;
}

  


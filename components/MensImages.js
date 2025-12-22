import cloudinary from "@/lib/Cloudinary";

export const getMensImages = async () => {
  // const result = await cloudinary.api.resources({
  //     type: "upload",
  //     resource_type: "image",
  //   });

      const res = await fetch('http://localhost:3000/api/products' ,{
        method:'GET'
      })
      const data = await res.json()
    return data;
}

  


export const getMensImages = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      const res = await fetch(`${apiUrl}/api/products` ,{
        method:'GET'
      })
      const data = await res.json()
    return data;
}

  


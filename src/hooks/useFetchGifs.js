import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState(true)

  const getImages = async()=>{
    const resp = await getGifs(category);
    setImages(resp);
    setIsLoading(false)
  }

  useEffect(()=>{
    getImages()
  },[])

  return{
    //debido a ecmascript podemos retornar la propiedad solamente si tiene el mismo nombre
    images,
    isLoading,
  }
}

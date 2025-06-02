import { useEffect,useState,FC} from "react"
import { Pelicula } from "../Main";
 interface Props {
    tipos:string;
    slug:string
 }
const Estrenos:FC<Props>= ({tipos,slug}) => {
    const [estrenos,setestrenos]=useState <Pelicula[]>([])
   console.log(estrenos)
    const getApi=async()=>{
                 
                       try {  
     
                           const api = `https://api.themoviedb.org/3/movie/${slug}api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1`;
                        const response=await fetch(api)
                        if(response.status===200){
                            const data=await response.json()
                            setestrenos(data.results)
                         console.log(data.results)
                        }
                       }catch{
                          console.error("Error en la peticion")
                       }
                      
                       
               }
        useEffect(()=>{
               getApi()
        },[])
  return (
    <div>
      {tipos}
    </div>
  )
}

export default Estrenos

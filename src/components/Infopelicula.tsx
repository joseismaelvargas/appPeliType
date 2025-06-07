import { useParams } from "react-router-dom"
 import { useEffect } from "react"
 import type  { Pelicula } from "./Main"
const Infopelicula = () => {
  const{id}=useParams()
  const idpparam=Number(id)
  const tipopelicula=JSON.parse(localStorage.getItem("genero") ||"0" )
  const idtipo = Number(tipopelicula); 
  console.log(idpparam)
  console.log(idtipo)
  
  const getApi=async(id:number,slug:string)=>{
                   
                         try {  
                                    const api = `https://api.themoviedb.org/3/discover/movie?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&with_genres=${slug}`;
                          const response=await fetch(api)
                          if(response.status===200){
                            
                              const data=await response.json()
                              console.log(data)
                               const Info:Pelicula[]=data.results.filter((item:Pelicula)=>item.id===id)
                               console.log(Info)
                              
                           
                          }
                         }catch{
                            console.error("Error en la peticion")
                         }
                        
                         
                 }
          useEffect(()=>{
                 getApi(idpparam,tipopelicula)
                 
          },[idpparam,tipopelicula])
  return (
    <div className="m-10">
      <h1>aqui va la info</h1>
    </div>
  )
}

export default Infopelicula

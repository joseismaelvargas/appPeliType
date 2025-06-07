import { useParams } from "react-router-dom"
 import { useEffect,useState } from "react"
 import type  { Pelicula } from "./Main"
import "../components/css/section.css"
const Infopelicula = () => {
  const [Info,setInfo]=useState <Pelicula[]>([])
  const [genero,setgenero]=useState<string>("")
  console.log(Info)
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

                         
                               setInfo(Info)
                              
                           
                          }
                         }catch{
                            console.error("Error en la peticion")
                         }
                        
                         
                 }
          useEffect(()=>{
                 getApi(idpparam,tipopelicula)
                  Genero(idtipo)
          },[idpparam,tipopelicula]) 
          const Genero=(idtipo:number)=>{
            switch (idtipo){
              case 27:
                setgenero("Terror")
                break
              case 28:
                setgenero("Accion")
                break
              case 12:
              setgenero("Aventura")
              break
              case 16:
                setgenero("Animacion")
                break;
              case 18:
                setgenero("Drama")
                break;
            }
          }
  return (
    <section className="nunito-uniquifier-section">
      {
        Info.map((item)=>
       <div className="container-info">
        <img  className="img-info"src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
          <div className="info-movie">
           <h2 className="title">{item.title.toUpperCase()}</h2>
           
           <p className="info-text">{item.overview}</p>
           <p> Genero:{genero}</p>
           <p>Estreno:{item.release_date}</p>
           <h2  className="title-origin"> title origin: {item.original_title.toLowerCase()}</h2>
          </div>
      
       </div>
    
       )
      }
      
    </section>
  )
}

export default Infopelicula

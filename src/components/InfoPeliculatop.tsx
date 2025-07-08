import { useParams } from "react-router-dom"
 import { useEffect,useState } from "react"
 import type  { Pelicula } from "./Main"
import "../components/css/section.css"
const Infopeliculatop= () => {
  const [Info,setInfo]=useState <Pelicula[]>([])
 
  
  const{id}=useParams()
  const idpparam=Number(id)
  

  
  const getApi=async(id:number)=>{
                   
                         try {  
                                    const api = `https://api.themoviedb.org/3/movie/now_playing?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1`;
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
                 getApi(idpparam)
                  
          },[idpparam]) 
    
  return (
    <section className="nunito-uniquifier-section">
      {
    Info.map((item, index) => (
      <div key={index}>
        <div className="img-degrade">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt="img"
           
          />
        </div>

        <div className="container-info">
          <img
            className="img-info"
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
          /><div className="info-movie">
          <h2 className="title">{item.title.toUpperCase()}</h2>
          <p className="info-text">{item.overview}</p>
          <p>Estreno: {item.release_date}</p>
          <h2 className="title-origin">
            title origin: {item.original_title.toLowerCase()}
          </h2>
        </div>
        </div>

        
      </div>
    ))}
      
    </section>
  )
}

export default Infopeliculatop

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import type { Pelicula } from "./Main"
import"./css/section.css"
const InfoSearch = () => {
    const[Info,setInfo]=useState<Pelicula[]>([])
    const namepeli=JSON.parse(localStorage.getItem("pelimovie")||"0")
    const {id}=useParams()
    const idparam=Number(id)
    console.log(Info)
    const Api=async(query:string,id:number)=>{
      try{
        const api=`https://api.themoviedb.org/3/search/movie?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&query=${query}`;
         const response=await fetch(api)
         if(response.status===200){
          const data=await response.json()
          const Infoencontrado:Pelicula[]=data.results.filter((item:Pelicula)=>item.id===id)
          setInfo(Infoencontrado)
         }       
    }catch{
            console.error("Error en el response")
          }
         }
    useEffect(()=>{
         Api(namepeli,idparam)
    },[])
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

export default InfoSearch

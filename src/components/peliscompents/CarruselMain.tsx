import "../css/carruselMain.css"
import { SwiperSlide,Swiper} from "swiper/react"
import { Navigation,Autoplay } from "swiper/modules"
import { useState,useEffect} from "react"
import type { Pelicula } from "../Main"
import { Link } from "react-router-dom"
const CarruselMain = () => {
  const [Carrusel,setCarrusel]=useState<Pelicula[]>([])
  
  const getApi=async()=>{
                   
                         try {  
       
      const api = `https://api.themoviedb.org/3/movie/now_playing?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1`;
                const response=await fetch(api)
                  if(response.status===200){
                    const data=await response.json()
                        setCarrusel(data.results)
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
    <section className="section-carru">  
    <Swiper modules={[ Navigation,Autoplay]}
         slidesPerView={1} 
       spaceBetween={30}
       autoplay={{
        delay:4000
       }
        
       }
      
        loop={true}
   
          >
      {
        Carrusel.map((item)=>
       
         <SwiperSlide    key={item.id}>
            <div className="img-degrade-main">

           <img
            
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
          />
             </div>
            <div className='div-info'>
                
                <div className="text">
                
                    <h1>{item.title}</h1> 
                       <p className="hora">{item.release_date}</p>
                    <p>{item.overview}</p> 
 <Link to={`/infopeliculatop/${item.id}`} >
          <button className="bottonver">Ver película</button>
        </Link>
                
                </div>
           
             </div> 
            
         </SwiperSlide>
        
      
      
        )
      }
        </Swiper>
    </section>

  )
}

export default CarruselMain

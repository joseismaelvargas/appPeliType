import { useEffect,useState} from "react"
import type { FC } from "react";
import type { Pelicula } from "../Main";
import"../css/carrusel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';


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
   <>
   <section>
      
      <Swiper modules={[Autoplay,Navigation]} spaceBetween={1} navigation  breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 1,
                },
              }} className="carrusel ">
      
         {
            estrenos.map((item)=>
               <SwiperSlide key={item.id}>
                     <div className="poster">
                         <img className="img-movie" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} /><p className="title">{item.title}</p>
                     </div>
                     
               </SwiperSlide>
            )
         }
      </Swiper>
   </section>
   </>
  )
}

export default Estrenos

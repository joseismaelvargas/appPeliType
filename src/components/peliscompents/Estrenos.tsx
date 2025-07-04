import { useEffect,useState} from "react"
import type { FC } from "react";
import type { Pelicula } from "../Main";
import"../css/carrusel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
 interface Props {
    tipos:string;
    slug:string
 }
const Estrenos:FC<Props>= ({tipos,slug}) => {
    const [estrenos,setestrenos]=useState <Pelicula[]>([])

    const getApi=async()=>{
                 
                       try {  
     
                           const api = `https://api.themoviedb.org${slug}api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1`;
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
      <div className="title-tipo  ">
           <h3 className="nunito-uniquifier-tipo ">{tipos}</h3>
           <div className="linea-roja"></div>
      </div>
     
      <Swiper  spaceBetween={1}   breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                1024: {
                  slidesPerView: 5.5,
                  spaceBetween: 2,
                },
              }} className="carrusel ">
      
         {
            estrenos.map((item)=>
               <SwiperSlide key={item.id}>
                     <Link to={`/infopeliculatop/${item.id}`} className="poster">
                      <motion.div whileHover={{scale:1.1}}>
                           <motion.img  initial="inicial" animate="animate" className="img-movie" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} /><p className="nunito-uniquifier-text">{item.title}</p>
                      </motion.div>
                      
                     </Link>
                     
               </SwiperSlide>
            )
         }
      </Swiper>
   </section>
   </>
  )
}

export default Estrenos

import { useState,useEffect } from "react";
import type { FC } from "react";
import type { Pelicula } from "../Main";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
interface Genero{
    tipo:string;
    idgenero:number
}



export const Generos:FC<Genero>=({tipo,idgenero})=>{
 const [Generosmovie,setGeneros]=useState<Pelicula[]>([])
 const Nav=useNavigate()

 
const Api=async()=>{
 try{
 const fetchs = `https://api.themoviedb.org/3/discover/movie?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&with_genres=${idgenero}`;
   const api=await fetch(fetchs) 
   if(api.status===200){
      const data=await api.json()
      setGeneros(data.results)
   }
}catch{
    console.error("hubo un error en la peticion")
 }
}
useEffect(()=>{
 Api()
},[])

      

const direcionar=(id:number,idgenero:number):void=>{
localStorage.setItem("genero",JSON.stringify(idgenero))  
Nav(`/infopelicula/${id}`)

}
    return (
        <>
    <section>
    <div className="title-tipo  ">
           <h3 className="nunito-uniquifier-tipo ">{tipo}</h3>
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
            Generosmovie.map((item)=>
               <SwiperSlide key={item.id}>
                     <div  onClick={()=>direcionar(item.id,idgenero)} className="poster">
                      <motion.div whileHover={{scale:1.1}}>
                           <motion.img  initial="inicial" animate="animate" className="img-movie" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} /><p className="nunito-uniquifier-text">{item.title}</p>
                      </motion.div>
                      
                     </div>
                     
               </SwiperSlide>
            )
         }
      </Swiper>
    </section>
        </>
    )

}
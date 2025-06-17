import  { useEffect,useState } from "react";
import type  { Pelicula } from "./Main";
import "../components/css/carrusel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion"


const SearchPeli=() => {
    const [morePopular,setmorePopular]=useState<Pelicula[]>([])
    const [lessPopular,setlessPopular]=useState<Pelicula[]>([])
    const peli=JSON.parse(localStorage.getItem("pelimovie")||"0")
    const Search =async(query:string)=>{
       try{ 
    const api =`https://api.themoviedb.org/3/search/movie?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&query=${query}`;
     const response=await fetch(api)
     console.log(response)
    if(response.status===200){
       const data=await response.json()
       const resultados:Pelicula[]=data.results
       const mita=Math.ceil(resultados.length/2)
      setmorePopular(resultados.slice(0,mita))
      setlessPopular(resultados.slice(mita))
     
 }
       }catch{
     console.error("Error en la busqueda")
       }
    }
   
    useEffect(()=>{
      Search(peli)
    },[])
  return (
   <section>
      <div className="title-tipo  ">
                <h3 className="nunito-uniquifier-tipo ">{peli.toUpperCase()}</h3>
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
              }} className="carruselsearch">
      
         {
           morePopular.map((item)=>
               <SwiperSlide key={item.id}>
                     <Link to={`/InfoSearch/${item.id}`} className="poster">
                      <motion.div whileHover={{scale:1.1}}>
                           <motion.img  initial="inicial" animate="animate" className="img-movie" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} /><p className="nunito-uniquifier-text">{item.title}</p>
                      </motion.div>
                      
                     </Link>
                     
               </SwiperSlide>
            )
         }
      </Swiper>
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
              }} className="carruselsearch ">
      
         {
           lessPopular.map((item)=>
               <SwiperSlide key={item.id}>
                     <Link to={`/InfoSearch/${item.id}`} className="poster">
                      <motion.div whileHover={{scale:1.1}}>
                           <motion.img  initial="inicial" animate="animate" className="img-movie" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} /><p className="nunito-uniquifier-text">{item.title}</p>
                      </motion.div>
                      
                     </Link>
                     
               </SwiperSlide>
            )
         }
      </Swiper>
   </section>
  )
}

export default SearchPeli

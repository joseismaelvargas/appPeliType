import "../css/carruselMain.css"
import { SwiperSlide,Swiper} from "swiper/react"
import { Navigation,Autoplay } from "swiper/modules"

const CarruselMain = () => {
  return (
    <section className="section-carru">
        <Swiper modules={[ Navigation,Autoplay]}
       slidesPerView={1} 
       spaceBetween={30}
      
      
      loop={true}
       >
         <SwiperSlide >
            <div className="img-degrade">

           <img src={"https://image.tmdb.org/t/p/w500//nSb3nNiL6pOEDK34T0U6RKTGzlJ.jpg"} alt="img" className='img-carrusel' />
             </div>
            <div className='div-info'>
                
                <div className="text">
                
                    <h1>Harry Potter</h1> 
                       <p className="hora">2h 14min 2025</p>
                    <p>Cinco años después de Dominion, la ecología del planeta ha demostrado ser en gran medida inhóspita para los dinosaurios. Las criaturas más colosales de esa biosfera tienen la clave para un fármaco que</p> 
                <button className="bottonver">Ver pelicula </button>
                </div>
           
             </div> 
            
         </SwiperSlide>
         <SwiperSlide>
         <img src={"https://wallpapers.com/images/high/harry-potter-4k-3840-x-2160-wallpaper-w3bhjwas5ukv4ta3.webp"} alt="img" className='img-carrusel' /> 
         <div
             className='div-info'>
                <h2>Entre el cielo y la tierra</h2>
             </div>
         </SwiperSlide>
         <SwiperSlide>
         <img src={"https://wallpapers.com/images/high/harry-potter-4k-3840-x-2160-wallpaper-w3bhjwas5ukv4ta3.webp"} alt="img" className='img-carrusel' /> 
         <div
             className='div-info'>
                <h2>Un ambiente unico, relajado, alejado, tranquilo.</h2>
             </div>
         </SwiperSlide>
       </Swiper>
      
    </section>

  )
}

export default CarruselMain

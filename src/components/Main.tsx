
import"../components/css/main.css"
import Estrenos from "./peliscompents/Estrenos";
import { Generos } from "./peliscompents/Generos";
import CarruselMain from "./peliscompents/CarruselMain";
 export interface Pelicula{
  
adult: boolean;
backdrop_path:string;
genre_ids:Array<number>;
id:number; 
original_language: string;
original_title:string;
overview:string;
popularity: number
poster_path: string;
release_date:string;
title:string;
video:boolean
vote_average:number;
vote_count: number

}
const Main = () => {


  return (
    <section className="tendencias">
        <CarruselMain></CarruselMain>
    <Estrenos slug="/3/movie/now_playing?" tipos="ESTRENO"></Estrenos>
            
    <Generos idgenero={18} tipo="DRAMA"></Generos>
    <Generos idgenero={27} tipo="TERROR"></Generos>
    </section>
  )
}

export default Main

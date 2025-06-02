
import"../components/css/main.css"
import Estrenos from "./peliscompents/Estrenos";
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
        
    <Estrenos slug="now_playing?" tipos="estreno"></Estrenos>
    </section>
  )
}

export default Main

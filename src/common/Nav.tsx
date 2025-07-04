import {useState} from "react"
import "../common/css/navbar.css"
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav= () => {
     const [input,setInput]=useState<string>("")
     const [menu,setMenu]=useState(false)
     const Nav=useNavigate()
     

     const guardar=(peli:string):void=>{
      if(peli.length>0){
        localStorage.setItem("pelimovie",JSON.stringify(peli))
        Nav("/searhmovie")
        location.reload()
      }else{
      location.reload()
      }
        
      
     }
  return (
 <nav className="nav">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-20 sm:h-15 items-center justify-center">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        <button  onClick={() =>setMenu((prev)=>!prev) }type="button"  className=" iconsanwech relative items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
        
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg className="iconsanwech hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
 
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
        <div className="flex shrink-0 items-center">
        
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
     
            <a href="#" className="P-nav rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">NOTICIA</a>
            <a href="#" className=" P-nav rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">PELICULAS</a>
            <a href="#" className=" P-nav rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">SERIES</a>
            <a href="#" className=" P-nav rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CELEBRIDADES</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div>
  
  <div className="mt-1">
  
      <div className=" input"> <FaSearch className="logoinput"  />
      <input  className="input"type="text"  placeholder="Search" value={input} onChange={(e)=>setInput(e.target.value)}/> 
      </div>
       
    
   
  </div>

</div>
<button className="buttonnav text-amber-50" type="submit" onClick={()=>guardar(input)}>Search</button>

      
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
           
            </button>
          </div>

      
        </div>
      </div>
    </div>
  </div>
  <div className="subnav hidden sm:flex sm:h-20">
  <div className="div-subnav flex justify-center ">
     
   
      <li><Link to={"FS"}>LOS MAS RECIENTE</Link> </li>
      <li><Link to={"FS"}>TENDENCIAS</Link> </li>
      <li><Link to={"FS"}>PROXIMOS ESTRENOS</Link> </li>
            <li><Link to={"FS"}>TOP CRITICAS</Link> </li>
   
    </div>
  </div>
 
  <div className={`${menu ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
  
      <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">NOTICIAS</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
</nav>
  )
}

export default Nav

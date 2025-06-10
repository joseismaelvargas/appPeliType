import Nav from "./common/Nav"
import {Route,Routes } from "react-router-dom"
import Footer from "./common/Footer"
import Main from "./components/Main"
import Infopelicula from "./components/Infopelicula"
import SearchPeli from "./components/SearchPeli"
import { useState } from "react"
function App() {
 const [buscar,setBuscar]=useState<string>("")
 console.log(buscar)
  return (
    <>
  
  <Nav setBuscar={setBuscar}></Nav>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/infopelicula/:id" element={<Infopelicula ></Infopelicula>}></Route>
    <Route path="/searhmovie" element={<SearchPeli buscar={buscar} ></SearchPeli>}></Route>
  </Routes>
  <Footer></Footer>

  

    </>
  )
}

export default App

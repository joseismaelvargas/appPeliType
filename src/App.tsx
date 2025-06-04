
import Nav from "./common/Nav"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Footer from "./common/Footer"
import Main from "./components/Main"
import Infopelicula from "./components/Infopelicula"
function App() {
 

  return (
    <>
  
  <BrowserRouter>
  <Nav></Nav>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/infopelicula/id:" element={<Infopelicula></Infopelicula>}></Route>
  </Routes>
  <Footer></Footer>
  </BrowserRouter>
  

    </>
  )
}

export default App

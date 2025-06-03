
import Nav from "./common/Nav"
import { BrowserRouter,Route,Routes } from "react-router-dom"

import Main from "./components/Main"
import Infopelicula from "./components/Infopelicula"
function App() {
 

  return (
    <>
  <Nav></Nav>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/infopelicula/id:" element={<Infopelicula></Infopelicula>}></Route>
  </Routes>
  </BrowserRouter>
  

    </>
  )
}

export default App

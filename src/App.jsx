import Footer from "./componets/Footer"
import NavBar from "./componets/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./componets/pages/Home"
import Acercanos from "./componets/pages/Acercanos"
import Admi from "./componets/pages/Admi"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <header>
      <NavBar/>
    </header>
     <main>

<Routes>
<Route path="/"element={<Home/>} />
<Route path="/Acercanos" element={<Acercanos/>}/>
<Route path="/Admi" element={<Admi/>}/>
</Routes>

     </main>
     <footer>
      <Footer/>
     </footer>
     </BrowserRouter>
    </>
    
    
  )
}

export default App

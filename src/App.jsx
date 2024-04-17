import Footer from "./componets/Footer"
import NavBar from "./componets/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./componets/pages/Home"
import Acercanos from "./componets/pages/Acercanos"
import Admi from "./componets/pages/Admi"
function App() {
  

  return (
    <>
    <header>
      <NavBar/>
    </header>
     <main>
<BrowserRouter>
<Routes>
<Route path="/"element={<Home/>} />
<Route path="/Acercanos" element={<Acercanos/>}/>
<Route path="/Admi" element={<Admi/>}/>
</Routes>
</BrowserRouter>
     </main>
     <footer>
      <Footer/>
     </footer>
    </>
    
    
  )
}

export default App

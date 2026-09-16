import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Drivers from "./pages/Drivers"
import Constructors from "./pages/Constructors"
import Circuits from "./pages/Circuits"
import Calender from "./pages/Calender"

function App(){
  return(
    <BrowserRouter>
      <nav className ="bg-red-600 px-6 py-4 flex items-center gap-6">
        <span className="text-white font-bold text-xl mr-4">F1 2026</span>
        <Link to="/" className="text-white hover:text-yellow-300 font-medium">Home</Link>
        <Link to="/drivers" className="text-white hover:text-yellow-300 font-medium">Drivers</Link>
        <Link to="/constructors" className="text-white hover:text-yellow-300 font-medium">Constructors</Link>
        <Link to="/circuits" className="text-white hover:text-yellow-300 font-medium">Circuits</Link>
        <Link to="/calender" className="text-white hover:text-yellow-300 font-medium">Calender</Link>
      </nav>

      <div className="p-6">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/drivers" element={<Drivers/>} />
        <Route path="/constructors" element={<Constructors/>} />
        <Route path="/circuits" element={<Circuits/>} />
        <Route path="/calender" element={<Calender/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from './pages/Home'
import Drivers from "./pages/Drivers"
import Constructors from "./pages/Constructors"
import Circuits from "./pages/Circuits"
import Calendar from "./pages/Calendar"
import DriverDetail from "./pages/DriverDetail"
import ConstructorDetail from "./pages/ConstructorDetail"
import Glossary from "./pages/Glossary"

function App(){
  return(
    <BrowserRouter>
      <nav className ="bg-red-600 px-6 py-4 flex items-center gap-6">
        <span className="text-white font-bold text-xl mr-4">F1 2026</span>
        <NavLink to="/" className="text-white hover:text-yellow-300 font-medium">Home</NavLink>
        <NavLink to="/drivers" className="text-white hover:text-yellow-300 font-medium">Drivers</NavLink>
        <NavLink to="/constructors" className="text-white hover:text-yellow-300 font-medium">Constructors</NavLink>
        <NavLink to="/circuits" className="text-white hover:text-yellow-300 font-medium">Circuits</NavLink>
        <NavLink to="/calendar" className="text-white hover:text-yellow-300 font-medium">Calendar</NavLink>
        <NavLink to="/glossary" className="text-white hover:text-yellow-300 font-medium">Glossary</NavLink>
      </nav>

      <div className="p-6">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/drivers" element={<Drivers/>} />
        <Route path="/constructors" element={<Constructors/>} />
        <Route path="/circuits" element={<Circuits/>} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/drivers/:driverId" element={<DriverDetail/>} />
        <Route path="/constructors/:constructorId" element={<ConstructorDetail/>} />
        <Route path="/glossary" element={<Glossary/>} />
        <Route path="/drivers/:driverId" element={<DriverDetail/>} />
        <Route path="/constructors/:constructorId" element={<ConstructorDetail/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
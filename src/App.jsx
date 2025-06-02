import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { RotatingCube } from "./components/RotatingCube.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";



const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
    <Navbar/>
    <Hero/>
    </main>
  )
}

export default App;
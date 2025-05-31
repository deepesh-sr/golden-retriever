import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { RotatingCube } from "./components/RotatingCube.jsx";
import { Navbar } from "./components/Navbar.jsx";



const App = () => {
  return (<>
     {/* <Canvas style={{backgroundColor:"#F2F2F2", width:"100vw", height:"100vh"}}  camera={{position:[0,0,10]}}>
      <OrbitControls enableZoom enableDamping enablePan/>
      <ambientLight intensity={0.6}/>
      <directionalLight position={[1,1,2]} intensity={10} color={0x9CDBA6}/>
    <RotatingCube/>
    </Canvas>  */}
    <Navbar/>
    </>
  )
}

export default App;
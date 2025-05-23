import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () =>{
  const meshRef = useRef();
  useFrame(
    ()=>{
      if(meshRef.current){
        meshRef.current.rotation.y +=0.01;
        // meshRef.current.rotation.z +=0.01;
      }
    }
  )
  return(
    <mesh ref={meshRef} >
        <cylinderGeometry args={[1,1,2]}/>
        <meshPhongMaterial color="purple" emissive="black"/>
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{backgroundColor:"#F2F2F2", width:"100vw", height:"100vh"}}  camera={{position:[0,0,10]}}>
      <OrbitControls enableZoom enableDamping enablePan/>
      <ambientLight intensity={0.6}/>
      <directionalLight position={[1,1,2]} intensity={10} color={0x9CDBA6}/>
    <RotatingCube/>
    </Canvas>
  )
}

export default App;
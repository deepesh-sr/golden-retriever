import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const RotatingCube = () =>{
  const meshRef = useRef();
  useFrame(
    ()=>{
      if(meshRef.current){
        meshRef.current.rotation.y +=0.001;
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
import { PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader.jsx";
import HackerRoom from './HackerRoom.jsx'
import { useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "./Target.jsx";
import ReactLogo from "./ReactLogo.jsx";
import Cube from "./Cube.jsx";
import Rings from "./Rings.jsx";



const Hero = () => {
    // const x = useControls('HackerRoom',
    //     {   
    //         targetPositionX :{
    //             value : 0.1 , 
    //             min : -10 , 
    //             max : 10
    //         },
    //         targetPositionY :{
    //             value : 0.1 , 
    //             min : 0 , 
    //             max : 5
    //         },
    //         targetPositioZ :{
    //             value : 0.1 , 
    //             min : 0 , 
    //             max : 5
    //         },
    //         mobilePosition: {
    //             value: 0.1,
    //             min: 0,
    //             max: 5
    //         },
    //         positionX: {
    //             value: 0,
    //             min: -10,
    //             max: 10,

    //         },
    //         positionY: {
    //             value: -10,
    //             min: -20,
    //             max: 10,

    //         },
    //         positionZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10,

    //         },
    //         rotationX: {
    //             value: 0,
    //             min: -10,
    //             max: 10,

    //         },
    //         rotationY: {
    //             value: 3.2,
    //             min: -10,
    //             max: 10,

    //         },
    //         rotationZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10,

    //         },
    //         scale: {
    //             value: 0.1,
    //             min: 0,
    //             max: 1
    //         }
    //     }

    // )
    const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section
            className="min-h-screen w-full flex flex-col relative"
        >
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-black text-center font-">
                    Hi , I am Deepesh <span>🦀</span>
                </p>
                <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal">
                    I am a Rust Developer
                </p>
            </div>
            <div className="w-full h-full absolute inset-0 z-[-1]">
                
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0,Math.PI,0]}/>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                    </Suspense>
                    
                        <Target position={sizes.targetPosition} />
                        <ReactLogo/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition} />
                </Canvas>
                
            </div>
        </section>
    )
}

export default Hero;
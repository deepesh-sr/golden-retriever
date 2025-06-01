import React from "react";

const Hero = () => {
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
        <div className="w-full h-full absolute inset-0">

        </div>
        </section>
    )
}

export default Hero;
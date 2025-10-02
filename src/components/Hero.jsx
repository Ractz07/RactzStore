import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className=" bg-blue-600 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className=" font-light text-white">Find Anything </div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-extralight mb-4 text-white">
            Protect Everthing <br />
            <span className=" font-bold text-white">With Ractz Store</span>
          </h1>
        </div>
        {/* image */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}

export default Hero
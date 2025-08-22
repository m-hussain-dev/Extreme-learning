import React from "react";
import heroImage from "../../assets/hero.jpg";

export const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
      }}
    >
      <div className="absolute flex inset-0  justify-center items-center">
        <div className=" container mx-auto text-center  text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hello World
          </h1>
          <p className=" container mx-auto w-full md:w-2/3 text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            quaerat veniam dolorum, optio aspernatur illum eaque facilis odio
            magnam consequuntur deleniti quos dolorem sequi nobis, impedit sit.
            Eos, hic sit?
          </p>
          <button className=" mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-black px-4 py-2 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

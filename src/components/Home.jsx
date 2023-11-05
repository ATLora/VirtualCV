import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* constainer */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-500">Hi! my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6]">
          David Lora
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-[#8892b0]">
          I'm a full-Stack Developer.
        </h2>
        {/* Aqui va un resumen sobre mi que pondre despues */}
        <p className="text-[#8892b0] py-4 max-w-[700]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="group text-white border-2 border-white px-5 py-2 my-2 flex items-center hover:bg-red-500 hover:border-red-500 hover:scale-110">
            <Link to="work" smooth={true} offset={50} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

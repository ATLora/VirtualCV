import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { BGCOLOR, PRIMARY, ACCENT, SECUNDARY } from "../data/colors";

function Home() {
  return (
    <div name="home" className={`w-full h-screen bg-[#22245D]`}>
      {/* constainer */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          David Lora
        </h1>
        <h2 className={`text-5xl md:text-7xl font-bold text-[#962222]`}>
          I'm a full-Stack Developer.
        </h2>
        {/* Aqui va un resumen sobre mi que pondre despues */}
        <p className="sm:text-xl text-white py-4 max-w-[700]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button
            className={`group text-white border-2 border-white px-5 py-2 my-2 flex items-center hover:bg-[#D02F2F] hover:border-[${ACCENT}] hover:scale-110 duration-300`}
          >
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

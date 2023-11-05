import React from "react";
import JavaScript from "../assets/javascript.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import ASPNET from "../assets/ASPNET.png";
import RESTfull from "../assets/restfullapi.png";
import { BGCOLOR, PRIMARY, ACCENT, SECUNDARY } from "../data/colors";

const Skills = () => {
  return (
    <div name="skills" className={`w-full h-screen bg-[#22245D] text-white`}>
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className={`text-4xl font-bold inline border-b-4 border-[#D02F2F]`}
          >
            Skills
          </p>
          <p className="sm:text-xl py-4">
            <span className={`text-[#6E1414]`}>//</span> this are the
            technologies in experience with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={JavaScript}
              alt="JavaScript icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Node} alt="Node.js icon" className="w-20 mx-auto" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ASPNET} alt=".NET icon" className="w-20 mx-auto" />
            <p className="my-4">.NET</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={RESTfull} alt="RESTfull APIs" className="w-20 mx-auto" />
            <p className="my-4">RESTfull APIs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

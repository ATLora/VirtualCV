import React from "react";

import { skills } from "../data/skills";

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
          {/*! Modify on Hover so it displays brief summary of the technologies */}

          {skills.map((item) => {
            return (
              <div
                key={item.id}
                className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <img src={item.image} alt={item.alt} className="w-20 mx-auto" />
                <p className="my-4">{item.name}</p>
                <div className="hidden group-hover:block">
                  <p>{item.mssg}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import profilepic from "../assets/ProfilePic.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className={`pb-30 w-full h-screen bg-[#22245D] text-white`}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              className={`text-4xl font-bold inline border-b-4 border-[#D02F2F]`}
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <img
              src={profilepic}
              alt="AI generated profile pic of David Lora"
              className="rounded-lg w-[350px] h-[350px]"
            />
          </div>
          <div>
            <p className="sm:text-xl pb-16">
              Hi, i'm David, I am passionate about building excellent software
              that improves the lives of those around me. I specialize in
              creating software for clients ranging from individuals and
              small-businesses all the way to large enterprise corporations.
              What would you do if you had a software expert available at your
              fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { BGCOLOR, PRIMARY, ACCENT, SECUNDARY } from "../data/colors";

const Contact = () => {
  return (
    <div
      name="contact"
      className={`w-full h-screen bg-[#22245D] flex justify-center items-center p-4`}
    >
      <form
        method="POST"
        action="https://getform.io/f/d9694360-a9cc-4f0c-b4f0-3afdaadb76e3"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-[#D02F2F] text-white`}
          >
            Contact
          </p>
          <p className="sm:text-xl text-white py-4">
            <span className={`text-[#6E1414]`}>//</span> Submit the form below
            or shoot me an email - lora.david2096@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className={`text-white border-2 hover:bg-[#D02F2F] hover:border-[#D02F2F] hover:scale-110 px-4 py-3 my-8 mx-auto flex items-center duration-300`}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

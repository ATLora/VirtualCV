import React, { useState } from "react";
import logo from "../assets/LogoDL.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import CV from "../assets/CV/CurriculumDavidLora.pdf";
import { Link } from "react-scroll";
import { BGCOLOR, PRIMARY, ACCENT, SECUNDARY } from "../data/colors";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`fixed w-full h-[80px] border-b-2 border-[#1C1E4D] flex justify-between items-center px-4 text-white bg-[${BGCOLOR}]`}
    >
      <div>
        <img src={logo} alt="Logo David Lora" style={{ width: "110px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex text-2xl">
        <li className="hover:scale-110  hover:underline">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 hover:underline">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 hover:underline">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 hover:underline">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:scale-110 hover:underline">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen bg-[${BGCOLOR}] flex flex-col justify-center items-center`
        }
      >
        <li className="py-6 text-4xl ">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="work" smooth={true} duration={500} onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800">
            <a
              href="https://www.linkedin.com/in/david-lora-b1942622b/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-orange-600">
            <a
              href="https://github.com/ATLora"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-green-500">
            <a
              href="https://www.upwork.com/freelancers/~01626702684e4c874d"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Upwork <SiUpwork size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-cyan-600">
            <a
              href="mailto: lora.david2096@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-500">
            <a
              href={CV}
              download
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

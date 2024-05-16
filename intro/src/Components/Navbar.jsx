import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import Homeabout from "./Homeabout";
import Hero from "./Hero";
import Homeskill from "./Homeskill";
import Homeproject from "./Homeproject";
import Contact from "./Contact";
import Footer from "./Footer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="bg-primary py-3 text-white w-full sticky top-0 z-50 lg:py-2">
        <div className="flex items-center px-3 container mx-auto justify-between">
          <RouterLink to="/" className="text-2xl text-secondary">
            <FaCode />
          </RouterLink>
          <div className="hidden lg:flex lg:items-center font-semibold lg:space-x-10">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              SKILLS
            </ScrollLink>
            <ScrollLink
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              PROJECT
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              CONTACT
            </ScrollLink>
            <a
              href="/resume.pdf"
              download
              className="border p-1.5 border-secondary rounded-md transition-all duration-500 hover:bg-secondary"
            >
              Resume
            </a>
          </div>
          <button onClick={toggleMenu} className="lg:hidden text-secondary">
            {open ? (
              <IoIosClose fontSize="25" />
            ) : (
              <AiOutlineMenu fontSize="25" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`fixed ${
          open ? "block" : "hidden"
        } bg-primary text-white top-12 w-full z-40 lg:hidden h-screen`}
      >
        <div className="flex flex-col text-center space-y-10 pt-10">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            SKILLS
          </ScrollLink>
          <ScrollLink
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            PROJECT
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            CONTACT
          </ScrollLink>
          <a href="/resume.pdf" download className="">
            Resume
          </a>
        </div>
      </div>
      <div className="">
        <Element>
          <Hero />
        </Element>
        <Element name="about" className="">
          <Homeabout />
        </Element>
        <Element name="skills" className="">
          <Homeskill />
        </Element>
        <Element name="resume" className="">
          <Homeproject />
        </Element>
        <Element name="contact" className="">
          <Contact />
        </Element>
        <Element>
          <Footer />
        </Element>
      </div>
    </>
  );
};

export default Navbar;

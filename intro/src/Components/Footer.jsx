import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-5 justify-between items-start">
          <div className="flex flex-col md:w-4/12 lg:space-y-5 mb-10">
            <div className=" md:text-left mb-6 md:mb-0 max-w-md">
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-sm">
                I'm always excited to connect with fellow developers, potential
                clients, and anyone passionate about technology. Whether you
                have a project in mind or just want to say hello, I'm here to
                collaborate.
              </p>
            </div>
            <div className="flex space-x-5 mb-6 md:mb-0">
              <Link
                to="https://github.com/Oluwasuyi-Timilehin"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl hover:text-secondary transition-colors duration-300" />
              </Link>
              <Link
                to="https://twitter.com/OluwasuyiOlumi3"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl hover:text-secondary transition-colors duration-300" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin-b474b629a"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl hover:text-secondary transition-colors duration-300" />
              </Link>
              <Link
                to="https://www.instagram.com/dxrkfacee/"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl hover:text-secondary transition-colors duration-300" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:w-4/12 lg:space-y-4 mb-10">
            <h2 className="text-lg font-semibold mb-2">Ouick Links</h2>
            <div className="flex items-center space-x-32">
              <div className="flex flex-col space-y-3">
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Skills
                </ScrollLink>
              </div>
              <div className="flex flex-col space-y-3">
                <ScrollLink
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Project
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
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 mb-10">
            <div className="flex flex-col p-5 space-y-4 bg-slate-700 rounded-md">
              <h2 className="font-semibold">Get in Touch</h2>
              <p className="text-sm">
                Have a project in mind? Let's discuss how we can work together
                to bring your ideas to life.
              </p>
              <Link
                to="mailto:oluwasuyitimilehin@gmail.com?subject=Contact from Portfolio&body=Hello Timilehin,"
                className="flex items-center justify-center space-x-2 bg-secondary text-white py-3 px-6"
              >
                <MdOutlineMail fontSize={20} />
                <span className="text-sm">oluwasuyitimilehin@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
        <p className="border-t border-gray-600 py-5 text-sm">
          &copy; {new Date().getFullYear()} Oluwasuyi Timilehin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

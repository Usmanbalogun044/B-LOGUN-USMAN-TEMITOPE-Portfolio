import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0 max-w-md">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-sm">
              Hi, I'm Oluwasuyi Timilehin, a passionate developer dedicated to
              creating beautiful and functional web applications. Let's build
              something amazing together!
            </p>
          </div>
          <div className="flex space-x-5 mb-6 md:mb-0">
            <Link
              to="https://github.com/Oluwasuyi-Timilehin"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl hover:text-secondary transition-colors duration-300" />
            </Link>
            <Link to="https://twitter.com/OluwasuyiOlumi3" aria-label="Twitter">
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
          <div className="flex flex-col items-center md:items-end">
            <Link
              to="mailto:oluwasuyitimilehin@gmail.com?subject=Contact from Portfolio&body=Hello Timilehin,"
              className="flex items-center space-x-2 hover:text-secondary transition-colors duration-300"
            >
              <MdOutlineMail fontSize={20} />
              <span className="text-sm">oluwasuyitimilehin@gmail.com</span>
            </Link>
            <p className="mt-4 text-sm">
              &copy; {new Date().getFullYear()} Oluwasuyi Timilehin. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

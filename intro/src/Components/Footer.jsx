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
              Hi, I'm Balogun Usman, a passionate backend developer dedicated to building 
              scalable, secure, and efficient web applications. Let's create seamless 
              solutions together!
            </p>  

          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              to="https://github.com/Usmanbalogun044"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl hover:text-secondary transition-colors duration-300" />
            </Link>
            <Link to="https://twitter.com/temitop02038232" aria-label="Twitter">
              <FaTwitter className="text-xl hover:text-secondary transition-colors duration-300" />
            </Link>
            <Link to="https://www.linkedin.com/in/balogun-usman-5a5176272/" aria-label="LinkedIn">
              <FaLinkedin className="text-xl hover:text-secondary transition-colors duration-300" />
            </Link>
            <Link
              to="https://www.instagram.com/dollarhunter044/"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl hover:text-secondary transition-colors duration-300" />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <Link
              to="mailto:usmanbalogun044@gmail.com?subject=Contact from Portfolio&body=Hello Usman,"
              className="flex items-center space-x-2 hover:text-secondary transition-colors duration-300"
            >
              <MdOutlineMail fontSize={20} />
              <span className="text-sm">usmanbalogun044@gmail.com</span>
            </Link>
            <p className="mt-4 text-sm">
              &copy; {new Date().getFullYear()} Balogun Usman Temitope. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

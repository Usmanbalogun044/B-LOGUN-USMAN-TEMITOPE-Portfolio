import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Homeabout = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto py-20 px-4 items-center justify-center flex flex-col space-y-5 lg:px-7 lg:space-x-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center -space-y-5 lg:w-1/4">
            <img
              className="rounded-full object-cover h-52 w-52"
              src="./src/Images/usman.jpg"
              alt=""
            />
            <div className="border border-grey bg-primary w-60 py-3 space-y-1 px-4 text-white text-center rounded-md ">
              <p>Balogun Usman Temitope</p>
              <div className="flex justify-center px-4 space-x-3">
                <Link
                  to="https://github.com/Usmanbalogun044"
                  className="text-xl"
                >
                  <FaGithub color="white" />
                </Link>
                <Link
                  to="https://twitter.com/temitop02038232"
                  className="text-xl"
                >
                  <FaTwitter color="white" />
                </Link>
                <Link to="https://www.linkedin.com/in/balogun-usman-5a5176272/" className="text-xl">
                  <FaLinkedin color="white" />
                </Link>
                <Link
                  to="https://www.instagram.com/dolarhunter044"
                  className="text-xl"
                >
                  <FaInstagram color="white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-10 space-y-4 lg:w-2/3">
            <div className="space-y-1 text-center flex flex-col">
              <p className="text-white font-medium text-sm">ABOUT ME</p>
              <span className="text-secondary font-semibold tracking-widest lg:tracking-wide text-xl lg:text-3xl">
                Empowering ideas with robust backend solutions
              </span>
            </div>
            <p className="text-white tracking-wide">
              Hello and welcome to my portfolio! I'm Balogun Usman Temitope, a 
              Backend Developer dedicated to building scalable, secure, and efficient 
              server-side applications. I specialize in crafting APIs, optimizing databases, 
              and ensuring seamless functionality for web applications. I enjoy solving complex 
              challenges and staying updated with the latest backend technologies. 
              Thank you for visiting my portfolio! Please feel free to explore my projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;

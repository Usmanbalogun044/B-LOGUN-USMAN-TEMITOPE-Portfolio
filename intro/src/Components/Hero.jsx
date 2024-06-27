import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>

      <div className="bg-primary py-10 h-screen lg:flex lg:items-center">
        <div className="flex justify-between space-y-20 flex-col items-center container mx-auto px-4 lg:flex-row lg:px-7">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2">
            <div className="space-y-1 flex flex-col">
              <p className="text-white text-sm leading-[35px] font-semibold lg:text-xl">
                Hello, I'm{" "}
              </p>

              <p className="text-white text-3xl font-semibold lg:text-5xl">
                Oluwasuyi Timilehin
              </p>
            </div>
            <p className="text-grey tracking-wide opacity-100 lg:text-xl">
              A passionate
              <span className="text-secondary"> Frontend Web Developer </span>
              with 3 years experience creating user friendly websites.
            </p>
            <div className="flex space-x-4 text-xl text-white lg:text-2xl">
              <Link to="" className="">
                <FaLinkedin className="" />
              </Link>
              <Link to="https://twitter.com/OluwasuyiOlumi3" className="">
                <FaTwitter className="" />
              </Link>
              <button className="">
                <FaYoutube className="" />
              </button>
              <Link to="https://www.instagram.com/dxrkfacee/" className="">
                <FaInstagram className="" />
              </Link>
            </div>
          </div>
          <div className="">
            <img className="" src="./src/Images/web.png" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

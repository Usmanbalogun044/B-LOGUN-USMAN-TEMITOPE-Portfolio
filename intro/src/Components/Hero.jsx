import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="bg-primary py-10 lg:py-20 lg:h-screen lg:flex lg:items-center">
        <div className="flex justify-between flex-col items-center container mx-auto px-3 lg:flex-row lg:px-7">
          <div className="flex flex-col space-y-10 w-full lg:space-y-8 lg:w-1/2">
            <div className="space-y-2 flex flex-col">
              <p className="text-white text-sm leading-[35px] font-semibold lg:text-lg">
                Hello, I'm{" "}
                <span className="text-secondary">Oluwasuyi Timilehin</span>
              </p>

              <p className="text-white text-xl font-semibold lg:text-3xl">
                I'm a <span className="text-secondary">Frontend Developer</span>
              </p>
            </div>
            <p className="text-white opacity-100 ">
              I'm from Nigeria and i have been working as a frontend developer
              for more than 3 years. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque tempora a adipisci? Labore expedita
              totam laudantium aperiam veritatis velit? Doloribus quia numquam
              natus quidem ullam omnis quas commodi provident molestias?
            </p>
            <div className="flex space-x-3 text-xl text-white lg:text-2xl">
              <button className="">
                <FaLinkedin className="" />
              </button>
              <button className="">
                <FaTwitter className="" />
              </button>
              <button className="">
                <FaYoutube className="" />
              </button>
              <button className="">
                <FaInstagram className="" />
              </button>
            </div>
          </div>
          <div className="hidden mx-auto lg:flex bg-white h-80 border border-gray-300 rounded-lg">
            <img className="w-full rounded-lg" src="./src/Images/spider.JPG" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

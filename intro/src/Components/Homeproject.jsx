import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homeproject = () => {
  return (
    <>
      <div className="bg-primary py-10 text-white lg:py-20">
        <div className="container mx-auto space-y-10 px-4 lg:space-y-24">
          <div className="flex flex-col space-y-1">
            <p className="text-white text-sm font-medium">MY PROJECT</p>
            <p className="text-2xl font-semibold lg:text-3xl">
              What <span className="text-secondary">i have built</span>
            </p>
          </div>
          <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-10 lg:space-y-0 lg:items-center">
            <div className="flex flex-col lg:w-1/2">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex flex-row items-center space-x-3">
                  <p className="text-white text-xl font-semibold">Movie App</p>
                  <Link
                    className="text-xl"
                    to="https://github.com/Oluwasuyi-Timilehin/Movatti"
                  >
                    <FaGithub />
                  </Link>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-secondary px-3 py-1 rounded-md">
                    React.Js
                  </div>
                  <div className="bg-secondary px-3 py-1 rounded-md">
                    Tailwind css
                  </div>
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  illum aut quasi eaque, sit tempora eos, sed inventore ullam
                  iure quae molestias aliquid aspernatur nemo corporis, soluta
                  eius culpa obcaecati?
                </p>
              </div>
            </div>

            <img
              src="./src/Images/spider.png"
              className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
            <div className="bg-gray-300 text-black p-3 rounded-md flex flex-col lg:w-1/2">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex flex-row items-center space-x-3">
                  <p className="text-white text-xl font-semibold">Fast Care</p>
                  <Link
                    className="text-xl"
                    to="https://github.com/Zino234/FastCare"
                  >
                    <FaGithub />
                  </Link>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-secondary px-3 py-1 rounded-md">Html</div>
                  <div className="bg-secondary px-3 py-1 rounded-md">
                    Tailwind
                  </div>
                  <div className="bg-secondary px-3 py-1 rounded-md">
                    Javascript
                  </div>
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  illum aut quasi eaque, sit tempora eos, sed inventore ullam
                  iure quae molestias aliquid aspernatur nemo corporis, soluta
                  eius culpa obcaecati?
                </p>
              </div>
            </div>

            <img
              src="./src/Images/fastcare.png"
              className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeproject;

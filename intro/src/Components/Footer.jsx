import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-primary py-5">
        <div className="container mx-auto">
          <div className="px-4 flex flex-col space-y-2 text-white justify-center items-center">
            <div className="flex space-x-6">
              <Link
                to="https://github.com/Oluwasuyi-Timilehin"
                className="text-2xl"
              >
                <FaGithub color="white" />
              </Link>
              <Link
                to="https://twitter.com/OluwasuyiOlumi3"
                className=" text-2xl"
              >
                <FaTwitter color="white" />
              </Link>

              <Link to="" className="text-2xl">
                <FaLinkedin color="white" />
              </Link>
              <Link to="" className="text-2xl">
                <FaInstagram color="white" />
              </Link>
            </div>
            <Link to="" className="flex items-center space-x-3">
              <MdOutlineMail color="white" fontSize={25} />
              <a href="mailto:oluwasuyitimilehin@gmail.com?subject=Contact from Portfolio&body=Hello Timilehin,">
                oluwasuyitimilehin@gmail.com
              </a>
            </Link>
            <p className="text-white">2024 - Oluwasuyi Timilehin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

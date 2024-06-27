import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [display, setDisplay] = useState('hidden');
  const [open, setOpen] = useState(false);
  const [cicon, setCicon] = useState('hidden')

  return (
    <>
      <nav className="bg-primary py-3 text-white w-full sticky top-0">
        <div className="flex px-3 container mx-auto justify-between">
          <Link to="/" className="text-xl font-semibold">
            Oluwasuyi<span className="text-secondary">Timilehin</span>
          </Link>
          <div className="hidden lg:flex flex-row lg:space-x-10">
            
            <NavLink to="/resume" activeclassname="active">
              Github profile
            </NavLink>
            <NavLink to="/resume" activeclassname="active">
              Resume
            </NavLink>
            <NavLink to="/project" activeclassname="active">
              Projects
            </NavLink>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </div>
          <button
            onClick={() => {
              if (!open) {
                setDisplay("block");
                setOpen(true);
              } else if (open) {
                setDisplay("hidden");
                setOpen(false);
              }
            }}
            className="text-xl lg:hidden text-secondary"
          >
            <AiOutlineMenu />
          </button>
        </div>
      </nav>
      <div
        className={`fixed ${display} bg-primary text-white top-12 w-full z-40 lg:hidden h-screen`}
      >
        <p className="py-60 text-center">it the side bar bitches</p>
      </div>
    </>
  );
};

export default Navbar;

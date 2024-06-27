import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Homeskill from "../Components/Homeskill";
import Homeproject from "../Components/Homeproject";
import Homecontact from "../Components/Homecontact";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Homeskill />
      <Homeproject />
      <Homecontact />
    </>
  );
};

export default Homepage;

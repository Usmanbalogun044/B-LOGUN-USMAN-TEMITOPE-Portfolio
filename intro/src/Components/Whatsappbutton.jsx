import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsappbutton = () => {
  const phoneNumber = "+2347061403565";
  const message = encodeURIComponent(
    "Hi there! I found your portfolio and would like to connect."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <a
        href={whatsappLink}
        className="bg-green-500 space-x-1 text-white py-2 px-4 rounded-full fixed bottom-6 right-2 z-50 flex items-center justify-center lg:py-3 lg:px-6 lg:space-x-2 lg:bottom-8 lg:right-8"
      >
        <FaWhatsapp size={24} />
        <span>Contact Me</span>
      </a>
    </>
  );
};

export default Whatsappbutton;

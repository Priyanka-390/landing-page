import React from "react";
import logo from "../assets/images/logo.webp"

const Preloader = () => {
  return (
    <div className="bg-white flex justify-center flex-col items-center fixed top-0 left-0 right-0 bottom-0 h-full z-40">
          <img src={logo} alt="lo" className=" animate-bounce" />
          <p className="text-[#b00000] font-bold text-4xl">LEMON<span className="text-black font-bold">WARES</span>
            </p>
    </div>
  );
};

export default Preloader;

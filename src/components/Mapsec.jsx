import React from "react";
import clock from "../assets/images/clock.webp";
import cloud from "../assets/images/cloud.webp";
import ssl from "../assets/images/ssl.webp";
import hphone from "../assets/images/24.webp";
const card = [
  {
    icon: clock,
    title: "99.9% Uptime",
  },
  {
    icon: cloud,
    title: "Blazing Fast Web Hosting",
  },
  {
    icon: ssl,
    title: "Free SSL Certificates",
  },
  {
    icon: hphone,
    title: "24x7 Friendly Support",
  },
];
const Mapsec = () => {
    const icons = card.map((card,index)=>(
        <div key={index} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-3 pt-3">
        <div className="flex justify-center mb-3">
          <div className="w-[100px] h-[100px] rounded-full bg-[#B0000026] flex justify-center items-center">
            <img src={card.icon} alt="icon1" />
          </div>
        </div>
        <p className=" lg:text-xl md:text-lg text-base font-bold font-poppins leading-normal pb-1 text-center">
        {card.title}
        </p>
        <p className="text-xs font-light font-poppins leading-normal text-center">
          We Keep Your Web build Online 24x7x365. Downtime not only costs
          you lost visitors but also damages your reputation and search
          engine rankings.
        </p>
      </div>
    ))
  return (
    <div id="map" className="overflow-x-clip">
      <div className="max-w-[1215px] mx-auto px-3 overflow-x-clip">
        <div className="flex flex-wrap flex-row -mx-3 justify-center"data-aos="zoom-in">
          {icons}
        </div>
      </div>
    </div>
  );
};

export default Mapsec;
import React from "react";
import img1 from "../assets/images/cPanel.webp";
import img2 from "../assets/images/imunify.webp";
import img3 from "../assets/images/litespeed.webp";
import img4 from "../assets/images/softaculous.webp";
import img5 from "../assets/images/wordpress.webp";
import img6 from "../assets/images/cloudflare.webp";

const Hosting = () => {
  return (
    <div id="host">
      <div className="container max-w-[1284px] px-3 mx-auto md:pb-14 sm:pb-10 pb-8 overflow-x-clip" >
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="lg:w-1/2 w-full px-3"data-aos="fade-up">
            <h2 className="text-[#18191F] lg:text-start text-center mx-auto font-inter lg:text-5xl md:text-[40px] sm:text-4xl text-3xl font-extrabold leading-[133.333%]">
              True Cloud Web Hosting
            </h2>
            <p className="max-w-[573px] text-[#18191F] lg:text-start text-center mx-auto font-inter md:text-[18px] sm:text-base text-sm font-normal leading-[177.778%] lg:pt-8 md:pt-6 sm:pt-4 pt-1 lg:pb-16 md:pb-6 pb-4">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div className="lg:w-1/2 w-full px-3 justify-center"data-aos="fade-down">
            <div className="flex flex-row flex-wrap -mx-3 items-center">
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center">
                <img src={img1} alt="1" />
              </div>
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center">
                <img src={img2} alt="2" />
              </div>
              <div className="sm:w-1/3 w-1/2 px-3 sm:pt-0 pt-3 flex justify-center">
                <img src={img3} alt="3" />
              </div>
              <div className="sm:w-1/3 w-1/2 sm:pt-14 px-3 pt-3 flex justify-center">
                <img src={img4} alt="4" />
              </div>
              <div className="sm:w-1/3 w-1/2 sm:pt-14 px-3 pt-3 flex justify-center">
                <img src={img5} alt="5" />
              </div>
              <div className="sm:w-1/3 w-1/2 sm:pt-14 px-3 pt-3 flex justify-center">
                <img src={img6} alt="6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;

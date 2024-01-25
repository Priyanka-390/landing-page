import React from "react";
import img1 from "../assets/images/jpnl.webp";
import img2 from "../assets/images/Korane.webp";
import img3 from "../assets/images/Nadine.webp";
import img4 from "../assets/images/LeeveOn.webp";
import img5 from "../assets/images/Jrango.webp";
import img6 from "../assets/images/Crypto2.webp";

const Website = () => {
  return (
    <div className="lg:pt-[105px] md:py-20 sm:py-12 py-8 lg:pb-[125px]overflow-x-clip" id="site">
      <div className="container max-w-[1194px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="md:w-1/2 w-full px-3 md:pl-12"data-aos="fade-right">
            <h2 className="text-[#18191F] font-inter md:text-5xl md:text-start text-center mx-auto sm:text-4xl text-3xl font-extrabold leading-[133.333%]">
              We serve over 100 Nigerian Websites
            </h2>
            <p className="pt-2 text-[#18191F] font-inter text-[18px] md:text-start text-center max-md:mx-auto font-normal leading-[177.778%] max-w-[445px]">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div className="md:w-1/2 w-full px-3 flex md:justify-end justify-center"data-aos="fade-left">
            <div className="flex flex-row flex-wrap">
              <div className="w-1/3 px-3 flex md:justify-end justify-center">
                <img src={img1} alt="first" />
              </div>
              <div className="w-1/3 px-3 flex md:justify-end justify-center">
                <img src={img2} alt="sec" />
              </div>
              <div className="w-1/3 px-3 flex md:justify-end justify-center">
                <img src={img3} alt="thir" />
              </div>
              <div className="w-1/3 px-3 flex md:justify-end justify-center">
                <img src={img4} alt="fourt" />
              </div>
              <div className="w-1/3 px-3 flex md:justify-end justify-center">
                <img src={img5} alt="fif" />
              </div>
              <div className="w-1/3 px-3 flex md:justify-end justify-center">
                <img src={img6} alt="six" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;

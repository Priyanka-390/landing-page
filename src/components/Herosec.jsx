import React, { useState } from "react";
import girlimg from "../assets/images/girlimg.webp";
import triangle1 from "../assets/images/triangle1.webp";
import triangle2 from "../assets/images/triangle2.webp";
import triangle3 from "../assets/images/triangle3.webp";

const Herosec = () => {
  const [next, setnext] = useState("tab1");
  function tabchange(tab) {
    setnext(tab);
  }
  return (
    <div className="lg:pb-20 lg:pt-14 md:py-14 sm:py-10 py-8 overflow-x-clip" id="hero">
      <div className="container max-w-[1138px] px-3 mx-auto ">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/2 w-full px-3 " data-aos="fade-right" data-aos-delay='3000'>
            <div className="flex relative after:absolute max-w-[248px] lg:text-start text-center max-lg:mx-auto  after:left-[2px] after:bottom-[-3px] after:right-[5px] after:bg-[#D6D4D4E0] after:h-[2px]">
              <p
                onClick={() => tabchange("tab1")}
                className={`${
                  next === "tab1" ? "after:w-[70%] text-[#B00000]" : "text-[#D6D4D4E0]"
                } cursor-pointer relative after:absolute z-10 after:left-0 after:mx-auto after:right-0 after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0  font-poppins text-[15px] font-semibold leading-normal`}
              >
                Hosting
              </p>
              <p
                onClick={() => tabchange("tab2")}
                className={`${
                  next === "tab2"
                    ? "after:w-[70%] text-[#B00000]"
                    : "text-[#D6D4D4E0]"
                } cursor-pointer relative after:absolute z-10 after:left-0 after:mx-auto after:right-0 after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 ml-6 after:w-0  font-poppins text-[15px] font-semibold leading-normal`}
              >
                Domain
              </p>
              <p
                onClick={() => tabchange("tab3")}
                className={`${
                  next === "tab3"
                    ? "after:w-[70%] text-[#B00000]"
                    : "text-[#D6D4D4E0]"
                } cursor-pointer relative after:absolute z-10 after:left-0 after:mx-auto after:right-0 after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 ml-5  font-poppins text-[15px] font-semibold leading-normal`}
              >
                SEO
              </p>
              <p
                onClick={() => tabchange("tab4")}
                className={`${
                  next === "tab4"
                    ? "after:w-[70%] text-[#B00000]"
                    : "text-[#D6D4D4E0]"
                }  cursor-pointer relative after:absolute z-10 after:left-0 after:mx-auto after:right-0 after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 ml-4  font-poppins text-[15px] font-semibold leading-normal`}
              >
                Email
              </p>
            </div>
            <div className="md:pt-[26px] sm:pt-5 pt-4">
              {next === "tab1" && (
                <h1 className="text-[#2E2E2E] xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold md:!leading-[77.5px] lg:text-start text-center mx-auto">
                  Premium Web Hosting for Your Website
                </h1>
              )}
              {next === "tab2" && (
                <h1 className="text-[#2E2E2E] xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold lg:text-start text-center mx-auto leading-[77.5px]">
                  Premium Web Domain for Your Website
                </h1>
              )}
              {next === "tab3" && (
                <h1 className="text-[#2E2E2E]  xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold lg:text-start text-center mx-auto leading-[77.5px]">
                  Premium Web SEO for Your Website
                </h1>
              )}
              {next === "tab4" && (
                <h1 className="text-[#2E2E2E] xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold lg:text-start text-center mx-auto leading-[77.5px]">
                  Premium Web Email for Your Website
                </h1>
              )}
            </div>

            <div className="flex lg:justify-start justify-center ">
              <p  className="text-[#808080] lg:pt-8 md:pt-6 lg:text-start text-center sm:pt-3 pt-2 max-w-[448px] font-inter text-base font-normal md:!leading-[28px] tracking-[0.8px]">
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.
              </p>
            </div>
            <div className=" lg:pt-[60px] md:pt-14 sm:pt-6 pt-3 flex  gap-6 lg:justify-start justify-center">
              <button
                className="sm:p-3 p-2 bg-[#B00000] hover:bg-transparent hover:border-[#B00000] hover:text-[#B00000] border-transparent border-[2px] duration-500 hover:shadow-none rounded-[8px] shadow-[0px_0px_64px_0px_#B000004D] text-white font-poppins sm:text-sm text-xs font-normal leading-[171.429%]
"
              >
                Create an Account
              </button>
              <button className="sm:py-3 py-2 sm:px-[18px] px-2.5 text-black hover:bg-transparent hover:border-[#B00000] hover:text-[#B00000]   duration-500 hover:shadow-none font-poppins border-[2px] border-solid border-black rounded-[8px] sm:text-sm text-xs font-normal leading-[171.429%] ">
                Choose your plan
              </button>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay='3000' className="lg:w-1/2 w-full px-3 flex lg:justify-end justify-center lg:pt-0 pt-4 xl:translate-x-14">
            <div className="relative">
              <img src={girlimg} alt="img" />
              <img
                src={triangle1}
                alt="1"
                className="absolute bottom-[45%] left-[-6%]"
              />
              <img
                src={triangle2}
                alt="1"
                className="absolute top-[15%] right-[-4%]"
              />
              <img
                src={triangle3}
                alt="1"
                className="absolute bottom-[15%] right-[-5%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;

import React from "react";
import crypto from "../assets/images/Crypto.webp";
import jpnl from "../assets/images/jpnl2.webp";
import leevon2 from "../assets/images/LeeveOn2.webp";

const Real = () => {
  return (
    <div className="lg:pt-[161px] md:pt-20 pt-14 overflow-x-clip" id="real">
      <div className="max-w-[1194px] mx-auto  px-3 ">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="lg:w-1/2 w-full px-3 pb-9">
            <div className="flex justify-center lg:justify-end pb-6 ">
              <div>
                <h2 className="lg:text-5xl md:text-[40px] sm:text-4xl text-[30px] font-inter font-extrabold md:!leading-[64px] text-[#18191F] lg:max-w-[445px] max-w-[600px] sm:mb-2 mb-1 text-center lg:text-start relative after:absolute after:left-[-12px] lg:after:left-[-55px] xl:after:left-[-95px] after:top-[-56px] z-1 after:z-[-1] after:content-[url(./assets/images/Quote.webp)] after:w-[143px] after:h-[120px]">
                  Real Stories from Real Customers
                </h2>
                <p className="font-inter text-lg  font-normal leading-[177.778%] text-[#18191F] text-center lg:text-start">
                  Get inspired by these stories.
                </p>
              </div>
            </div>
            <div className="flex lg:justify-end justify-center">
              <div className="lg:max-w-[445px] lg:w-[350px] bg-white shadow-[0px_10px_20px_0px_#29292A12] md:px-8 sm:px-4 px-3 md:pt-12 sm:pt-8 pt-4 xl:pb-24 lg:pb-20 sm:pb-10 pb-5 rounded-lg">
                <img
                  src={crypto}
                  alt="lOGO"
                  className="md:pb-6 sm:pb-4 pb-2 pl-8"
                />
                <div className="flex gap-4">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="min-w-4 min-h-[14px]"
                  >
                    <g opacity="0.3" clipPath="url(#clip0_1171_227)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z"
                        fill="#2EC5CE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1171_227">
                        <rect width="16" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <p className="font-inter sm:text-base text-sm leading-[200%] font-normal md:pb-6 sm:pb-4 pb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                    <h4 className="text-lg font-inter font-bold leading-[155.556%] text-[#18191F] ">
                      Floyd Miles
                    </h4>
                    <p className="font-inter text-sm leading-[171.429%] font-medium text-[#969BAB]">
                      Vice President, CLI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-3 flex flex-col lg:justify-end items-center lg:items-start">
            <div className="lg:max-w-[445px] bg-white shadow-[0px_10px_20px_0px_#29292A12] md:px-8 sm:px-4 px-3 pt-[39px] pb-[14px] rounded-lg lg:mb-8 md:mb-9 mb-5">
              <img src={jpnl} alt="logo" className="pl-8 pb-[15px]" />
              <div className="flex gap-4">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-4 min-h-[14px]"
                >
                  <g opacity="0.3" clipPath="url(#clip0_1171_201)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z"
                      fill="#2EC5CE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1171_201">
                      <rect width="16" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="sm:text-base text-sm font-inter leading-[200%] font-normal md:mb-6 sm:mb-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                  <h4 className=" text-lg font-inter font-bold leading-[155.556%]">
                    Jane Cooper
                  </h4>
                  <p className=" font-inter text-sm font-medium leading-[171.429%] text-[#969BAB]">
                    CEO, JPNL
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:max-w-[350px] w-full bg-white shadow-[0px_10px_20px_0px_#29292A12] md:px-8 sm:px-4 px-3 lg:pt-[41px] sm:pt-8 pt-4 pb-8">
              <img src={leevon2} alt="logo" className="pl-8" />
              <div className="flex gap-4">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-4 min-h-[14px]"
                >
                  <g opacity="0.3" clipPath="url(#clip0_1171_214)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z"
                      fill="#2EC5CE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1171_214">
                      <rect width="16" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="sm:text-base text-sm font-inter leading-[200%] font-normal md:mb-6 sm:mb-4 mb-3">
                    LemonWares saved our time in Hosting my company page.
                  </p>
                  <h4 className="text-lg font-inter font-bold leading-[155.556%]">
                    Kristin Watson
                  </h4>
                  <p className="font-inter text-sm font-medium leading-[171.429%] text-[#969BAB]">
                    Co-Founder, LeeveOn Branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Real;

import React from 'react'
import footerlogo from "../assets/images/footlogo.webp"

const Footersec = () => {
    const shreya = new Date()
    const priyanka = shreya.getFullYear()
  return (
      <div className="bg-[#B00000] overflow-x-clip">
      <div className="max-w-[1221px] mx-auto px-3 md:pt-[64px] sm:pt-12 pt-10">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="xl:w-5/12 lg:w-4/12 w-full px-3">
            <img src={footerlogo} alt="logo" />
            <p className=" max-w-[296px] font-inter text-base font-normal leading-[32px] text-[#E6E6E6] pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>
          </div>
          <div className="xl:w-7/12 lg:w-8/12 w-full px-3 pt-4">
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="md:w-1/4 sm:w-1/3 w-1/2 px-3">
                <ul>
                  <li className=" text-white font-inter text-sm sm:text-base font-bold leading-[24px]">
                    Service
                  </li>
                </ul>
                <ul>
                  <li className="md:pt-6 pt-3">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Domain
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Shared Hosting
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Cloud Hosting
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Private Hosting
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/4 sm:w-1/3 w-1/2 px-3">
                <ul>
                  <li className=" text-white font-inter text-sm sm:text-base font-bold leading-[24px]">
                    Hosting
                  </li>
                </ul>
                <ul>
                  <li className="md:pt-6 pt-3">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Cheap Hosting
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Hosting Wordpress
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Email Hosting
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3 ">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Hosting Unlimited
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/4 sm:w-1/3 w-1/2 md:pt-0 pt-6 px-3">
                <ul>
                  <li className=" text-white font-inter text-sm sm:text-base font-bold leading-[24px]">
                    Company
                  </li>
                </ul>
                <ul>
                  <li className="md:pt-6 pt-3 ">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      About
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3 ">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Career
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3 ">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/4 sm:w-1/3 w-1/2 md:pt-0 pt-6 px-3">
                <ul>
                  <li className=" text-white font-inter text-sm sm:text-base font-bold leading-[24px]">
                    Help
                  </li>
                </ul>
                <ul>
                  <li className="md:pt-6 pt-3 ">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="md:pt-6 pt-3 ">
                    <a
                      href="#"
                      className="relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-white after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[80%]  font-inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                    >
                      Help support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-white font-inter text-sm sm:text-base font-normal leading-[32px] lg:pt-[96px] md:py-20 sm:py-14 py-8 lg:pb-[80px]">
          Built by Jeremiah with &#129293; in Lagos. Copyright {priyanka}
        </p>
      </div>
    </div>
  )
}

export default Footersec
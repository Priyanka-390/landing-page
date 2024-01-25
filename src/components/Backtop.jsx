import React, { useState } from "react";
import backtopicon from "../assets/images/backtop.webp"
const Backtop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 flex justify-center rounded-full items-center p-2 w-[55px] h-[55px] bg-[#b00000] fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300  hover:bg-white hover:shadow-[1px_1px_5px_5px_#b00000] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <img className="w-full rounded-full" src={backtopicon} alt="backtoptop"/>
            </button>
        </div>
    );
};

export default Backtop;
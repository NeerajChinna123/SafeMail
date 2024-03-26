import { motion } from 'framer-motion';
import React, { useState } from "react";

import { FaDumbbell } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";

const animationVariants = {
    initial: { y: -15, opacity: 0 }, // Starting position off-screen (above)
    animate: { y: 0, opacity: 1 }, // Ending position (on-screen)
  };
  
  const animationTransition = {
    duration: 0.9, // Duration of the animation
    delay: 6, // Delay before the animation starts (in seconds)
  };
  
function Nav() {
    const [navState, setNavState] = useState("");
    return (
        <motion.div initial="initial"
        animate="animate"
        variants={animationVariants}
        transition={animationTransition} className="fixed top-[0.1rem] z-50  transform -translate-x-1/2 -translate-y-1/2">
        <div className="  flex ml-1 bg-black  backdrop-blur-lg md:ml-0 flex-row relative justify-center items-center mt-[1.8rem] md:mt-[2.5rem] h-[3.2rem]  border border-b-[0.1rem]  rounded-3xl border-neutral-800 space-x-7 md:space-x-10 pr-8 py-6">
          <div
             className=" left-1/2 absolute top-0 w-[150px] user-select-none center pointer-events-none h-px max-w-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>

          <div
            onClick={() => setNavState("FitZone")}
            className={
              navState == "FitZone"
                ? "flex flex-row  space-x-2 hover:cursor-pointer items-center opacity-100  transition-all transform duration-300"
                : "flex flex-row  space-x-2 hover:cursor-pointer items-center opacity-50 transition-all transform duration-300 "
            }
          >
            <FaDumbbell className="h-[1.2rem] w-[1.2rem] text-white" />
            <p className="text-white text-sm md:inline-block hidden ">
              Fit-Zone
            </p>

            {navState == "FitZone" && (
              <div className="absolute border-t-[0.07rem] w-[1.9rem] md:w-[4.2rem] right-[-0.4rem] md:right-auto  md:left-auto border-white bottom-0 top-8 transition-all transform duration-300"></div>
            )}
          </div>
          <div
            onClick={() => setNavState("ZenZone")}
            className={
              navState == "ZenZone"
                ? "flex flex-row  space-x-2 hover:cursor-pointer items-center opacity-100 transition-all transform duration-300"
                : "flex flex-row  space-x-2 hover:cursor-pointer items-center opacity-50 transition-all transform duration-300"
            }
          >
            <GiMeditation className="h-[1.2rem] w-[1.2rem] text-white" />
            <p className=" text-white text-sm md:inline-block hidden">
              Zen-Zone
            </p>

            {navState == "ZenZone" && (
              <div className="absolute border-t-[0.07rem] md:w-[5rem] w-[2.3rem] right-[-0.6rem] md:right-auto md:left-auto border-white bottom-0 top-8 transition-all transform duration-300"></div>
            )}
          </div>
          <div
            onClick={() => setNavState("EpicQuests")}
            className={
              navState == "EpicQuests"
                ? "flex flex-row  space-x-2 hover:cursor-pointer items-center opacity-100 transition-all transform duration-300"
                : "flex flex-row  space-x-2 hover:cursor-pointer items-center opacity-50 transition-all transform duration-300"
            }
          >
            <TbMoneybag className="h-[1.2rem] w-[1.2rem] text-white" />
            <p className=" text-white text-sm md:inline-block hidden">
              Epic-Quests
            </p>
            {navState == "EpicQuests" && (
              <div className="absolute border-t-[0.07rem] md:w-[6rem] w-[1.8rem] right-[-0.3rem] md:right-auto md:left-auto border-white bottom-0 top-8 transition-all transform duration-300"></div>
            )}
          </div>
        </div>
      </motion.div>
    )
}

export default Nav

import React from "react";
import { GiRunningNinja } from "react-icons/gi";
import { motion } from "framer-motion";
import { HumanParticle } from "@/components/HumanParticle";
import { BannerType } from "../../typings";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const animationVariants = {
  initial: { y: 15, opacity: 0 }, // Starting position off-screen (above)
  animate: { y: 0, opacity: 1 }, // Ending position (on-screen)
};

const animationTransition = {
  duration: 0.9, // Duration of the animation
  delay: 4, // Delay before the animation starts (in seconds)
};

export interface propsData {
  bannerData: [BannerType];
}

function Banner(props: propsData) {
  return (
    <div className="max-w-[70rem]  mx-auto mt-10 grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:pl-10">
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationVariants}
        transition={animationTransition}
        className="flex flex-col space-y-9 md:pt-6"
      >
        <div className="w-[100%]">
          <h1 className="md:text-7xl md:leading-[4.8rem]  md:text-[4rem] font-inter font-[500]  md:leading-[5.5rem] text-center lg:text-start text-black text-lg">
             Smart Umpire: Speedy, Accurate Runout Decisions
          </h1>
        </div>
        <div className="md:w-[95%] px-8 md:px-[6rem] lg:px-0">
          <p className="text-[rgba(239,247,255,.615)] font-inter md:text-xl text-slate-700 text-[1.4rem] text-center lg:text-start md:leading-[2rem]">
          Get quick and accurate runout decisions in cricket with Smart Umpire, our web app that utilizes a side-angle view to ensure every call is precise, streamlining the game by significantly reducing delays.
          </p>
        </div>
        <motion.a
          whileTap={{ scale: 0.99 }}
          href="#runOutPred"
          className="rounded-full shadow-md mx-auto lg:mx-0 group transition-all transform duration-300  bg-gray-900 hover:cursor-pointer md:w-[50%]"
        >
          <div className="md:group-hover:scale-105 transition-all flex flex-row justify-center space-x-2 items-center p-5 md:p-4 transform duration-500">
            <p className="text-white text-lg font-inter font-semibold text-center ">
              Try Now!
            </p>
            <ArrowDownCircleIcon className="text-white w-8 h-8 animate-pulse" />
          </div>
        </motion.a>
      </motion.div>

      <motion.div className="mx-auto lg:mx-0">
        <HumanParticle />
      </motion.div>
    </div>
  );
}

export default Banner;

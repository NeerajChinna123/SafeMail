
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "./Nav";

const animationVariants = {
  initial: { y: -15, opacity: 0 }, // Starting position off-screen (above)
  animate: { y: 0, opacity: 1 }, // Ending position (on-screen)
};

const animationTransition = {
  duration: 0.9, // Duration of the animation
  delay: 4, // Delay before the animation starts (in seconds)
};

function Header() {
 
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
      transition={animationTransition}
      className="flex flex-row max-w-7xl mx-auto justify-between px-3 lg:px-0"
    >
      <div className="mt-3 md:mt-[0.8rem]">
        <Image
          alt="logo"
          className="md:h-[7rem] object-contain md:w-[7rem] w-[5.5rem] h-[5.5rem]"
          width={100}
          height={90}
          src="/Smart Umpire.svg"
        />
      </div>

    

      {/* <div className=" mt-[2rem] md:mt-[2.7rem]  ml-[0.2rem] md:ml-0  ">
        <motion.div
          whileTap={{ scale: 0.99 }}
          className="flex group hover:cursor-pointer transition-all transform duration-300"
        >
          <p className="text-[0.8rem] md:text-sm  text-black shadow-sm group-hover:shadow-neutral-800 transition-all transform duration-200 border-2 border-neutral-700 px-4 md:px-6 py-3 rounded-3xl">
            Sign In
          </p>
        </motion.div>
      </div> */}
     
    </motion.div>
  );
}

export default Header;

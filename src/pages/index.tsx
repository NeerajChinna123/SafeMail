
import AfterEffectsVideo from "../components/AfterEffects";
import { BannerType, FitZoneType } from "../../typings";
import { EllipsisHorizontalCircleIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon, ShieldExclamationIcon, BoltIcon, AtSymbolIcon } from '@heroicons/react/24/solid'
import { useScroll } from "framer-motion";
import { useState } from "react";
import { motion } from 'framer-motion'


export interface propsData {
  banner: [BannerType];
  fitZone: [FitZoneType];
}

const animationVariants = {
  initial: { opacity: 0 }, // Starting position off-screen (above)
  animate: { opacity: 1 }, // Ending position (on-screen)
};

const animationTransition = {
  duration: 0.9, // Duration of the animation
  delay: 3.8, // Delay before the animation starts (in seconds)
};

const Main = (props: propsData) => {

  const [currentNav, setCurrentNav] = useState('Emails')

  const [currentNav1, setCurrentNav1] = useState('')
  return (
    //@ts-ignore
    <div className="relative">
      {/* @ts-ignore */}
      <div className="relative">
        {/* @ts-ignore */}
        <div className="h-screen bg-white">
          <AfterEffectsVideo />
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
      </div>
      {/* @ts-ignore */}
      <main className="bg-white min-h-screen">

        <div className="max-w-7xl mx-auto mt-[4rem] border border-solid-800 rounded-lg shadow shadow-md shadow-gray-400">
          <motion.div initial="initial"
            animate="animate"
            variants={animationVariants}
            transition={animationTransition} className="grid grid-cols-4 gap-x-4">
            <div className="col-span-1 ">
              <div className="flex flex-col relative ">
                <div className="flex flex-row p-4   justify-between items-center  mt-[-1rem]">
                  <img className="h-[9rem] w-[9rem]" src='/SE.png' />

                  <div>
                    <EllipsisHorizontalCircleIcon className="h-10 w-10 text-black" />
                  </div>
                </div>
                <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-full  absolute top-[7.5rem]">

                </div>

                <div className=" flex flex-col space-y-1 pl-12 mt-[-1.2rem] w-full">
                  <div>
                    <p className="text-gray-500 text-lg font-bold">Inbox</p>
                  </div>



                  <div onClick={() => setCurrentNav('Requests')} className={currentNav == 'Requests' ? "flex cursor-pointer flex-row space-x-4 p-3 items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out" : "flex cursor-pointer transition-all transform duration-200 ease-in-out p-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <UserPlusIcon className={currentNav == 'Requests' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Requests' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Requests</p>
                  </div>

                  <div onClick={() => setCurrentNav('Emails')} className={currentNav == 'Emails' ? "flex cursor-pointer flex-row space-x-4 p-3 items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out" : "flex cursor-pointer transition-all transform duration-200 ease-in-out p-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <EnvelopeIcon className={currentNav == 'Emails' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Emails' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Emails</p>
                  </div>


                  <div onClick={() => setCurrentNav('Phishing Attempt')} className={currentNav == 'Phishing Attempt' ? "flex cursor-pointer flex-row space-x-4 p-3 items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out" : "flex cursor-pointer transition-all transform duration-200 ease-in-out p-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <ShieldExclamationIcon className={currentNav == 'Phishing Attempt' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Phishing Attempt' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Phishing Attempt</p>
                  </div>



                  <div onClick={() => setCurrentNav('Texts')} className={currentNav == 'Texts' ? "flex cursor-pointer flex-row space-x-4 p-3 items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out" : "flex cursor-pointer transition-all transform duration-200 ease-in-out p-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <ChatBubbleLeftEllipsisIcon className={currentNav == 'Texts' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Texts' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Texts</p>
                  </div>

                  <div onClick={() => setCurrentNav('Calls')} className={currentNav == 'Calls' ? "flex cursor-pointer flex-row space-x-4 p-3 items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out" : "flex cursor-pointer transition-all transform duration-200 ease-in-out p-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <PhoneIcon className={currentNav == 'Calls' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Calls' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Calls</p>
                  </div>


                </div>


                <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-full  absolute top-[28.5rem]">



                </div>

                <div className=" flex flex-col space-y-2 pl-12 mt-[1.8rem] w-full">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-500 text-lg font-bold">Categories</p>
                    <PlusIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <div onClick={() => setCurrentNav1('Personal')} className={currentNav1 == 'Personal' ? "flex cursor-pointer flex-row space-x-4 p-3 items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out" : "flex cursor-pointer transition-all transform duration-200 ease-in-out p-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <AtSymbolIcon className={currentNav1 == 'Personal' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav1 == 'Personal' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Personal</p>
                  </div>

                  <div onClick={() => setCurrentNav1('Entertainment')} className={currentNav1 == 'Entertainment' ? "flex cursor-pointer flex-row space-x-4  items-center bg-black mt-[-1rem] rounded-lg w-full transition-all transform duration-200 ease-in-out px-3" : "flex cursor-pointer transition-all transform duration-200 ease-in-out px-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <BoltIcon className={currentNav1 == 'Entertainment' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav1 == 'Entertainment' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Entertainment</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* @ts-ignore */}
        <div className="">
          {/* <Header /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        <div className="">
          {/* <Banner bannerData={props?.banner} /> */}
          {/* <PersonalAiTrainer fitZone={props?.fitZone}  /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        <div>
          {/* @ts-ignore */}
          {/* <RunoutPrediction /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}

        {/* @ts-ignore */}
      </main>
      {/* <div className="max-w-7xl ml-1 lg:mx-auto flex flex-row justify-center">
        <Nav />
      </div> */}
      {/* <div className="  max-w-7xl  lg:mx-auto  ">
        <AudioComponent />
      </div> */}
      {/* @ts-ignore */}
    </div>
  );
};

export default Main;

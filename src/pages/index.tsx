
import AfterEffectsVideo from "../components/AfterEffects";
import { BannerType, FitZoneType } from "../../typings";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon, UserIcon, BellIcon, PlusCircleIcon, SpeakerWaveIcon, PlayIcon, CheckBadgeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from "react";

import { Squares2X2Icon, QueueListIcon, MagnifyingGlassIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import ActivityTabs from "@/Containers/ActivityTabs";
export interface propsData {
  banner: [BannerType];
  fitZone: [FitZoneType];
}

const animationVariants = {
  initial: { opacity: 0 }, // Starting position off-screen (above)
  animate: { opacity: 1 }, // Ending position (on-screen)
};

const animationTransition = {
  duration: 0.7, // Duration of the animation
  delay: 5.4, // Delay before the animation starts (in seconds)
};

const Main = (props: propsData) => {

  const [navSelect, setNavSelect] = useState(false);

  const [navSelect1, setNavSelect1] = useState(false);

  const [navSelect2, setNavSelect2] = useState(false);

  const [progress, setProgress] = useState(0); // Progress state

  const [rem, setRem] = useState(0);
  const videoRef = useRef(null); // Reference to the video element

  const videoPlay = () => {
    //@ts-ignore
    videoRef.current.play();
  }

  useEffect(() => {
    // Function to update progress
    const updateProgress = () => {
      //@ts-ignore
      //@ts-ignore

      setTimeout(() => {
        var vide = document.getElementById('myVideo');
        //@ts-ignore
        vide.muted = false;
      }, 5600);




      const video = videoRef.current;
      if (videoRef.current) {
        //@ts-ignore
        videoRef.current.play()
          //@ts-ignore
          .catch(error => {
            // Autoplay was prevented.
            // Show a "Play" button so that the user can start playback.
            console.error('Video playback failed', error);
          });
      }
      //@ts-ignore
      const value = (video.currentTime / video.duration) * 100;
      //@ts-ignore
      setProgress(value.toFixed(2));
      const width = 47.5;
      setRem((progress / 100) * width);
      // Update state, keep only two decimal places
    };

    const videoElement = videoRef.current;
    //@ts-ignore
    videoElement.addEventListener('timeupdate', updateProgress);

    // Cleanup function to remove the event listener
    return () => {
      //@ts-ignore
      videoElement.removeEventListener('timeupdate', updateProgress);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  // var video = document.getElementById('myVideo');

  // //@ts-ignore
  // video.addEventListener('click', function () {
  //   //@ts-ignore
  //   video.muted = !video.muted;
  // });

  return (
    //@ts-ignore
    <div className="relative flex flex-row">
      {/* @ts-ignore */}
      <div className="relative flex flex-row">
        {/* @ts-ignore */}
        <div className="h-screen bg-white flex flex-row">
          <AfterEffectsVideo />
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
      </div>
      {/* @ts-ignore */}
      <main onClick={() => videoPlay} className="bg-[url('/bg-8.jpg')]   bg-cover  min-h-screen">
        <div className=" min-h-screen relative max-w-[100rem] mx-auto mt-[15rem]">
          <AnimatePresence>
            <motion.div initial="initial"
              animate="animate"
              variants={animationVariants}
              transition={animationTransition} className="relative mt-5 flex flex-row space-x-4">
              <motion.div
                onClick={() => {
                  setNavSelect(!navSelect); setTimeout(() => {
                    setNavSelect1(!navSelect)
                  }, navSelect1 == false ? 400 : 0);

                  setTimeout(() => {
                    setNavSelect2(!navSelect)
                  }, navSelect2 == false ? 0 : 600);
                }

                }


                className={navSelect ? "flex flex-col w-[12.5%] h-[90%] transition-all transform duration-700 ease-in-out  justify-center  pt-6 pb-6 pl-[0.6rem] pr-[0.6rem]  rounded-3xl space-y-[0.4rem] backdrop-blur-lg bg-white/10 " : "flex flex-col w-[4%] transition-all transform duration-700 ease-in-out  justify-center  pt-6 pb-4 pl-[0.6rem] pr-[0.6rem] rounded-3xl space-y-[0.4rem] backdrop-blur-lg bg-white/10 "}>
                <div>
                  <img src='/MAinLogo.svg' className={navSelect ? "h-[4rem]  hover:cursor-pointer mb-1 w-[11rem] transition-all transform duration-300 ease-in-out" : "h-[3rem]  transition-all transform duration-300 ease-in-out hover:cursor-pointer mb-1 w-[10rem]"} />
                </div>
                <div>
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <HomeIcon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">For You</motion.p>}
                  </div>
                </div>

                <div>
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <Squares2X2Icon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">All Posts</motion.p>}
                  </div>
                </div>


                <div>
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <QueueListIcon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">My Lists</motion.p>}
                  </div>
                </div>

                <div>
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <UserIcon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">Contacts</motion.p>}
                  </div>
                </div>
                <div>
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <MagnifyingGlassIcon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">Search</motion.p>}
                  </div>
                </div>

                <div>
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" xmlSpace="preserve" className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "}><g><path d="M256 0C114.844 0 0 114.844 0 256s114.844 256 256 256 256-114.844 256-256S397.156 0 256 0zm0 469.333c-117.635 0-213.333-95.698-213.333-213.333S138.365 42.667 256 42.667 469.333 138.365 469.333 256 373.635 469.333 256 469.333z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path><path d="m379.448 118.24-170.885 85.552a10.671 10.671 0 0 0-4.771 4.771L118.24 379.448a10.666 10.666 0 0 0 2 12.313 10.656 10.656 0 0 0 7.542 3.125 10.6 10.6 0 0 0 4.771-1.125l170.885-85.552a10.671 10.671 0 0 0 4.771-4.771l85.552-170.885a10.666 10.666 0 0 0-2-12.313c-3.24-3.25-8.23-4.042-12.313-2zM256 277.333c-11.76 0-21.333-9.573-21.333-21.333s9.573-21.333 21.333-21.333 21.333 9.573 21.333 21.333-9.573 21.333-21.333 21.333z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path></g></svg>
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">Explore</motion.p>}
                  </div>
                </div>

                <div>
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <div>
                      <BellIcon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                    </div>
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">Notifications</motion.p>}
                  </div>
                </div>


                {/* <div>
                <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                  <BellIcon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                  {navSelect1 && <motion.p initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">Notifications</motion.p>}
                </div>
              </div> */}

                <div className=" relative pt-2 cursor-pointer group" >

                  <div className="bg-white ml-2 h-8 w-8   rounded-full  cursor-pointer ">

                  </div>
                  <PlusCircleIcon className={navSelect ? "h-14 absolute w-14 z-100 left-[-0.02rem] top-[-0.2rem] text-cyan-600 group-hover:text-cyan-700 transition-all transform duration-200 ease-in-out " : "h-12 absolute w-12 z-100 left-[-0.06rem] top-[-0.2rem] text-cyan-600 group-hover:text-cyan-700 transition-all transform duration-200 ease-in-out "} />

                  {navSelect1 && <motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans top-[0.7rem] left-[3.8rem] absolute  transition-all transform duration-300 ease-in-out">Add Post</motion.p>}
                </div>

                <div className="relative pt-2 pb-3 ">
                  <div className={navSelect ? "backdrop-blur-lg h-12 w-full hover:cursor-pointer opacity-40  bg-cyan-400 transition-all transform duration-700 ease-in-out relative h-10 w-10 mt-1 rounded-full " : "backdrop-blur-lg h-12 w-12 hover:cursor-pointer opacity-40  bg-cyan-400 transition-all transform duration-700 ease-in-out relative h-10 w-10 mt-1 rounded-full"}>

                  </div>
                  <img src="./Peter.jpeg" className={navSelect ? "h-10 hover:cursor-pointer transition-all transform duration-200 ease-in-out absolute top-[0.6rem] left-[0.4rem] z-50 w-10 border border-cyan-600 mt-2 rounded-full" : "h-9 transition-all transform duration-200 ease-in-out hover:cursor-pointer absolute top-[0.6rem] left-[0.4rem] z-50 w-9 border border-cyan-600 mt-2 rounded-full"} />


                  {navSelect1 && <motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }} className="text-cyan-300 font-semibold text-lg  font-sans top-[1.4rem] left-[3.8rem] absolute  transition-all transform duration-300 cursor-pointer ease-in-out">Profile</motion.p>}
                </div>
                <div className="border  border-l-0 border-r-0 border-b-0 border-t-[0.1rem] ml-[0.1rem] opacity-40 border-white w-[98%] ">

                </div>



                <div className="pt-1">
                  <div className={navSelect ? "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-3 items-center" : "flex hover:bg-gray-300 p-2 cursor-pointer transition-all transform duration-300 ease-in-out  rounded-full hover:bg-opacity-40 opacity-90 hover:opacity-100 flex-row space-x-0 items-center"} onClick={() => setNavSelect(!navSelect)}>
                    <Cog6ToothIcon className={navSelect ? "h-10 w-10 p-0 text-white transition-all transform duration-200 ease-in-out " : "h-9 w-9 p-0 text-white transition-all transform duration-200 ease-in-out "} />
                    {navSelect1 && <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} className="text-white font-semibold text-lg opacity-80 font-sans pt-1  transition-all transform duration-300 ease-in-out">Settings</motion.p>}
                  </div>
                </div>

              </motion.div>

            </motion.div>
          </AnimatePresence>
          <motion.div
            initial="initial"
            animate="animate"
            variants={animationVariants}
            transition={animationTransition}

            className={navSelect2 ? "absolute  z-[-50] top-[-1.9rem] left-[6rem]" : "absolute  z-[100] top-[-1.9rem] left-[6rem]"}>
            <div className=" relative p-6 flex flex-row backdrop-blur-lg bg-white/10 w-[86%] rounded-3xl">
              <video id="myVideo" ref={videoRef} muted autoPlay loop className=" w-[45rem] rounded-lg ">
                <source src="/Digital-age-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>


              <div className="absolute top-10 left-10 backdrop-blur-lg bg-black/40 p-2 rounded-3xl">
                <p className="text-white font-bold text-md tracking-wide">@PeterMichaels</p>
              </div>
              <div className="z-[100] absolute top-10 cursor-pointer left-[43.2rem] backdrop-blur-lg bg-black/40 p-2 rounded-3xl">
                <SpeakerWaveIcon className="h-4 w-4 cursor-pointer text-white font-semibold" />
              </div>
              <div className="z-[100] absolute bottom-11 cursor-pointer left-10 backdrop-blur-lg bg-black/40 p-3 rounded-3xl">
                <div className="flex flex-row items-center  justify-center space-x-1">
                  <PlayIcon className="h-5 w-5 cursor-pointer text-white font-semibold" />
                  <p className="text-white font-bold text-lg tracking-wider">4k</p>
                </div>
              </div>

              <div className="ml-6 mt-1 ">
                <div className="flex flex-col space-y-2">
                  <div className="flex relative flex-row space-x-4 items-center">
                    <div>
                      <img src="./Peter.jpeg" className="h-[4rem] w-[4rem] rounded-full" />
                    </div>

                    <div>
                      <p className="text-[1.4rem] font-bold">
                        Peter Michaels
                      </p>

                    </div>

                    <div className="relative">
                      <div className="absolute z-[-50] bg-white rounded-full h-4 w-4 left-2 top-2"></div>
                      <CheckBadgeIcon className="h-8 w-8 text-blue-500 " />
                    </div>

                    <div className="absolute right-2">
                      <div className=" backdrop-blur-lg p-1 bg-black/10 rounded-full">
                        <EllipsisHorizontalIcon className="text-white h-8 w-8" />
                      </div>
                    </div>
                  </div>


                  <div className="pl-2 pt-3">
                    <p className="text-white text-lg font-semibold w-[90%]">Modern tools for a modern world! Make sure you sign up today! www.digitalage.com
                      <span className="text-cyan-200">#freedom #freespeechmatters #making #memories</span></p>
                  </div>



                  <ActivityTabs />
                </div>

              </div>

            </div>
          </motion.div>
          <motion.div initial="initial"
            animate="animate"
            variants={animationVariants}
            transition={animationTransition} className="absolute bottom-[26.8rem] left-[7rem] ">
            <motion.div className="relative backdrop-blur-lg bg-white/20 w-[45.5rem] h-[0.9rem] rounded-full ">
              <motion.div style={{ width: `${progress}%` }} className={`absolute bg-cyan-500 transition-all ease-out duration-1000 ease-in-out  h-[0.9rem] rounded-full `}>

              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </main>

    </div>


  );
};



export default Main;

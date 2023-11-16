// "use client";
// import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
// import useSound from "use-sound";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";

// const animationVariants = {
//   initial: { y: 15, opacity: 0 }, // Starting position off-screen (above)
//   animate: { y: 0, opacity: 1 }, // Ending position (on-screen)
// };

// const animationTransition = {
//   duration: 0.9, // Duration of the animation
//   delay: 4.2, // Delay before the animation starts (in seconds)
// };

// function AudioComponent() {
//   const [pla, setPla] = useState(false);

//   //   const [playSound, { stop, pause }] = useSound("/FitZenAudioTrack.m4a", {
//   //     autoPlay: true,
//   //     loop: true,
//   //     volume: 0.25,
//   //   });

//   //   useEffect(() => {
//   //     if (pla) {
//   //       playSound();
//   //     }
//   //     // eslint-disable-next-line react-hooks/exhaustive-deps
//   //   }, []);

//   const [hasWindow, setHasWindow] = useState(false);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setHasWindow(true);
//     }
//   }, []);

//   console.log("asasas : ", hasWindow);

//   return (
//     <>
//       <motion.div
//         initial="initial"
//         animate="animate"
//         variants={animationVariants}
//         transition={animationTransition}
//         className="fixed bottom-[2rem] z-50 right-[1.8rem]  lg:right-[8rem] "
//       >
//         {!pla ? (
//           <>
//             <SpeakerWaveIcon
//               onClick={() => {
//                 setPla(true);
//               }}
//               className="text-white opacity-80 h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer transition-all transform duration-200 "
//             />
//           </>
//         ) : (
//           <>
//             <SpeakerXMarkIcon
//               onClick={() => {
//                 setPla(false);
//               }}
//               className="text-white opacity-30 h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer transition-all transform duration-200"
//             />
//           </>
//         )}
//       </motion.div>
//       <div>
//         {hasWindow && (
//           <ReactPlayer
//             className="opacity-[0.0001rem]"
//             muted={pla}
//             volume={0.8}
//             width={0.0001}
//             playing={true}
//             url="/FitZenVideoTrack.mov"
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default AudioComponent;

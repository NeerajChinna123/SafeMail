// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import { TrainerParticles } from "@/components/TrainerParticles";
// import TrainerComponent from "@/components/TrainerComponent";
// import { FitZoneType, personalAiTrainerType } from "../../typings";

// export interface propsData {
//   fitZone: [FitZoneType];
// }

// function PersonalAiTrainer(props: propsData) {
//   const { ref: bannerRef, inView: bannerIsVisible } = useInView();

//   const [animateOpcacity, setAnimateOpacity] = useState(2);

//   const scaleVariants = {
//     whileInView: {
//       y: [100, 50, 0],
//       opacity: [0, 0, 1],
//       transition: { duration: 1 },
//     },
//   };

//   const [bannerIsVisibleState, setBannerVisibleState] = useState(false);

//   if (bannerIsVisible) {
//     setTimeout(() => setBannerVisibleState(true), 400);
//   } else {
//     setTimeout(() => setBannerVisibleState(false), 100);
//   }


//   const [personalAiTrainerData, setPersonalAiTrainerData] = useState(
//     props?.fitZone[0]?.personalAiTrainers
//   );

//   const [active, setActive] = useState(personalAiTrainerData[0]?.name);

//   const filteredData = personalAiTrainerData.filter(
//     (personalAiTrainerData: personalAiTrainerType) =>
//       active == personalAiTrainerData?.name
//   );

  

//   return (
//     <div className="px-3 mt-[6rem] lg:mt-[8rem]  max-w-[80rem]  mx-auto">
//       <div className="  flex bg-black  backdrop-blur-lg md:ml-0 flex-row relative justify-center items-center mt-[1.8rem] md:mt-[2.5rem] h-[3.2rem]  border-t  rounded-3xl border-neutral-800 space-x-7 md:space-x-10 pr-8 py-6">
//         <div
//           className=" left-1/2 absolute top-0 w-[800px] user-select-none center pointer-events-none h-px max-w-full -translate-x-1/2 -translate-y-1/2"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
//           }}
//         ></div>
//         <div
//           aria-hidden="true"
//           className={
//             bannerIsVisibleState
//               ? "-top-1 left-[42%] md:left-[47%] opacity-100 h-[220px] md:h-[250px] w-full max-w-[600px] md:max-w-[900px] user-select-none center pointer-events-none absolute  -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in  "
//               : " opacity-5  transition-opacity ease-out duration-300  "
//           }
//           style={{
//             background:
//               "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgb(144, 205, 244,0.3) 0%, transparent 80%)",
//           }}
//         ></div>
//       </div>

//       <motion.div
//         variants={scaleVariants}
//         whileInView={scaleVariants.whileInView}
//         className="flex flex-col items-center justify-center px-2 md:px-0 pt-0 md:pt-2  space-y-7"
//       >
//         <motion.div>
//           <p className="text-5xl bg-gradient-to-r text-transparent font-semibold bg-clip-text from-white via-gray-400 to-gray-600">
//             Fit-Zone
//           </p>
//         </motion.div>
//         <motion.div>
//           <p className="text-4xl leading-10 text-white text-center">
//             Train with Legends from{" "}
//             <span
//               ref={bannerRef}
//               className="bg-gradient-to-r text-transparent font-semibold bg-clip-text from-blue-300 via-blue-400 to-blue-500"
//             >
//               Dragon Ball and Sports Icons!
//             </span>
//           </p>
//         </motion.div>
//         <motion.div className="md:w-[70%] text-center">
//           <p className="text-[rgba(239,247,255,.615)] text-md tracking-wide  leading-7 font-inter">
//             Unlock your potential with AI-powered legends. Whether you&apos;re
//             aspiring to harness the strength of Goku or the finesse of sports
//             icons, AI trainers are here to guide you on your path to conquering
//             your goals.
//           </p>
//         </motion.div>
//         <div className="relative mx-2">
//           <div className="absolute lg:hidden top-[2rem] md:top-[2.2rem] left-0 bg-gradient-to-r from-[#1b2c31]  md:from-[#0c1416] -z-20 md:ml-[0.02rem] lg:ml-[0.1rem] ml-[-0.5rem]  h-[7rem] w-20" />
//           <div className="flex  flex-row space-x-4 scrollbar-hide max-w-[8rem] md:max-w-[43rem] lg:max-w-[80rem] items-center lg:pl-0 lg:pr-0 pl-[25rem] md:pl-[14rem] pr-[1rem]   overflow-x-scroll pt-[2rem] justify-center md:space-x-10 ">
//             {props?.fitZone[0]?.personalAiTrainers?.map(
//               (trainerD: personalAiTrainerType) => (
//                 <motion.a
//                   href="#TrainerComponent"
//                   onClick={() => {
//                     setActive(trainerD?.name);
//                     setAnimateOpacity(animateOpcacity + 0.00001);
//                   }}
//                   key={trainerD?._id}
//                 >
//                   <TrainerParticles
//                     activeName={active}
//                     trainerProps={trainerD}
//                     color="white"
//                   />
//                 </motion.a>
//               )
//             )}
//             <div className="absolute lg:hidden top-[2rem] md:top-[2.2rem] right-0 bg-gradient-to-l from-[#1b2c31] md:from-[#0c1416] pr-[3rem] -z-20  h-[7rem]  w-20" />
//           </div>
//           <div className="px-6 md:px-0">
//             <div className="relative w-full mt-14 overflow-hidden  rounded-3xl border  border-neutral-800">
//               <div
//                 className=" left-[90%] absolute top-0 w-[400px] user-select-none center pointer-events-none h-px max-w-full -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
//                 }}
//               ></div>
//               <motion.div
//                 whileInView={{ opacity: [0, animateOpcacity] }}
//                 transition={{ duration: animateOpcacity + 0.3 }}
//                 id="TrainerComponent"
//                 className=""
//               >
//                 <TrainerComponent trainerData={filteredData[0]} />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default PersonalAiTrainer;

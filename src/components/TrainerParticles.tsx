// import { motion } from "framer-motion";
// import { urlFor } from "../../sanity";
// import Image from "next/image";

// import {
//   ParticleOptions,
//   Vector,
// } from "react-particle-image";
// import { FitZoneType, personalAiTrainerType } from "../../typings";

// export interface propsData {
//   color: string;
//   trainerProps: personalAiTrainerType;
//   activeName: string;
// }

// export function TrainerParticles(props: propsData) {
//   //   useEffect(() => {
//   //     // Update the document title with the current count
//   //     if (props?.activeId == props?.trainerProps?.id) {
//   //       setActiveState(true);
//   //     } else {
//   //       setActiveState(false);
//   //     }
//   //   }, [activeState]);

//   const particleOptions: ParticleOptions = {
//     filter: ({ x, y, image }) => {
//       // Get pixel
//       const pixel = image.get(x, y);
//       // Make a particle for this pixel if blue > 50 (range 0-255)
//       return pixel.b > 50;
//     },
//     color: ({ x, y, image }) => props?.color,
//     // color: ({ x, y, image }) => "orange",
//     radius: () => Math.random() * 1.2 + 0.5,
//     mass: () => 100,
//     friction: () => 2,
//     initialPosition: ({ canvasDimensions }) => {
//       return new Vector(
//         canvasDimensions.width / 2,
//         canvasDimensions.height / 2
//       );
//     },
//   };


//   return (
//     <div className="group  hover:cursor-pointer">
//       <motion.div className="p-[0.3rem] md:p-1 border-2 border-neutral-800 w-28 h-28 lg:w-auto lg:h-auto rounded-3xl">
//         {/* <ParticleImage
//           className={ (props?.activeId === props?.trainerProps?.id) ? " w-[6rem] h-[6rem] transition-opacity transform duration-500 opacity-90 mt-0 p-2" : " w-[6rem] h-[6rem] transition-opacity transform duration-500 lg:group-hover:opacity-90  opacity-40 mt-0 p-2"}
//           src={props?.trainerProps?.transparentImageUrl}
//           scale={props?.trainerProps?.scale}
//           entropy={4}
//           particleOptions={particleOptions}
//           maxParticles={10000}          
//           mouseMoveForce={motionForce}
//           touchMoveForce={motionForce}
//           backgroundColor="transparent"
//         /> */}
//          <Image
//           alt="logo"
//           className={ (props?.activeName === props?.trainerProps?.name) ? "lg:w-[7rem] object-contain lg:h-[7rem] w-[12rem] h-[6rem] transition-opacity transform duration-500 opacity-90 mt-0 lg:p-2 p-1" : "lg:w-[7rem] lg:h-[7rem] w-[12rem] h-[6rem] transition-opacity transform duration-500 lg:group-hover:opacity-90 object-contain opacity-40 mt-0 lg:p-2 p-1"}
//           width={100}
//           height={90}
//           src={urlFor(props?.trainerProps?.transparentImage)?.url()}
//         />
//       </motion.div>
//       <p className={ (props?.activeName === props?.trainerProps?.name) ? " mt-6 text-center text-lg  transition-opacity text-white transform duration-500 opacity-90" :" mt-6 text-center text-lg  transition-opacity text-white transform duration-500 lg:group-hover:opacity-90 opacity-40 " }>
//         {props?.trainerProps?.name}
//       </p>
//     </div>
//   );
// }

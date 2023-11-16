// import React from "react";
// import Image from "next/image";
// import { personalAiTrainerType } from "../../typings";
// import { urlFor } from "../../sanity";

// export interface propsData {
//   trainerData: personalAiTrainerType;
// }

// function TrainerComponent(props: propsData) {
//   console.log("trainer-d-inside : ", props?.trainerData);

//   return (
//     <div className="px-6 py-10 md:p-12 flex flex-col items-center  md:flex-row">
//       <div className="relative ">
//         <Image
//           alt="logo"
//           className={`md:w-[20rem] md:h-[35rem] w-[16rem] ${
//             props?.trainerData?.objectContain
//               ? " object-contain "
//               : " object-cover "
//           } h-[31rem] `}
//           width={1200}
//           height={1200}
//         //   src="/GokuMui.png"
//           src={urlFor(props?.trainerData?.transparentMainImage)?.url()}
//         />
//       </div>
//       <div className="space-y-6 pl-0 pt-8 md:pt-0 md:pl-[4rem]">
//         <div>
//           <p className="text-4xl text-center md:text-start bg-gradient-to-r text-transparent font-semibold bg-clip-text from-white via-gray-400 to-gray-500 leading-[3rem]">
//             {props?.trainerData?.intro}
//           </p>
//         </div>
//         <div className="w-[21rem] lg:w-[30rem]">
//           <p className="text-[rgba(239,247,255,.615)] text-center md:text-start text-lg tracking-wide  leading-7 font-inter">
//             {props?.trainerData?.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrainerComponent;

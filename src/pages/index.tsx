
import AfterEffectsVideo from "../components/AfterEffects";
import { BannerType, FitZoneType } from "../../typings";
import { Cog6ToothIcon, EllipsisHorizontalCircleIcon, GifIcon, PlusCircleIcon, PlusIcon, PencilSquareIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon, ShieldExclamationIcon, UserCircleIcon, BoltIcon, AtSymbolIcon, QuestionMarkCircleIcon, Cog8ToothIcon, GiftTopIcon } from '@heroicons/react/24/solid'
import { useScroll } from "framer-motion";
import { useState } from "react";
import { motion } from 'framer-motion'
import { ClockIcon } from "@heroicons/react/24/solid";


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

  const [currentNav, setCurrentNav] = useState('Emails');

  const emails = [{
    id: 1,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 2,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 3,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 4,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 5,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 6,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 7,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 8,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 9,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 10,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 11,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 12,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 13,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com'
  },
  {
    id: 14,
    fullName: 'Raj ',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'Raj@gmail.com'
  }




  ]


  const [searchItem,setSearchItem] = useState("");
   
  const [filteredList, setFilteredList] = useState(emails);


  const filter = (searchString:any)=>{
    setSearchItem(searchString);
    if (!searchString) {
      setFilteredList(emails);
    } else {
      const filtered = emails.filter(email =>
        email.fullName.toLowerCase().includes(searchString.toLowerCase())
      );
      setFilteredList(filtered);
    }
  }



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

        <div className="max-w-7xl mx-auto mt-[4rem] relative border border-solid-800 rounded-lg shadow shadow-md shadow-gray-400">
          <motion.div initial="initial"
            animate="animate"
            variants={animationVariants}
            transition={animationTransition} className="grid grid-cols-4 gap-x-4">
            <div className="col-span-1 ">
              <div className="flex flex-col relative ">
                <div className="flex flex-row p-4   justify-between items-center  mt-[-0.5rem]">
                  <img className="h-[4rem] w-[8rem]" src='/logo.png' />

                  <div>
                    <EllipsisHorizontalCircleIcon className="h-10 w-10 text-black" />
                  </div>
                </div>
                <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[104%]  absolute top-[5rem]">

                </div>

                <div className=" flex flex-col space-y-1 pl-[1.1rem] mt-[0.5rem] w-full">
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
                {/* <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[104%]  absolute top-[27.5rem]">
                </div> */}
                <div className=" flex flex-col space-y-2 pl-6 mt-[1rem] w-full">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-500 text-lg font-bold">Categories</p>
                    <PlusIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <div onClick={() => setCurrentNav('Personal')} className={currentNav == 'Personal' ? "flex cursor-pointer flex-row space-x-4 p-3 items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out" : "flex cursor-pointer transition-all transform duration-200 ease-in-out p-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <AtSymbolIcon className={currentNav == 'Personal' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Personal' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Personal</p>
                  </div>

                  <div onClick={() => setCurrentNav('Entertainment')} className={currentNav == 'Entertainment' ? "flex cursor-pointer flex-row space-x-4  items-center bg-black mt-[-1rem] rounded-lg w-full transition-all transform duration-200 ease-in-out px-3" : "flex cursor-pointer transition-all transform duration-200 ease-in-out px-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <BoltIcon className={currentNav == 'Entertainment' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Entertainment' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Entertainment</p>
                  </div>
                </div>

                <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[104%]  absolute top-[35.5rem]">

                </div>

                <div className=" flex flex-col space-y-5 pl-6 mt-[3rem] w-full">

                  <div onClick={() => setCurrentNav('Invites')} className={currentNav == 'Invites' ? "flex cursor-pointer flex-row space-x-4  items-center bg-black mt-[-1rem] rounded-lg w-full transition-all transform duration-200 ease-in-out px-3" : "flex cursor-pointer transition-all transform duration-200 ease-in-out px-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <GiftTopIcon className={currentNav == 'Invites' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Invites' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Invites</p>
                  </div>

                  <div onClick={() => setCurrentNav('Account & Settings')} className={currentNav == 'Account & Settings' ? "flex cursor-pointer flex-row space-x-4  items-center bg-black  rounded-lg w-full transition-all transform duration-200 ease-in-out px-3" : "flex cursor-pointer transition-all transform duration-200 ease-in-out px-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <Cog8ToothIcon className={currentNav == 'Account & Settings' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Account & Settings' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Account & Settings</p>
                  </div>


                  <div onClick={() => setCurrentNav('Help')} className={currentNav == 'Help' ? "flex cursor-pointer flex-row space-x-4  items-center bg-black rounded-lg w-full transition-all transform duration-200 ease-in-out px-3" : "flex cursor-pointer transition-all transform duration-200 ease-in-out px-3 w-full flex-row space-x-4 ml-2 items-center"}>
                    <QuestionMarkCircleIcon className={currentNav == 'Help' ? "h-7 w-7 text-white" : "h-7 w-7 text-black"} />
                    <p className={currentNav == 'Help' ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"}>Help</p>
                  </div>
                </div>
                <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[104%]  absolute top-[45.8rem]">
                </div>
                <div className=" flex flex-col space-y-5 pl-6 mt-[2rem] w-full pb-6">

                  <div className="flex flex-row space-x-3 ml-4 items-center">
                    <div>
                      <UserCircleIcon className="h-10 w-10 text-black" />
                    </div>
                    <div className="flex flex-col space-y-0">
                      <div>
                        <p className="text-black font-bold text-lg">
                          John Doe
                        </p>
                      </div>
                      <div>
                        <p className="text-black font-semibold text-md">
                          johnDoe@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 ">
              <div className="flex flex-col relative">
                <div className="flex flex-row px-4 py-3 justify-between items-center">
                  <div>
                    <p className="text-black text-[1.5rem] font-bold">All Emails</p>
                  </div>
                  <motion.div whileTap={{ scale: 0.99 }} className="flex mt-1 flex-row hover:opacity-80 transition-all transform ease-in-out duration-300 space-x-2 items-center px-3 py-3 bg-black cursor-pointer rounded-xl">
                    <PencilSquareIcon className="h-5 w-5 text-white font-semibold" />
                    <p className="font-semibold text-lg" >Compose</p>
                  </motion.div>
                </div>
                <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[101.8%] left-[-1rem]  absolute top-[5rem]">
                </div>
                <div className="flex flex-row">
                  <div className="col-span-1 p-4 w-[40%]">
                    <div className="flex flex-col">
                      <div className="relative ">
                        <p className="text-black text-xl font-bold">Inbox</p>
                        <span className="absolute text-sm left-[3.7rem] top-0 text-white px-2 py-1 bg-red-500 rounded-lg">
                          {emails?.length}
                        </span>
                        <p className="text-gray-500 font-semibold text-md mt-1">Maximizing Efficiency</p>
                      </div>
                      <div className="flex flex-row space-x-2 items-center mt-4 rounded-md  px-3 py-2 border border-gray-400">
                        <MagnifyingGlassIcon className="text-black font-bold h-5 w-5" />
                        <input onChange={(e:any)=>filter(e.target.value)} value={searchItem} type='text' className="outline-none text-black w-full font-semibold" placeholder="Search" />
                        {searchItem.length>0 &&
                        <XMarkIcon onClick={()=>{setSearchItem(''), setFilteredList(emails)}} className="text-black h-5 w-5 font-semibold cursor-pointer" />}
                      </div>

                      <div className="flex flex-col space-y-2 mt-4 max-h-[36rem] ml-[-0.2rem] pr-4 overflow-y-scroll scrollbar-w-[1px] scrollbar-thumb-h-[1rem] scrollbar-thin">
                        {/* //@ts-ignore */}
                        {filteredList?.map((email) => (
                          <div className="flex no-scrollbar flex-row cursor-pointer space-x-1 py-1 pr-2 items-center relative">
                            <UserCircleIcon className="h-16 w-16 text-black font-semibold" />
                            <div className="flex flex-col space-y-[0.1rem]">
                              <p className="text-black font-bold text-md">{email?.fullName}</p>
                              <p className="text-gray-600 font-bold text-sm">{email?.body?.slice(0, 36)} ...</p>

                            </div>
                            <div className="absolute top-3 right-0">
                              <p className="text-gray-600 font-semibold text-sm">{email?.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className="col-span-1 p-4">
                    <div className="flex flex-col">
                      <div className="relative ">
                        <p className="text-black text-xl font-bold">Inbox</p>
                        <span className="absolute text-sm left-[3.7rem] top-0 text-white px-2 py-1 bg-red-500 rounded-lg">
                          40
                        </span>
                        <p className="text-gray-500 font-semibold text-md mt-1">Maximizing Efficiency, and Achvieving Email Zen.</p>
                      </div>
                    </div>
                  </div> */}
                </div>

              </div>
            </div>
          </motion.div>
          <div className="border-l border-gray-300 shadow shadow-gray-200 z-100 h-full  absolute top-0 left-[20rem] ">

          </div>
          <div className="border-l border-gray-300 shadow shadow-gray-200 z-100 h-[90%]  absolute top-[5.1rem] left-[44rem] ">

</div>
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

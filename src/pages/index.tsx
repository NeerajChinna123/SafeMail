
import AfterEffectsVideo from "../components/AfterEffects";
import { BannerType, FitZoneType } from "../../typings";
import { Cog6ToothIcon, EllipsisHorizontalCircleIcon, GifIcon, PlusCircleIcon, PlusIcon, PencilSquareIcon, MagnifyingGlassIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
  UserPlusIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon, ShieldExclamationIcon, UserCircleIcon, BoltIcon, AtSymbolIcon, QuestionMarkCircleIcon, Cog8ToothIcon, GiftTopIcon,
  XCircleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/solid'
import { useScroll } from "framer-motion";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { ClockIcon } from "@heroicons/react/24/solid";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from "next/dynamic";


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

  const [compose, setCompose] = useState(false);

  const Editor = dynamic(() => import("../components/MyEditor"), { ssr: false });
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start with a scale of 0.75 and faded out and moved down by 50px
    visible: { opacity: 1, y: 0 }, // Scale to normal size, fade in, and move to original position
    exit: { opacity: 0, y: -50 } // Scale down to 0.75, fade out and move up by 50px
  };
  const emails = [{
    id: 1,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 11,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    },
    {
      id: 13,
      fullName: 'John Doe',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:20',
      timeStamp: 'Mon, 29 Jan, 23.20 (3 days ago)',
      toEmail: 'listLm@gmail.com',
      fromEmail: 'johnDoe@gmail.com',
    },
    {
      id: 14,
      fullName: 'John Doe',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:20',
      timeStamp: 'Mon, 29 Jan, 23.20 (3 days ago)',
      toEmail: 'listLm@gmail.com',
      fromEmail: 'johnDoe@gmail.com',
    },
    {
      id: 15,
      fullName: 'John Doe',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:20',
      timeStamp: 'Mon, 29 Jan, 23.20 (3 days ago)',
      toEmail: 'listLm@gmail.com',
      fromEmail: 'johnDoe@gmail.com',
    },
    {
      id: 16,
      fullName: 'John Doe',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:20',
      timeStamp: 'Mon, 29 Jan, 23.20 (3 days ago)',
      toEmail: 'listLm@gmail.com',
      fromEmail: 'johnDoe@gmail.com',
    }]
  },
  {
    id: 2,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 21,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 3,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 31,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 4,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 41,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 5,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 51,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 6,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 61,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 7,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 71,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 8,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 81,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 9,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 91,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 10,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 101,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 11,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 111,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 12,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 121,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 13,
    fullName: 'List Lmin',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'listLm@gmail.com',
    emailReplies: [{
      id: 131,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  },
  {
    id: 14,
    fullName: 'Raj ',
    body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
    time: '23:26',
    timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
    toEmail: 'johnDoe@gmail.com',
    fromEmail: 'Raj@gmail.com',
    emailReplies: [{
      id: 141,
      fullName: 'List Lmin',
      body: "Hi there! I've been thinking about improving my online security. Do you have any recommendations, Do you have any recommendations, Do you have any recommendations",
      time: '23:26',
      timeStamp: 'Mon, 29 Jan, 23.26 (3 days ago)',
      toEmail: 'johnDoe@gmail.com',
      fromEmail: 'listLm@gmail.com',
    }]
  }
  ]


  const [searchItem, setSearchItem] = useState("");

  const [filteredList, setFilteredList] = useState(emails);

  const [currentId, setCurrentId] = useState(1);

  const [currentIdData, setCurrentIdData] = useState(filteredList[0]);

  const filter = (searchString: any) => {
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

  //@ts-ignore
  const [newIds, setNewIds] = useState([])
  const emailData = (email: any) => {
    const ema = emails?.find((em: any) => em?.id === email?.id)
    //@ts-ignore
    setCurrentIdData(ema);

    console.log('as', ema?.id);
    //@ts-ignore
    setNewIds([...newIds, ema?.id]);

  }
  //@ts-ignore
  console.log('m-w', newIds);

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
                  <motion.div onClick={() => setCompose(true)} whileTap={{ scale: 0.99 }} className="flex mt-1 flex-row hover:opacity-80 transition-all transform ease-in-out duration-300 space-x-2 items-center px-3 py-3 bg-black cursor-pointer rounded-xl">
                    <PencilSquareIcon className="h-5 w-5 text-white font-semibold" />
                    <p className="font-semibold text-lg" >Compose</p>
                  </motion.div>
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
                        <input onChange={(e: any) => filter(e.target.value)} value={searchItem} type='text' className="outline-none text-black w-full font-semibold" placeholder="Search" />
                        {searchItem.length > 0 &&
                          <XMarkIcon onClick={() => { setSearchItem(''), setFilteredList(emails) }} className="text-black h-5 w-5 font-semibold cursor-pointer" />}
                      </div>

                      <div className={"flex flex-col space-y-1 mt-4 max-h-[36rem] ml-[-0.2rem] pr-2 overflow-y-scroll scrollbar-w-[1px] scrollbar-thumb-h-[1rem] scrollbar-thin"}>
                        {/* //@ts-ignore */}
                        {filteredList?.map((email) => (
                          <div key={email.id} onClick={() => emailData(email)} className={currentIdData?.id == email?.id ? " bg-gray-200 rounded-md transition-all relative ease-in-out w-full duration-300" : "transition-all w-full relative ease-in-out duration-300"}>

                            <div className="flex no-scrollbar flex-row cursor-pointer  space-x-1 py-1 px-1 py-2 items-center relative">
                              <UserCircleIcon className="h-16 w-16 text-black font-semibold" />
                              <div className="flex flex-col space-y-[0.1rem]">
                                <p className="text-black font-bold text-md">{email?.fullName}</p>
                                {/* @ts-ignore  */}
                                <p className={newIds.includes(email?.id) ? "text-gray-500 font-bold text-sm" : "text-black font-bold text-sm"}>{email?.body?.slice(0, 36)} ...</p>

                              </div>
                            </div>
                            {
                              //@ts-ignore
                              newIds.includes(email?.id) ? '' :
                                <div className="absolute top-[0.9rem] left-[9.5rem] p-[0.2rem] bg-blue-600 rounded-md">
                                  <p className="text-white font-semibold text-xs">New</p>
                                </div>
                            }
                            <div className="absolute top-4 left-[18rem]">
                              <p className="text-gray-600 font-semibold text-sm">{email?.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 w-[60%] ">
                    <div className="flex flex-col space-y-6 pt-3  max-h-[45rem]   overflow-y-scroll scrollbar-w-[1px] scrollbar-thumb-h-[1rem] scrollbar-thin">

                      {currentIdData?.emailReplies?.map((email: any) => (
                        <div key={email?.id} className="flex flex-row  p-4 space-x-2 items-start relative">
                          <div className="mt-[-0.5rem]">
                            <UserCircleIcon className="h-16 w-16 text-black" />
                          </div>

                          <div className="flex flex-col space-y-[0.1rem] relative ">
                            <p className="text-black font-bold text-md">{email?.fromEmail}</p>
                            <p className="text-gray-700 font-semibold text-sm relative">to {email?.toEmail} <span className="absolute"><ChevronDownIcon className="h-5 w-5 font-bold text-gray-400 ml-1 pt-[0.03rem]" /></span> </p>
                            <p className="text-black text-md font-semibold">{email?.body}</p>
                          </div>

                          <div className=" border-b shadow border-gray-300 shadow-gray-200 w-full absolute left-[-0.5rem] bottom-[-0.8rem]"></div>
                        </div>

                      ))}


                    </div>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>
          <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[75%] left-[20rem]  absolute top-[5rem]">
          </div>
          <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[25%]  absolute top-[5rem]">

          </div>
          <div className="border-l border-gray-300 shadow shadow-gray-200 z-100 h-full  absolute top-0 left-[20rem] ">

          </div>
          <div className="border-l border-gray-300 shadow shadow-gray-200 z-100 h-[90%]  absolute top-[5.1rem] left-[44rem] ">

          </div>

          {compose &&
            <motion.div initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.2 }}
              className="absolute right-3 border z-50 border-gray-400 rounded-lg w-[43%] shadow shadow-gray-200 flex  bottom-2 rounded-xl p-1 bg-white flex-col">
              <div className="flex flex-row justify-between p-4 items-center bg-gray-100">
                <p className="text-lg text-black font-semibold">New Email</p>
                <XMarkIcon onClick={() => setCompose(false)} className="h-5 w-5 text-black cursor-pointer" />
              </div>
              <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[100%] ">

              </div>

              <div className="flex flex-row space-x-2 p-4 items-center bg-white">
                <div><p className="text-gray-500 text-lg font-semibold">From : </p></div>
                <input type='email' className="outline-none text-black w-[60%] font-semibold" placeholder="Enter Your Email" />
                <div>

                </div>
              </div>

              <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[100%] ">

              </div>

              <div className="flex flex-row space-x-2 p-4 items-center bg-white">
                <div><p className="text-gray-500 text-lg font-semibold">To : </p></div>
                <div className="flex flex-row items-center space-x-2 p-1 pb-2 px-2 bg-gray-200 rounded-xl">
                  <div className="mt-1">
                    <UserCircleIcon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-black text-md">johnDoe@gmail.com</p>
                  </div>

                  <div className="mt-[0.05rem]">
                    <XCircleIcon className="h-4 w-4 text-gray-600 " />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[100%] ">

              </div>


              <div className="flex flex-row space-x-2 p-4 items-center bg-white">
                <div><p className="text-gray-500 text-lg font-semibold">Subject : </p></div>
                <input type='text' className="outline-none text-black w-[82%] font-semibold" placeholder="Enter Subject" />
              </div>

              <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[100%] ">

              </div>




              <div className="p-2 py-4">
                {/* <CKEditor
               
                editor={ClassicEditor}
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event) => {
                  console.log(event);
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              /> */}
                <Editor
                  value={"Test"}
                  onChange={(v: any) => console.log(v)}
                />
              </div>

              <div className="border-b border-gray-300 shadow shadow-gray-200 z-100 w-[100%] ">

              </div>

              <div className="p-4 bg-white">
                <motion.div whileTap={{ scale: 0.99 }} className="flex mt-1 flex-row hover:opacity-80 justify-center  transition-all w-[20%] transform ease-in-out duration-300 space-x-2 items-center px-2 py-2 bg-black cursor-pointer rounded-lg">

                  <p className="font-semibold text-lg" >Send</p>
                  <PaperAirplaneIcon className="text-white h-5 w-5" />
                </motion.div>
              </div>
            </motion.div>
          }
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

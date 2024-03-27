import { ArrowPathRoundedSquareIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon as A3, ChatBubbleLeftRightIcon as C3 } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as H2 } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const tabsData = [
    {
        label: "Likes (21)",
        content: "Likes",
    },
    {
        label: "Reactions (20)",
        content: "Reactions",
    },
    {
        label: "Reposts (30)",
        content: "Reposts",
    },
];

export default function ActivityTabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            //@ts-ignore
            setTabUnderlineLeft(currentTab?.offsetLeft - 20 ?? 0);
            //@ts-ignore
            setTabUnderlineWidth(currentTab?.clientWidth * 1.16 ?? 0);
        }

        setTabPosition();
        window.addEventListener("resize", setTabPosition);

        return () => window.removeEventListener("resize", setTabPosition);
    }, [activeTabIndex]);


    const likes = [
        {
            id: 1,
            userName: '@PeterMichaels',
            fullName: 'Peter Michaels',
            following: null,
            img: './Peter.jpeg'

        },
        {
            id: 2,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 3,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 4,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 5,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 6,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 7,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 8,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 9,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 10,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 11,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 12,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 13,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 14,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 15,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 16,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 17,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 18,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 19,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        },
        {
            id: 20,
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',
            following: false,
            img: './Neeraj.jpg'

        },
        {
            id: 21,
            userName: '@Awan',
            fullName: 'Awan Nord',
            following: true,
            img: './Awan 1.svg'

        }
    ]

    return (
        <AnimatePresence>
            <div className="absolute mt-[0.2rem] z-[1000] lg:mt-12 w-[34rem] top-[14rem] right-[-0.88rem] ">
                <div className="relative">
                    <div className="absolute left-[0.2rem] top-[0.4rem] transition-all transform duration-500 ease-in-out">
                        {activeTabIndex == 0 ? <HeartIcon className="h-7 w-7 text-cyan-400 transition-all transform duration-500 ease-in-out" /> : <H2 className="h-7 w-7 text-white transition-all transform duration-500 ease-in-out" />}
                    </div>

                    <div className="absolute left-[10.4rem] top-[0.4rem]">

                        {activeTabIndex == 1 ? <C3 className="h-7 w-7 text-cyan-400 transition-all transform duration-500 ease-in-out" /> : <ChatBubbleLeftRightIcon className="h-7 w-7 text-white transition-all transform duration-500 ease-in-out" />}

                    </div>

                    <div className="absolute left-[22.1rem] top-[0.4rem]">
                        {activeTabIndex == 2 ? <ArrowPathRoundedSquareIcon className="h-7 w-7 text-cyan-400 transition-all transform duration-500 ease-in-out" /> : <A3 className="h-7 w-7 text-white transition-all transform duration-500 ease-in-out" />}
                    </div>
                    <div className="flex space-x-2 w-[32.5rem]  justify-center pb-[0.2rem] md:pb-[0.3rem] border-b-2 border-gray-200">
                        {tabsData.map((tab, idx) => {
                            return (
                                <div className="px-[1rem]">
                                    <button
                                        key={idx}
                                        //@ts-ignore
                                        ref={(el) => (tabsRef.current[idx] = el)}
                                        className={
                                            `pt-2 pb-3  text-md w-[9rem]  font-semibold transition transform duration-500 ease-in-out font-poppins tracking-wide  ` +
                                            `${tabsRef.current[idx] == tabsRef.current[activeTabIndex] &&
                                            "text-cyan-200 font-semibold"
                                            }`
                                        }
                                        onClick={() => setActiveTabIndex(idx)}
                                    >
                                        {tab.label}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <div className="">
                        <span
                            className="absolute bottom-0  z-auto block h-1 bg-cyan-500 transition-all duration-300"
                            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                        />
                    </div>
                </div>
                <div className="py-4 md:px-1">
                    {tabsData[activeTabIndex].content == "Likes" ? (
                        <motion.div

                        initial={{ opacity: 0 }} // Initial state of the component (hidden)
                        animate={{ opacity: tabsData[activeTabIndex].content == "Likes"  ? 1 : 0 }} // Animate to visible or hidden based on the `isVisible` prop
                        exit={{ opacity: 0 }} // State to animate to when the component is being removed
                        transition={{ duration: 0.5 }} // Animation duration

                            className="px-1">
                            <div className="max-h-[28rem] overflow-y-scroll relative  scrollbar custom-scrollbar  scrollbar-thumb-black/60 scrollbar scrollbar-thumb-backdrop-blur-md  scrollbar-thumb-w-[0.2rem]  scrollbar-thumb-rounded-lg  space-y-3 ml-[0.6rem]">
                                {likes?.map((like: any) => (
                                    <div className="flex relative flex-row space-x-5 p-4 w-[30rem]  backdrop-blur-md rounded-2xl bg-black/60">
                                        <div>
                                            <img src={like?.img} className="h-[3.2rem] w-[3.2rem] rounded-full" />
                                        </div>

                                        <div className="flex flex-col space-y-1">
                                            <div>
                                                <p className="font-semibold text-md">
                                                    {like?.fullName}
                                                </p>
                                            </div>
                                            <div>
                                                <p className=" opacity-80 text-sm">
                                                    {like?.userName}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="">
                                            
                                            {like.following!=null ? like?.following ?
                                                <div className="pl-[10rem]">
                                                    <div className="px-4 py-3 rounded-xl cursor-pointer  backdrop-blur-lg transition hover:bg-white/30 transform duration-500 ease-in-out bg-white/20 ">
                                                        <p className="font-semibold">Following</p>
                                                    </div>
                                                </div> :
                                                <div className="right-[2rem] absolute ">
                                                    <div className="px-5 py-3 hover:bg-cyan-700 transition transform duration-500 ease-in-out cursor-pointer rounded-xl bg-cyan-600 ">
                                                        <p className="font-semibold">Follow</p>
                                                    </div>

                                                </div> : <div></div>}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </motion.div>
                    ) : (
                        <p></p>
                    )}
                </div>

            </div>
        </AnimatePresence>
    );
}
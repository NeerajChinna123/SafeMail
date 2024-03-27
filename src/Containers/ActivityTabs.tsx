import { ArrowPathRoundedSquareIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon as A3, ChatBubbleLeftRightIcon as C3 } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as H2 } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";


const tabsData = [
    {
        label: "Likes (44)",
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
            userName: '@Neeraj',
            fullName: 'Neeraj Baipureddy',

        },
        {

        }
    ]

    return (
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
                                        `pt-2 pb-3  text-md w-[9rem] text-white font-semibold transition transform duration-500 ease-in-out font-poppins tracking-wide  ` +
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
                {tabsData[activeTabIndex].content == "Reactions" ? (
                    <p></p>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
}
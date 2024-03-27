import { ArrowPathRoundedSquareIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
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
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            //@ts-ignore
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }

        setTabPosition();
        window.addEventListener("resize", setTabPosition);

        return () => window.removeEventListener("resize", setTabPosition);
    }, [activeTabIndex]);

    return (
        <div className="absolute mt-4 z-[1000] lg:mt-12 w-[30.5rem] top-[14rem] right-[2rem] ">
            <div className="relative">
                <div className="absolute left-[-0.7rem] top-[0.4rem]">
                        <HeartIcon className="h-7 w-7 text-cyan-400" />
                </div>

                <div className="absolute left-[9.4rem] top-[0.4rem]">
                        <ChatBubbleLeftRightIcon className="h-7 w-7" />
                </div>

                <div className="absolute left-[21.4rem] top-[0.4rem]">
                        <ArrowPathRoundedSquareIcon className="h-7 w-7" />
                </div>
                <div className="flex space-x-2  justify-center pb-[0.2rem] md:pb-[0.3rem] border-b-2 border-gray-200">
                    {tabsData.map((tab, idx) => {
                        return (
                            <div className="px-[1rem]">
                                <button
                                    key={idx}
                                    //@ts-ignore
                                    ref={(el) => (tabsRef.current[idx] = el)}
                                    className={
                                        `pt-2 pb-3  text-md w-[9rem] text-white font-poppins tracking-wide  ` +
                                        `${tabsRef.current[idx] == tabsRef.current[activeTabIndex] &&
                                        "text-cyan-300 font-semibold"
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
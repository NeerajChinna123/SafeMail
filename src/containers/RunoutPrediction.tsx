import { useState } from "react";
import React from "react";
import VideoUpload from "../components/VideoUpload";
import VideoUpload2 from "../components/VideoUpload2";
import animationData from "../../public/out.json";
import Lottie from "react-lottie-player";


function RunoutPrediction() {
  const [video1, setVideo1] = useState("");

  const [video2, setVideo2] = useState("");

  const [clicked, setClicked] = useState(false);

  console.log("video1 length", video1.length > 0);

  const [analyzeHeight, setAnalyzeHeight] = useState("0");
  const [analyzeWidth, setAnalyzeWidth] = useState("0");
  const [analyzeHeight2, setAnalyzeHeight2] = useState("0");
  const [analyzeHeight3, setAnalyzeHeight3] = useState(0);
  const [analyzeWidth2, setAnalyzeWidth2] = useState("0");
  const [border, setBorder] = useState(false);
  const [border1, setBorder1] = useState(false);
  const [border3, setBorder3] = useState(false);
  const [decisionMade, setDecisionMade] = useState("");
  const [decisionDone, setDecisionDone] = useState(false);

  if (video1.length > 0) {
    setTimeout(() => {
      setAnalyzeHeight("60.2%");
    }, 100);

    setTimeout(() => {
      setAnalyzeWidth("54.5%");
    }, 950);

    setTimeout(() => {
      setBorder(true);
    }, 1900);
  }

  if (video2.length > 0) {
    setTimeout(() => {
      setAnalyzeHeight2("60.2%");
    }, 100);

    setTimeout(() => {
      setAnalyzeWidth2("54.5%");
    }, 950);

    setTimeout(() => {
      setBorder1(true);
    }, 1900);
  }

  if (decisionMade.length > 0) {
  }

  function DecisionClicked() {
    setClicked(true);
    window.location.href = "#decisonMade";
    setTimeout(() => {
      setDecisionMade("out");
      setClicked(false);
      setAnalyzeHeight3(190);
    }, 6000);
  }

  if(analyzeHeight3){
    setTimeout(() => {
       setDecisionDone(true);
      }, 1000);
  }

  return (
    <div className="px-3 mt-[3rem] lg:mt-[6rem]  max-w-[60rem]  mx-auto">
      <div id="runOutPred" className="flex flex-row justify-between">
        <div className="w-[24rem] relative video-upload left h-[24rem] p-5 border border-black shadow-md shadow-gray-500 rounded-md">
          <div>
            <p className="text-black text-center text-xl underline">
              Upload a video showing the batsman&apos;s angle
            </p>
            <VideoUpload setVideo1Prop={setVideo1} width={700} height={500} />
          </div>
          <div className="absolute left-[50%] bottom-[-60%] bottom-0 border border-l-gray h-[14rem]"></div>
          <div
            style={{
              height: analyzeHeight,
            }}
            className={`absolute left-[50%] top-[100%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
          ></div>

          <div className=" absolute left-[50%] bottom-[-60%] bottom-0 border border-b-gray w-[13rem] "></div>
          <div
            style={{
              width: analyzeWidth,
            }}
            className={`absolute left-[50%]  bottom-[-60%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
          ></div>
        </div>

        <div className="w-[24rem] relative h-[24rem] video-upload right p-5 border border-black shadow-md shadow-gray-500 rounded-md">
          <div>
            <p className="text-black text-center text-xl underline">
              Upload a video showing the wicket angle
            </p>
            <VideoUpload2 setVideo2Prop={setVideo2} width={700} height={500} />
          </div>
          <div className="absolute left-[50%] bottom-[-60%] bottom-0 border border-l-gray h-[14rem]"></div>
          <div
            style={{
              height: analyzeHeight2,
            }}
            className={`absolute left-[50%] top-[100%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
          ></div>

          <div className=" absolute right-[50%] bottom-[-60%] bottom-0 border border-b-gray w-[13rem] "></div>
          <div
            style={{
              width: analyzeWidth2,
            }}
            className={`absolute right-[50%]  bottom-[-60%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
          ></div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-[10rem]">
        <div
          id="DecisionClicked"
          onClick={() => {
            !clicked ? DecisionClicked() : "";
          }}
          className={`transition-all duration-500 rounded-full p-10 ease-in-out border relative  border-gray-250 rounded-full ${
            border
              ? " border border-l-black border-t-black "
              : "  border border-gray-200"
          } ${
            border1
              ? " border border-r-black border-b-black "
              : "  border border-gray-250 "
          } ${
            border1 && border
              ? "hover:cursor-pointer "
              : " hover:cursor-not-allowed"
          } `}
        >
          {clicked ? (
            <p className="animate-pulse hover:cursor-not-allowed w-14 h-10 text-black pb-[2rem]">
              Decision Pending
            </p>
          ) : (
            <p
              className={`${
                border1 && border
                  ? "text-black opacity-[100%] w-14 h-10 pt-2"
                  : " text-black opacity-[50%] w-14 h-10 pt-2"
              }`}
            >
              Detect!
            </p>
          )}
        </div>
      </div>
      <div className="flex fle-row mt-[0.03rem] justify-center">
        <div className="h-[12rem] border border-l-gray border-t-0 border-b-0 border-r-0 "></div>

        <div
          style={{
            height: analyzeHeight3,
          }}
          className={`transition-all ease-out duration-1000 rotate-180 border h-[9rem] border-l-black`}
        ></div>
      </div>
      <div id="decisionMade" className="flex flex-row justify-center">
        <div className="p-5 border border-black shadow-md shadow-gray-500 rounded-md w-[20rem] h-[20rem]">
        <div>
            {decisionDone &&
            <Lottie
              loop
              animationData={animationData}
              play
              className="w-[18rem] h-[18rem]"
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RunoutPrediction;

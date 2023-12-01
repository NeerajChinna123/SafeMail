import { useState, useEffect, useRef } from "react";
import React from "react";
import VideoUpload from "../components/VideoUpload";
import VideoUpload2 from "../components/VideoUpload2";
import animationData from "../../public/out.json";
import animationData2 from "../../public/not-out.json";
import Lottie from "react-lottie-player";
import { mqttClient } from ".././../awsMqttClient";
import axios from "axios";
import { ImageWithBoundingBox } from "../components/ImageWithBoundingBox";
import { ImageWithBoundingBox2 } from "../components/ImageWithBoundinBox2";
import { ImageWithBoundingBox3 } from "../components/ImageWithBoundingBox3";
import { ImageWithBoundingBox4 } from "../components/ImageWithBoundingBox4";
import { ImageWithBoundingBox5 } from "../components/ImageWithBoundingBox5";
import Footer from "./Footer";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'


const animationVariants = {
  initial: { opacity: 0 }, // Starting position off-screen (above)
  animate: { opacity: 1 }, // Ending position (on-screen)
};

const animationTransition = {
  duration: 1.8, // Duration of the animation
  delay: 0.6, // Delay before the animation starts (in seconds)
};

function RunoutPrediction() {


  function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }


  const otdRef = useRef(null);

  const isVisibleAnalyze = useIsVisible(otdRef);



  const otRedf1 = useRef(null);

  const isVisibleAnalyze1 = useIsVisible(otRedf1);


  const [video1, setVideo1] = useState("");

  const [video2, setVideo2] = useState("");

  const [clicked, setClicked] = useState(false);

  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);


  const [roboFlowApiCall, setRoboFlowApiCall] = useState([]);

  const [roboFlowApiCall1, setRoboFlowApiCall1] = useState([]);


  const [roboFlowApiCall2, setRoboFlowApiCall2] = useState([]);

  const [displayText, setDisplayText] = useState('Extracting Frames: Please wait, preparing video for analysis.')

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
  const [frameDetect, setFrameDetected] = useState(false);
  const [frameDetect2, setFrameDetected2] = useState(false);


  const [analyzeHeight4, setAnalyzeHeight4] = useState("0");
  const [analyzeHeight5, setAnalyzeHeight5] = useState("0");
  const [analyzeHeight6, setAnalyzeHeight6] = useState("0");
  const [analyzeWidth5, setAnalyzeWidth5] = useState("0");
  const [analyzeWidth4, setAnalyzeWidth4] = useState("0");


  const [analyzeHeight7, setAnalyzeHeight7] = useState("0");
  const [analyzeHeight8, setAnalyzeHeight8] = useState("0");
  const [analyzeHeight9, setAnalyzeHeight9] = useState("0");
  const [analyzeWidth6, setAnalyzeWidth6] = useState("0");
  const [analyzeWidth61, setAnalyzeWidth61] = useState("0");
  const [analyzeWidth7, setAnalyzeWidth7] = useState("0");

  const [finalDecision, setFinalDecision] = useState("");


  const [firstElement, setFirstElement] = useState({});

  const [creaseElement, setCreaseElement] = useState({});

  const [displayImage, setDisplayImage] = useState(false);

  const [displayImage2, setDisplayImage2] = useState(false);

  const [displayImage3, setDisplayImage3] = useState(false);


  const [displayText1, setDisplayText1] = useState('Detecting Crease-line');

  const [detectCrease, setDetectCrease] = useState(false);


  const [detectBat, setDetectBat] = useState(false);


  const [decisionPending, setDecisionPending] = useState(false);

  const [decisionPending1, setDecisionPending1] = useState(false);


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
      setAnalyzeHeight2("50.2%");
    }, 100);

    setTimeout(() => {
      setAnalyzeWidth2("54.5%");
    }, 950);

    setTimeout(() => {
      setBorder1(true);
    }, 1000);

  }


  const DecisionClicked = async () => {
    setClicked(true);
    window.location.href = "#Frames";
    //@ts-ignore
    setTimeout(() => {
      setDisplayText('Analyzing Frames: Detecting bail dislocation...');
    }, 10000);

    let tempArray: any[] = [];

    for (const image in images2) {
      const imagea = images2[image]
      try {
        const customConfig = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            // @ts-ignore
            // Authorization: `Bearer ${session.accessToken}`,
          },
          params: {
            api_key: process.env.NEXT_PUBLIC_ROBOFLOW_API
          },
          // withCredentials: true,
        };
        const res = await axios.post(
          `https://detect.roboflow.com/bail-watch/1`,
          //@ts-ignore
          imagea.imageData,
          customConfig
        );
        //@ts-ignore
        if (res?.status < "300") {

          const response = {
            //@ts-ignore
            frameNumber: imagea.frameNumber,
            //@ts-ignore
            image: imagea.imageData,
            //@ts-ignore
            apiCallresponse: res.data

          }

          tempArray.push(response);

        } else {
          //@ts-ignore
        }

        // Work with the response...
      } catch (err) {
        // Handle error
        console.log('error : ', err)
        //@ts-ignore

      }
    }
    setTimeout(() => {

      //@ts-ignore

      //@ts-ignore
      setRoboFlowApiCall(tempArray);
      const firstClassZeroElement = tempArray.find(item => item?.apiCallresponse?.predictions[0]?.class_id === 0);
      //@ts-ignore
      setFirstElement(firstClassZeroElement);
      setFrameDetected(true);
      setAnalyzeHeight3(190);
      setClicked(false);
      setTimeout(() => {
        setFrameDetected2(true)
      }, 1000);

    }, 3000);

    console.log('api-respone-roboflow-api-calls', tempArray);
  };



  const DetectingCreaseLine = async () => {

    //@ts-ignore

    const tempArray1 = [firstElement];

    try {
      const customConfig = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
          // @ts-ignore
          // Authorization: `Bearer ${session.accessToken}`,

        },
        params: {
          api_key: process.env.NEXT_PUBLIC_ROBOFLOW_API,
          confidence: 22
        },
        // withCredentials: true,
      };
      const res = await axios.post(
        `https://detect.roboflow.com/crease-line-detection/3`,
        //@ts-ignore
        firstElement?.image,
        customConfig
      );
      //@ts-ignore
      if (res?.status < "300") {
        const response = {
          //@ts-ignore
          frameNumber: firstElement?.frameNumber,
          //@ts-ignore
          image: firstElement?.image,
          //@ts-ignore
          apiCallresponse: res.data
        }
        tempArray1.push(response);
      } else {
        //@ts-ignore
      }

      // Work with the response...
    } catch (err) {
      // Handle error
      console.log('error : ', err)
      //@ts-ignore
    }

    setTimeout(() => {

      //@ts-ignore

      //@ts-ignore

      //@ts-ignore
      console.log('identifying the temporary array1 : ', tempArray1);
      //@ts-ignore

      //@ts-ignore
      setCreaseElement(tempArray1);
      //@ts-ignore
      setRoboFlowApiCall1(tempArray1);
      //@ts-ignore
      setRoboFlowApiCall2(tempArray1);

      setDetectCrease(false);
      setDisplayImage2(true);



      setTimeout(() => {
        setDetectBat(true);
        //@ts-ignore
        DetectingBat(tempArray1);
      }, 10000);

    }, 3000);
  }


  const DetectingBat = async (tempArray1: any) => {
    //@ts-ignore
    setDisplayText1('Detecting Bat');
    //@ts-ignore
    const tempArray4 = [];

    try {
      const customConfig = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
          // @ts-ignore
          // Authorization: `Bearer ${session.accessToken}`,
        },
        params: {
          api_key: process.env.NEXT_PUBLIC_ROBOFLOW_API
        },
        // withCredentials: true,
      };
      const res = await axios.post(
        `https://detect.roboflow.com/bat-detection-2.0/2`,
        //@ts-ignore
        firstElement?.image,
        customConfig
      );
      //@ts-ignore
      if (res?.status < "300") {
        const response = {
          //@ts-ignore
          frameNumber: firstElement?.frameNumber,
          //@ts-ignore
          image: firstElement?.image,
          //@ts-ignore
          apiCallresponse: res.data
        }
        tempArray4.push(response);
      } else {
        //@ts-ignore
      }

      // Work with the response...
    } catch (err) {
      // Handle error
      console.log('error : ', err)
      //@ts-ignore
    }

    setTimeout(() => {
      //@ts-ignore
      const tempArray3 = tempArray1?.push(tempArray4[0]);


      //@ts-ignore
      setRoboFlowApiCall2(tempArray1);
      setDetectBat(false);
      setDisplayImage2(false);
      setDisplayImage3(true);


    }, 3000);
  }


  useEffect(() => {

    if (isVisibleAnalyze && Object.keys(firstElement).length>0) {
      setTimeout(() => {
        setAnalyzeHeight4("24%");
      }, 1000);
      setTimeout(() => {
        setAnalyzeWidth4("26%");
      }, 2000);
      setTimeout(() => {
        setAnalyzeHeight5("13.4%");
      }, 3000);
      setTimeout(() => {
        setDisplayImage(true);
      }, 4000);

      setTimeout(() => {
        setAnalyzeWidth5("25.8%");
      }, 8000);

      setTimeout(() => {
        setAnalyzeHeight6("13.4%");
      }, 9000);

      setTimeout(() => {
        if (roboFlowApiCall1.length == 0 && Object.keys(firstElement).length>0 ) {
          setDetectCrease(true);
          DetectingCreaseLine();
        }
      }, 10000);
    }
  }, [isVisibleAnalyze]);



  useEffect(() => {

    if (isVisibleAnalyze1 && Object.keys(firstElement).length>0 && roboFlowApiCall2.length>2) {
      setTimeout(() => {
        setAnalyzeHeight7("25%");
      }, 1000);
      setTimeout(() => {
        setAnalyzeWidth6("24.8%");
        setAnalyzeWidth61("26.8%");
      }, 2000);
      setTimeout(() => {
        setAnalyzeHeight8("12%");
      }, 3000);


      setTimeout(() => {
        setAnalyzeWidth7("25.8%");
      }, 8000);

      setTimeout(() => {
        setAnalyzeHeight9("13.4%");
      }, 9000);

      setTimeout(() => {
        setDecisionPending(true);
      }, 4000);

    }
  }, [isVisibleAnalyze1]);
  //@ts-ignore

  const sendDecision = async () => {
    console.log('sending decision ...')
    const customConfig = {
      headers: {
        "Content-Type": "application/json"
        // @ts-ignore
        // Authorization: `Bearer ${session.accessToken}`,

      },
      withCredentials: false,
    };

    try {
      const res = await axios.post(`http://localhost:8001/detect`, { decision: finalDecision }, customConfig);
      //@ts-ignore
      if (res?.status < "300") {
        console.log('res', res)
      } else {
        //@ts-ignore
        console.log('res', res)
      }
      // Work with the response...
    } catch (err) {
      // Handle error
      console.log('error : ', err)
      //@ts-ignore
      
    }

    // const url = 'http://localhost:8001/detect';
    // const payload = {
    //     decision: finalDecision,
    //     // other data
    // };

    // try {
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // Additional headers if needed
    //         },
    //         body: JSON.stringify(payload)
    //     });

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     console.log(data);
    //     // Handle the response data
    // } catch (error) {
    //     console.error('Error:', error);
    //     // Handle errors
    // }
    
  }

  useEffect(() => {
    if (finalDecision.length > 0 && finalDecision != "") {
      sendDecision();
    }
  }, [finalDecision]);

  return (
    <div className="px-3 mt-[3rem] lg:mt-[6rem]  max-w-[60rem]  mx-auto min-h-screen">
      <div id="runOutPred" className="flex flex-row justify-center">
        <div className="w-[24rem] relative h-[24rem] video-upload right p-5 border border-black shadow-md shadow-gray-500 rounded-md">
          <div>
            <p className="text-black text-center text-xl underline">
              Upload a Video Showing the Side Angle of a Cricket Run Out
            </p>
            <VideoUpload2 setImages2={setImages2} setVideo2Prop={setVideo2} width={700} height={800} />
          </div>
          <div className="absolute left-[50%] bottom-[-50%] bottom-0 border border-l-gray h-[12rem]"></div>
          <div
            style={{
              height: analyzeHeight2,
            }}
            className={`absolute left-[50%] top-[100%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
          ></div>

          {/* <div className=" absolute right-[50%] bottom-[-60%] bottom-0 border border-b-gray w-[13rem] "></div> */}
          {/*<div
            style={{
              width: analyzeWidth2,
            }}
            className={`absolute right-[50%]  bottom-[-60%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
          ></div>  */}
        </div>
      </div>
      <div className="flex flex-row justify-center mt-[12rem]">
        <div
          id="Frames"
          onClick={() => {
            (video2.length > 0) ? DecisionClicked() : "";
          }}
          className={`transition-all duration-500 rounded-full p-10 ease-in-out border relative  border-gray-250 rounded-full ${border
            ? " border border-l-black border-t-black "
            : "  border border-gray-200"
            } ${border1
              ? " border border-t-black border-r-black border-b-black border-l-black "
              : "  border border-gray-250 "
            } ${border1 ? "hover:cursor-pointer "
              : " hover:cursor-not-allowed"
            } `}
        >
          {clicked ? (
            <p className="animate-pulse hover:cursor-not-allowed w-[10rem] text-center h-[4rem] text-black pt-0">
              {displayText}
            </p>
          ) : (

            (frameDetect ? <p
              className={`${border1
                ? "text-black opacity-[100%] w-[10rem] h-[4rem] pt-2 text-center pt-2 "
                : " text-black opacity-[50%] w-[10rem] h-[4rem] pt-2 text-center pt-2 "
                }`}
            >
              Frames Analyzed! : Analysis complete.
            </p> : <p
              className={`${border1
                ? "text-black opacity-[100%] w-[10rem] h-[4rem] pt-2 text-center pt-4 "
                : " text-black opacity-[50%] w-[10rem] h-[4rem] pt-2 text-center pt-4 "
                }`}
            >
              Detect!
            </p>)

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

      <div id="runOutPred" className="flex flex-row justify-center mt-[0rem]">
        <div className="w-[100rem] relative video-upload  left h-[58rem] p-0 border border-black shadow-md shadow-gray-500 rounded-md">
          <div>
            <p className="text-black text-center text-xl p-5 underline">
              Analyzed Frames
            </p>
            {frameDetect2 &&
              <motion.div variants={animationVariants}
                transition={animationTransition} className="grid grid-cols-3 gap-5 space-x-2 justify-center px-6">

                {roboFlowApiCall.length > 0 && roboFlowApiCall?.map((roboFlow: any) => (
                  <div key={roboFlow?.apiCallresponse?.predictions[0]?.x} className="mb-4">
                    <ImageWithBoundingBox data={roboFlow} />
                  </div>
                ))}

              </motion.div>
            }
            {/* <VideoUpload setImages1={setImages} setVideo1Prop={setVideo1} width={700} height={500} /> */}
          </div>
          <div className="absolute left-[50%] bottom-[-24%] border border-l-gray h-[14rem]"></div>
          <div
            style={{
              height: analyzeHeight4,
            }}
            className={`absolute left-[50%] top-[100%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
          ></div>


          <div className="absolute left-[24%] bottom-[-37.5%] border border-l-gray h-[8rem]"></div>
          <div
            style={{
              height: analyzeHeight5,
            }}
            className={`absolute left-[24%] top-[124%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
          ></div>

          <div className="absolute right-[24%] bottom-[-37.5%] border border-l-gray h-[8rem]"></div>
          <div
            style={{
              height: analyzeHeight6,
            }}
            className={`absolute right-[24%] top-[124%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
          ></div>

          <div className=" absolute left-[50%] bottom-[-24%] border border-b-gray w-[15rem] "></div>
          <div
            style={{
              width: analyzeWidth5,
            }}
            className={`absolute left-[50%]  bottom-[-24%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
          ></div>
          <div className=" absolute right-[50%] bottom-[-24%]  border border-b-gray w-[15.2rem] "></div>
          <div
            style={{
              width: analyzeWidth4,
            }}
            className={`absolute right-[50%]  bottom-[-24%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
          ></div>
        </div>


      </div>
      <div className="flex flex-row justify-between space-x-6 relative">
        <div className="p-3 border border-black shadow-md shadow-gray-500 rounded-md w-[30rem] h-[22rem] mt-[21.5rem]">

          <p ref={otdRef} className="text-black text-center text-xl p-2 underline">
            Bail Dislocation Frame
          </p>
          {/* @ts-ignore */}
          {(displayImage && Object.keys(firstElement).length>0) &&
            <ImageWithBoundingBox5 data={firstElement} />
          }
        </div>

        <div className="p-3 border border-black shadow-md shadow-gray-500 rounded-md w-[30rem] h-[22rem] mt-[21.5rem]">
          {/* @ts-ignore */}
          {/* {displayImage && <img src={firstElement?.image} />} */}
          <p ref={otdRef} className="text-black text-center text-xl p-2 underline">
            Crease-line and Bat detection
          </p>
          {(detectCrease || detectBat) && <p className="text-black text-center text-xl animate-pulse py-24">{displayText1 + " ..."}</p>}
          {(displayImage2 && !detectBat && Object.keys(firstElement).length>0) && <div className="mb-4">
            {roboFlowApiCall1.length > 0 &&
              <ImageWithBoundingBox2 data={roboFlowApiCall1} />

            }
          </div>}


          {displayImage3 && <div className="mb-4">
            {/* @ts-ignore */}
            {roboFlowApiCall2 && roboFlowApiCall2[0]?.frameNumber === 2 ?
              <ImageWithBoundingBox4 data={roboFlowApiCall2} setFinalDecision1={setFinalDecision} />
              : <ImageWithBoundingBox3 data={roboFlowApiCall2} setFinalDecision1={setFinalDecision} />
            }
          </div>}
        </div>


        <div className="absolute left-[22%] bottom-[-25%] border border-l-gray h-[10.5rem]"></div>
        <div
          style={{
            height: analyzeHeight7,
          }}
          className={`absolute left-[22%] top-[100%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
        ></div>


        <div className="absolute left-[47.5%] bottom-[-36.5%] border border-l-gray h-[5rem]"></div>
        <div
          style={{
            height: analyzeHeight8,
          }}
          className={`absolute left-[47.5%] top-[124.5%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
        ></div>

        <div className=" absolute left-[22%] bottom-[-25%] border border-b-gray w-[15rem] "></div>
        <div
          style={{
            width: analyzeWidth61,
          }}
          className={`absolute left-[22%]  bottom-[-25%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
        ></div>


        <div className="absolute left-[72%] bottom-[-25%] border border-l-gray h-[10.5rem]"></div>
        <div
          style={{
            height: analyzeHeight7,
          }}
          className={`absolute left-[72%] top-[100%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
        ></div>


        <div className=" absolute right-[25.2%] bottom-[-25%]  border border-b-gray w-[14.4rem] "></div>
        <div
          style={{
            width: analyzeWidth6,
          }}
          className={`absolute right-[25.2%]  bottom-[-25%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
        ></div>
      </div>

      <div id="decisonMade" className="flex flex-row justify-center mt-[16rem]">
        <div className="p-5 border border-black shadow-md shadow-gray-500 rounded-md w-[20rem] h-[20rem]">
          <div>
            {(decisionPending && Object.keys(firstElement).length>0 && roboFlowApiCall2.length>2) && (
              <Lottie
                loop
                animationData={finalDecision == 'Out' ? animationData : animationData2}
                play
                className="w-[18rem] h-[18rem]"
              />
            )

            }
          </div>
        </div>
      </div>

      <div ref={otRedf1}>
        <Footer />
        {/* @ts-ignore */}
      </div>
    </div>
  );
}

export default RunoutPrediction;

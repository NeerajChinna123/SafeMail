import { useState, useEffect, useRef } from "react";
import React from "react";
import VideoUpload from "../components/VideoUpload";
import VideoUpload2 from "../components/VideoUpload2";
import animationData from "../../public/out.json";
import Lottie from "react-lottie-player";
import { mqttClient } from ".././../awsMqttClient";
import axios from "axios";
import { ImageWithBoundingBox } from "../components/ImageWithBoundingBox";
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


  const [displayText, setDisplayText] = useState('Extracting Frames: Please wait, preparing video for analysis.')


  console.log('image frames  : ', images2);
  console.log("video1 length", video1.length > 0);


  console.log('is visible analyze : ', isVisibleAnalyze)

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


  const [firstElement, setFirstElement] = useState({});

  const [displayImage, setDisplayImage] = useState(false);


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
    console.log('image-data : ', images2[0].imageData)

    //   const customConfig = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       // @ts-ignore
    //       // Authorization: `Bearer ${session.accessToken}`,

    //     },
    //     withCredentials: true,
    //   };

    //   try {
    //     const res = await axios.post(
    //       `http://localhost:8000/detect`, 
    //       {},
    //       customConfig
    //     );
    //     //@ts-ignore
    //     if (res?.status < "300") {
    //       setTimeout(() => {
    //         setDecisionMade(res.decision);
    //         setAnalyzeHeight3(190);
    //         setClicked(false);
    //       }, 6000);
    //     } else {
    //       //@ts-ignore
    //     }
    //     // Work with the response...
    //   } catch (err) {
    //     // Handle error
    //     console.log('error : ',err)
    //     //@ts-ignore

    //   }
    // };


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
            api_key: "9dqhyGN5hU3MM5CsYowi"
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

      console.log('identifying the temporary array : ', tempArray);

      console.log('identify the first element : ', tempArray.find(item => item?.apiCallresponse?.predictions[0]?.class_id === 0));
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


  //   // Define your API endpoint
  //   const API_ENDPOINT = 'http://localhost:8000/detect';

  //   // Set up the headers, if you have any. For a GET request, headers are often not needed.
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     // ... any other headers
  //   };

  //   // Use axios to make the GET request
  //   axios.get(API_ENDPOINT, { headers })
  //     //@ts-ignore
  //     .then(response => {
  //       // Handle the response here
  //       setTimeout(() => {
  //         setDecisionMade(response.decision);
  //         setAnalyzeHeight3(190);
  //         setClicked(false);
  //       }, 6000);
  //     })
  //     //@ts-ignore
  //     .catch(error => {
  //       // Handle the error here
  //       console.error('There was an error!', error.response);
  //     });
  // }
  // if (analyzeHeight3) {
  //   setTimeout(() => {
  //     setDecisionDone(true);
  //   }, 1000);
  // }

  useEffect(() => {

    if (isVisibleAnalyze) {
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
    }
  }, [isVisibleAnalyze]);


  useEffect(() => {

    if (isVisibleAnalyze1) {
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
    }
  }, [isVisibleAnalyze1]);


  console.log('first element : ', firstElement)


  return (
    <div className="px-3 mt-[3rem] lg:mt-[6rem]  max-w-[60rem]  mx-auto min-h-screen">
      <div id="runOutPred" className="flex flex-row justify-center">
        {/* <div className="w-[24rem] relative video-upload left h-[24rem] p-5 border border-black shadow-md shadow-gray-500 rounded-md">
          <div>
            <p className="text-black text-center text-xl underline">
              Upload a video showing the batsman&apos;s angle
            </p>
            <VideoUpload setImages1={setImages} setVideo1Prop={setVideo1} width={700} height={500} />
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
        </div> */}

        <div className="w-[24rem] relative h-[24rem] video-upload right p-5 border border-black shadow-md shadow-gray-500 rounded-md">
          <div>
            <p className="text-black text-center text-xl underline">
              Upload a video showing the side angle
            </p>
            <VideoUpload2 setImages2={setImages2} setVideo2Prop={setVideo2} width={700} height={500} />
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
                  <div className="mb-4">

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

          {/* 
          <div className=" absolute left-[28%]  bottom-[-24%] border border-b-gray w-[15rem] "></div>
          <div
            style={{
              width: analyzeWidth4,
            }}
            className={`absolute left-[28%]  bottom-[-24%] bottom-0 rotate-180 transition-all ease-out duration-1000 border border-b-black`}
          ></div> */}

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
          {displayImage && <img className="pt-2" src={firstElement?.image} />}


        </div>

        <div className="p-3 border border-black shadow-md shadow-gray-500 rounded-md w-[30rem] h-[22rem] mt-[21.5rem]">
          {/* @ts-ignore */}
          {/* {displayImage && <img src={firstElement?.image} />} */}
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



        {/* <div className="absolute right-[24%] bottom-[-37.5%] border border-l-gray h-[8rem]"></div>
        <div
          style={{
            height: analyzeHeight8,
          }}
          className={`absolute right-[24%] transition-all ease-out duration-1000 rotate-180 border border-l-black`}
        ></div> */}



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



        {/* 
          <div className=" absolute left-[28%]  bottom-[-24%] border border-b-gray w-[15rem] "></div>
          <div
            style={{
              width: analyzeWidth4,
            }}
            className={`absolute left-[28%]  bottom-[-24%] bottom-0 rotate-180 transition-all ease-out duration-1000 border border-b-black`}
          ></div> */}


      </div>





      <div id="decisonMade" className="flex flex-row justify-center mt-[16rem]">
        <div className="p-5 border border-black shadow-md shadow-gray-500 rounded-md w-[20rem] h-[20rem]">
          <div>
            {decisionDone && (
              <Lottie
                loop
                animationData={animationData}
                play
                className="w-[18rem] h-[18rem]"
              />
            )}
          </div>
        </div>
      </div>

      {/* <div>
        {images2?.length > 0 && (
          <div className="output">
            {images2.map((imageUrl, index) => (
              <a
                //@ts-ignore
                key={imageUrl.imageData}
                //@ts-ignore
                href={imageUrl.imageData}
              // download={`${now}-${index + 1}.png`}
              >

                <img
                  //@ts-ignore
                  src={imageUrl.imageData} alt="" />
              </a>
            ))}
          </div>
        )}
      </div> */}
      <div ref={otRedf1}>
        <Footer />
        {/* @ts-ignore */}
      </div>
    </div>
  );
}

export default RunoutPrediction;

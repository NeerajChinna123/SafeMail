import { useState, useEffect } from "react";
import React from "react";
import VideoUpload from "../components/VideoUpload";
import VideoUpload2 from "../components/VideoUpload2";
import animationData from "../../public/out.json";
import Lottie from "react-lottie-player";
import { mqttClient } from ".././../awsMqttClient";
import axios from "axios";
import { ImageWithBoundingBox } from "../components/ImageWithBoundingBox";
import Footer from "./Footer";


function RunoutPrediction() {
  const [video1, setVideo1] = useState("");

  const [video2, setVideo2] = useState("");

  const [clicked, setClicked] = useState(false);

  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);


  const [roboFlowApiCall, setRoboFlowApiCall] = useState([]);


  console.log('image frames  : ', images2);
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
  const [frameDetect, setFrameDetected] = useState(false);

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
    }, 1900);

  }


  const DecisionClicked = async () => {
    setClicked(true);
    window.location.href = "#decisonMade";
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
            api_key: "tE4xehNIehE5UNy85O6V"
          },
          // withCredentials: true,
        };
        const res = await axios.post(
          `https://detect.roboflow.com/bail-watch-2/1`,
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
      setFrameDetected(true);
      setAnalyzeHeight3(190);
      setClicked(false);
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
          {/* <div
            style={{
              width: analyzeWidth2,
            }}
            className={`absolute right-[50%]  bottom-[-60%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
          ></div> */}
        </div>
      </div>
      <div className="flex flex-row justify-center mt-[12rem]">
        <div
          id="DecisionClicked"
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
            <p className="animate-pulse hover:cursor-not-allowed w-[10rem] text-center h-[4rem] text-black pb-[2rem]">
              Capturing the Moment: Bails Dislocated
            </p>
          ) : (

            (frameDetect ? <p
              className={`${border1
                ? "text-black opacity-[100%] w-[10rem] h-[4rem] pt-2 text-center pt-4 "
                : " text-black opacity-[50%] w-[10rem] h-[4rem] pt-2 text-center pt-4 "
                }`}
            >
              Frames Analyzed!
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
            <div className="grid grid-cols-3 gap-5 space-x-2 justify-center px-6">

              {roboFlowApiCall.length > 0 && roboFlowApiCall?.map((roboFlow: any) => (
                <div className="mb-4">
                  <ImageWithBoundingBox data={roboFlow} />
                </div>
              ))}

            </div>
            {/* <VideoUpload setImages1={setImages} setVideo1Prop={setVideo1} width={700} height={500} /> */}
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

        {/* <div className="w-[24rem] relative h-[24rem] video-upload right p-5 border border-black shadow-md shadow-gray-500 rounded-md">
          <div>
            <p className="text-black text-center text-xl underline">
              Frame of Bails Dislocation
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

          <div className=" absolute right-[50%] bottom-[-60%] bottom-0 border border-b-gray w-[13rem] "></div>
          <div
            style={{
              width: analyzeWidth2,
            }}
            className={`absolute right-[50%]  bottom-[-60%] bottom-0 transition-all ease-out duration-1000 border border-b-black`}
          ></div>
        </div> */}
      </div>








      <div id="decisonMade" className="flex flex-row justify-center mt-[12rem]">
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




      <div>
        <Footer />
        {/* @ts-ignore */}
      </div>
    </div>
  );
}

export default RunoutPrediction;

import React from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { VideoToFrames, VideoToFramesMethod } from "./VideoToFrames";

export default function VideoUpload(props) {
    const { width, height } = props;

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    }

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        const frames = await VideoToFrames.getFrames(
            url,
            30,
            VideoToFramesMethod.totalFrames
          );
        const firstTenElements = frames.slice(0, 10);
        props?.setImages(firstTenElements);
        setSource(url);
        props?.setVideo1Prop(url);
    };

    const handleChoose = (event) => {
        inputRef.current.click();
    };

    return (
        <div className="VideoInput">
            <input
                ref={inputRef}
                id="fileInput"
                className="hidden"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"
            />

            {source ? (
                <video
                    className="VideoInput_video mt-8"
                    width="100%"
                    height={height}
                    controls
                    src={source}
                />
            ) : <div className="flex flex-row justify-center items-center mt-14"><button onClick={handleButtonClick}>
                <ArrowUpOnSquareIcon className="h-40 w-40 text-black" />
            </button></div>}
        </div>
    );
}

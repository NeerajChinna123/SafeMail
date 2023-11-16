import React from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

export default function VideoUpload2(props) {
    const { width, height } = props;

    const inputRef = React.useRef();

    const [source2, setSource2] = React.useState();

    const handleButtonClick = () => {
        document.getElementById('fileInput2').click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource2(url);
        
        props?.setVideo2Prop(url);
    };

    const handleChoose = (event) => {
        inputRef.current.click();
    };

    return (
        <div className="VideoInput">
            <input
                ref={inputRef}
                id="fileInput2"
                className="hidden"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"
            />

            {source2 ? (
                <video
                    className="VideoInput_video mt-8"
                    width="100%"
                    height={height}
                    controls
                    src={source2}
                />
            ) : <div className="flex flex-row justify-center items-center mt-14"><button onClick={handleButtonClick}>
                <ArrowUpOnSquareIcon className="h-40 w-40 text-black" />
            </button></div>}
        </div>
    );
}

import React, { useRef, useEffect } from 'react';
import { color } from '../../node_modules/framer-motion/dist/index';

export const ImageWithBoundingBox5 = (props: any) => {
    const { frameNumber, image, apiCallresponse } = props?.data;

    const boxStyle = {
        position: 'absolute',
        border: '2px solid red',
        // Using the first prediction for demonstration
        //@ts-ignore
        left: apiCallresponse?.predictions[0]?.x / process.env.NEXT_PUBLIC_B5_BS1_left + 'px',
        //@ts-ignore
        top: apiCallresponse?.predictions[0]?.y / process.env.NEXT_PUBLIC_B5_BS1_top + 'px',
        //@ts-ignore
        width: apiCallresponse?.predictions[0]?.width / process.env.NEXT_PUBLIC_B5_BS1_width + 'px',
        //@ts-ignore
        height: apiCallresponse?.predictions[0]?.height / process.env.NEXT_PUBLIC_B5_BS1_height + 'px'
    };


    const confidence1 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'white',
        background: 'red'
    };

    return (
        <>
            <div style={{ position: 'relative', width: apiCallresponse?.image.width / 3, height: apiCallresponse?.image.height / 3 }}>
                <img src={image} alt="Analyzed" />
                 {/* @ts-ignore */}
                <div style={boxStyle}></div>

            </div>
            {/* @ts-ignore */}
            <div className="font-bold pb-1 text-center rounded-sm" style={confidence1}>{(apiCallresponse?.predictions[0]?.confidence * process.env.NEXT_PUBLIC_B1_confidence).toFixed(2)}  % </div>
        </>
    );
};

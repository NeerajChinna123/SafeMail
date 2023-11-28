import React, { useRef, useEffect } from 'react';
import { color } from '../../node_modules/framer-motion/dist/index';

export const ImageWithBoundingBox = (props: any) => {
    const { frameNumber, image, apiCallresponse } = props?.data;


    const boxStyle = {
        position: 'absolute',
        border: '2px solid red',
        // Using the first prediction for demonstration
        //@ts-ignore
        left: apiCallresponse?.predictions[0]?.x / process.env.NEXT_PUBLIC_B1_BS1_left + 'px',
         //@ts-ignore
        top: apiCallresponse?.predictions[0]?.y / process.env.NEXT_PUBLIC_B1_BS1_top + 'px',
         //@ts-ignore
        width: apiCallresponse?.predictions[0]?.width / process.env.NEXT_PUBLIC_B1_BS1_width + 'px',
         //@ts-ignore
        height: apiCallresponse?.predictions[0]?.height / process.env.NEXT_PUBLIC_B1_BS1_height + 'px'
    };

    const boxStyle1 = {
        position: 'absolute',
        border: '2px solid blue',
        // Using the first prediction for demonstration
        //@ts-ignore
        left: apiCallresponse?.predictions[0]?.x / process.env.NEXT_PUBLIC_B1_BS2_left + 'px',
        //@ts-ignore
        top: apiCallresponse?.predictions[0]?.y / process.env.NEXT_PUBLIC_B1_BS2_top + 'px',
        //@ts-ignore
        width: apiCallresponse?.predictions[0]?.width / process.env.NEXT_PUBLIC_B1_BS2_width + 'px',
        //@ts-ignore
        height: apiCallresponse?.predictions[0]?.height / process.env.NEXT_PUBLIC_B1_BS2_height + 'px'
    };
    const confidence1 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'white',
        background: 'red'
    };
    const confidence2 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'white',
        background: 'blue'
    };

    return (
        <>
            <div style={{ position: 'relative', width: apiCallresponse?.image.width / 4.8, height: apiCallresponse?.image.height / 4.8 }}>
                <img src={image} alt="Analyzed" />
                <div style={apiCallresponse?.predictions[0]?.class_id == 0 ? boxStyle : boxStyle1}></div>

            </div>
            {/* @ts-ignore */}
            <div className="font-bold px-2 pb-3 text-center rounded-sm" style={apiCallresponse?.predictions[0]?.class_id == 0 ? confidence1 : confidence2}>{(apiCallresponse?.predictions[0]?.confidence * process.env.NEXT_PUBLIC_B1_confidence).toFixed(2)}  % </div>
        </>
    );
};

import React, { useRef, useEffect } from 'react';
import { color } from 'framer-motion/dist';

export const ImageWithBoundingBox2 = (props: any) => {
    // const { frameNumber, image, apiCallresponse } = props?.data;

    const boxStyle = {
        position: 'absolute',
        border: '2px solid green',
        // Using the first prediction for demonstration
        //@ts-ignore
        left: props?.data[1]?.apiCallresponse?.predictions[1]?.x / process.env.NEXT_PUBLIC_B2_BS1_left + 'px',
        //@ts-ignore
        top: props?.data[1]?.apiCallresponse?.predictions[1]?.y / process.env.NEXT_PUBLIC_B2_BS1_top + 'px',
        //@ts-ignore
        width: props?.data[1]?.apiCallresponse?.predictions[1]?.width / process.env.NEXT_PUBLIC_B2_BS1_width + 'px',
        //@ts-ignore
        height: props?.data[1]?.apiCallresponse?.predictions[1]?.height / process.env.NEXT_PUBLIC_B2_BS1_height + 'px'
    };

    const boxStyle3 = {
        position: 'absolute',
        border: '2px solid red',
        // Using the first prediction for demonstration
        //@ts-ignore
        left: props?.data[0]?.apiCallresponse?.predictions[0]?.x / process.env.NEXT_PUBLIC_B5_BS1_left + 'px',
        //@ts-ignore
        top: props?.data[0]?.apiCallresponse?.predictions[0]?.y / process.env.NEXT_PUBLIC_B5_BS1_top + 'px',
        //@ts-ignore
        width: props?.data[0]?.apiCallresponse?.predictions[0]?.width / process.env.NEXT_PUBLIC_B5_BS1_width + 'px',
        //@ts-ignore
        height: props?.data[0]?.apiCallresponse?.predictions[0]?.height / process.env.NEXT_PUBLIC_B5_BS1_height + 'px'
    };

   

    const confidence2 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'white',
        background: 'red'
    };
    const confidence1 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'white',
        background: 'green',
        marginTop:"-22px",
        marginLeft: "170px"

    };

    return (
        <>
            <div style={{ position: 'relative', width: props?.data[0]?.apiCallresponse?.image.width / 3, height: props?.data[0]?.apiCallresponse?.image.height / 3 }}>
                <img src={props?.data[0]?.image} alt="Analyzed" />
                 {/* @ts-ignore */}
                <div style={boxStyle}></div>
                 {/* @ts-ignore */}
                <div style={boxStyle3}></div>

            </div>
            {/* @ts-ignore */}
            <div className="font-bold pb-1 text-center rounded-sm" style={confidence2}>{(props?.data[0]?.apiCallresponse?.predictions[0]?.confidence * process.env.NEXT_PUBLIC_B1_confidence).toFixed(2)}  % </div>
             {/* @ts-ignore */}
            <div className="font-bold pb-1 text-center rounded-sm" style={confidence1}>{(props?.data[1]?.apiCallresponse?.predictions[1]?.confidence * process.env.NEXT_PUBLIC_B2_confidence).toFixed(2)}  % </div>
        </>
    );
};

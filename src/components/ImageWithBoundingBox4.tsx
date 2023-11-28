import React, { useRef, useEffect } from 'react';
import { color } from '../../node_modules/framer-motion/dist/index';
import axios from "axios";
export const ImageWithBoundingBox4 = (props: any) => {

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

    const boxStyle1 = {
        position: 'absolute',
        border: '2px solid yellow',
        // Using the first prediction for demonstration
        //@ts-ignore
        left: props?.data[2]?.apiCallresponse?.predictions[0]?.x / process.env.NEXT_PUBLIC_B4_BS2_left + 'px',
        //@ts-ignore
        top: props?.data[2]?.apiCallresponse?.predictions[0]?.y / process.env.NEXT_PUBLIC_B4_BS2_top + 'px',
        //@ts-ignore
        width: props?.data[2]?.apiCallresponse?.predictions[0]?.width / process.env.NEXT_PUBLIC_B4_BS2_width + 'px',
        //@ts-ignore
        height: props?.data[2]?.apiCallresponse?.predictions[0]?.height / process.env.NEXT_PUBLIC_B4_BS2_height + 'px'
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


    const confidence1 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'white',
        background: 'green',
        marginTop: "-22px",
        marginLeft: "170px"
    };

    const confidence2 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'black',
        background: 'yellow',
        marginTop: "-25px",
        marginLeft: "330px"
    };


    const confidence4 = {
        // Using the first prediction for demonstration
        width: '100px',
        height: '26px',
        color: 'white',
        background: 'red'
    };



    if ((props?.data[0]?.apiCallresponse?.predictions[0]?.x - props?.data[1]?.apiCallresponse?.predictions[1]?.x > props?.data[0]?.apiCallresponse?.predictions[0]?.x - props?.data[2]?.apiCallresponse?.predictions[0]?.x)) {
        props?.setFinalDecision1("Out");
        // sendDecision("Out");
    }
    else {
        props?.setFinalDecision1("Not-Out");
        // sendDecision("Not-Out");
    }

    return (
        <>
            <div style={{ position: 'relative', width: props?.data[0]?.apiCallresponse?.image.width / 3, height: props?.data[0]?.apiCallresponse?.image.height / 3 }}>
                <img src={props?.data[0]?.image} alt="Analyzed" />
                <div style={boxStyle}></div>
                <div style={boxStyle1}></div>
                <div style={boxStyle3}></div>

            </div>
            {/* @ts-ignore */}
            <div className="font-bold pb-1 text-center rounded-sm" style={confidence4}>{(props?.data[0]?.apiCallresponse?.predictions[0]?.confidence * process.env.NEXT_PUBLIC_B1_confidence).toFixed(2)}  % </div>
            {/* @ts-ignore */}
            <div className="font-bold pb-1 w-[6rem] text-center rounded-sm" style={confidence1}>{(props?.data[1]?.apiCallresponse?.predictions[1]?.confidence * process.env.NEXT_PUBLIC_B2_confidence).toFixed(2)}  % </div>
            {/* @ts-ignore */}
            <div className="font-bold pb-1 text-center  rounded-sm" style={confidence2}>{(props?.data[2]?.apiCallresponse?.predictions[0]?.confidence * process.env.NEXT_PUBLIC_B3_confidence).toFixed(2)}  % </div>

        </>
    );
};

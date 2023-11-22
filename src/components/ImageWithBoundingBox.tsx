import React, { useRef, useEffect } from 'react';
import { color } from '../../node_modules/framer-motion/dist/index';

export const ImageWithBoundingBox = (props: any) => {
    const { frameNumber, image, apiCallresponse } = props?.data;

    console.log('props : ', props)

    const boxStyle = {
        position: 'absolute',
        border: '2px solid red',
        // Using the first prediction for demonstration
        left: apiCallresponse?.predictions[0].x / 5.3 + 'px',
        top: apiCallresponse?.predictions[0].y / 6.6 + 'px',
        width: apiCallresponse?.predictions[0].width / 4.8 + 'px',
        height: apiCallresponse?.predictions[0].height / 4.8 + 'px'
    };

    const boxStyle1 = {
        position: 'absolute',
        border: '2px solid blue',
        // Using the first prediction for demonstration
        left: apiCallresponse?.predictions[0].x / 5.3 + 'px',
        top: apiCallresponse?.predictions[0].y / 6.6 + 'px',
        width: apiCallresponse?.predictions[0].width / 4.8 + 'px',
        height: apiCallresponse?.predictions[0].height / 4.8 + 'px'
    };

    const confidence1 = {


        // Using the first prediction for demonstration

        width: '200px',
        height: '26px',
        color: 'white',
        background: 'red'
    };

    const confidence2 = {


        // Using the first prediction for demonstration

        width: '200px',
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
            <div className="font-bold p-1 text-center rounded-md" style={apiCallresponse?.predictions[0]?.class_id == 0 ? confidence1 : confidence2}>{apiCallresponse?.predictions[0]?.confidence * 110}  % </div>
        </>
    );
};

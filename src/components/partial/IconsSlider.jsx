import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const IconSlider = () => {

    const properties = {
        duration: 5000,
        pauseOnHover: false,
        autoplay: true,
        indicators: false, 
        arrows: false
    };

    return (    
        <Fade {...properties}>
            <img src="/images/i-008.png" alt=""/>
            <img src="/images/i-010.png" alt=""/>
            <img src="/images/i-011.png" alt=""/>
        </Fade>
    );

};

export default IconSlider;
import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const TextSlider = () => {

    const properties = {
        duration: 5000,
        pauseOnHover: false,
        autoplay: true,
        indicators: false, 
        arrows: false
    };

    return (    
        <Fade {...properties}>
            <h1>Direct video, photo with text or text messaging</h1>
            <h1>Between Fans and Professional Athletes &amp; Coaches!</h1>
            <h1>Finally!</h1> 
        </Fade>
    );

};

export default TextSlider;
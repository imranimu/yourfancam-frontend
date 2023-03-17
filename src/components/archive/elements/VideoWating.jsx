import React, { Component } from 'react';

import classes from '../styles/VideoWating.module.css'

export default class VideoWating extends Component {
    render() {                        

        return (
            <>  
                <div className={['RightBorderRadius' , classes.VideoSendWrap].join(' ')}>

                    <div className={classes.VideoThum}>
                        <img src="images/video-002.jpg" alt="Video Thum"/>
                    </div>
                    
                    <div className={classes.VideoTitle}>
                        <h2>Your video have been sent.</h2>
                        <h2>Please wait for mentor's reply.</h2>
                    </div>

                    <div className="clearfix"></div>

                    <div className={classes.WatingText}>
                        <p>Wating time remaining:</p>
                        <div className={classes.WatingTime}>
                            <p>12:43:11</p>
                        </div>
                    </div>
                    
                    <div className="clearfix"></div>

                </div>
            </>
        );
    }
}

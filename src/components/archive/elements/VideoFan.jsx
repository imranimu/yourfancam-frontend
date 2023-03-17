import React, { Component } from 'react';

import {Button} from 'reactstrap'

import classes from '../styles/VideoFan.module.css'

export default class VideoFan extends Component {
    render() {                        

        return (
            <>  
                <div className={['RightBorderRadius' , classes.VideoSendWrap].join(' ')}>

                    <div className={classes.VideoTitle}>
                        <h2>You have new request from your fan.</h2>
                        <h2>Please wait for mentor's reply. 
                            <span className={classes.WatingTime}>12:43:11</span>
                        </h2>
                    </div>

                    <div className="clearfix"></div>

                    <div className={classes.WatingText}>
                        <Button className={['mr-3', classes.UploadVideo].join(' ')} size="lg"><i className="fa fa-paper-plane"></i> Upload Video</Button>
                        <Button className={classes.StartConversation} size="lg">Start a Conversation</Button>
                    </div>
                    
                    <div className="clearfix"></div>

                </div>
            </>
        );
    }
}

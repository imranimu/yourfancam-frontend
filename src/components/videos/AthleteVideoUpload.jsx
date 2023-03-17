import React, { Component } from 'react';

import VideoRecorder from 'react-video-recorder'

export default class AthleteVideoUpload extends Component {
    render() {
        return (
           <>
           <div className="VideoContentWrap">
               <p>Please state the following in your video:</p>

                <p>Full legal name.</p>

                <p>Professional Sporting history either Playing sport or Coaching.</p>

           </div>
           
            <div className="VideoFrame">   
                <VideoRecorder                
                    useVideoInput             
                    replayVideoAutoplayAndLoopOff
                    showReplayControls= {true} 
                    onRecordingComplete={videoBlob => {
                        // Do something with the video...
                        //console.log('videoBlob', videoBlob)
                        this.props.callback(videoBlob);
                    }}              
                />
                
            </div>
            
            <div className="VideoContentWrap">
               <p>If we require any additional information to confirm your identity
                we will contact you via the e-mali adress you have provided us.</p>

                <p>By submitting your profile you agree and accept
                the yourfancam Athletes and Coaches Agreement.</p>
                
                <br/>

                <p>This video is only for verification purposes and will not be visible anywhere on the platform. </p>
                
           </div>

           </>
        );
    }
}

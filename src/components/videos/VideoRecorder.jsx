import React, { Component } from 'react';

import VideoRecorder from 'react-video-recorder'

export default class Recorder extends Component {    

    render() {
        return (
            <>
                <div className="VideoFrame">
                    {/* <h4>Your Video</h4> <span><i className="fa fa-cog"></i></span> */}
                    <VideoRecorder                                            
                        isOnInitially
                        showReplayControls= {true}
                        replayVideoAutoplayAndLoopOff
                        onRecordingComplete={videoBlob => {
                        // Do something with the video...
                        console.log('videoBlob', videoBlob)
                        this.props.callback(videoBlob);
                    }}                    
                    />
                </div>
            </>
        );
    }

}

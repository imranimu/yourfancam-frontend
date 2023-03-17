import React, { Component } from 'react';

import VideoRecorder from 'react-video-recorder'

export default class VideoUploadFrame extends Component {
    render() {
        return (
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
        );
  }
}

import React, { Component } from 'react';

import classes from '../../styles/dashboard.module.css'

import VideoSend from '../../elements/VideoSend'
//import VideoWating from '../../elements/VideoWating'
import VideoReplied from '../../elements/VideoReplied'
import VideoFan from '../../elements/VideoFan'
import Filter from '../../elements/Filter'


export default class AthletesDashboard extends Component {
  render() {
    return (
      <>
        <div className='TabPanelWrap'>

            <Filter/>             

            <div className={classes.VideoSendingWrap}>
                <div className={classes.VideoSendingLeft}>
                    
                    <h4>Request</h4>
                    
                    <VideoSend/>

                    <VideoSend/>

                    <VideoSend/>

                    <VideoSend/>

                    <VideoSend/> 
                </div>

                <div className={classes.VideoSendingRight}>
                    
                    <h4>Your Reply</h4>

                    <VideoFan/>

                    <VideoFan/>

                    <VideoReplied Athletes="true"/>

                    <VideoReplied Athletes="true"/>
                    
                    <VideoReplied Athletes="true"/>

                </div>
            </div>
        </div>
      </>
    );
  }
}

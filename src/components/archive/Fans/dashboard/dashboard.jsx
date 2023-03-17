import React, { Component } from 'react';

import classes from '../../styles/dashboard.module.css'

import VideoSend from '../../elements/VideoSend'
import VideoWating from '../../elements/VideoWating'
import VideoReplied from '../../elements/VideoReplied'
import Filter from '../../elements/Filter'
import { ConversationContext } from '../../../../context/ConversationContext';


export default class Dashboard extends Component {
  static contextType = ConversationContext
  render() {
    const {Videos} = this.context
    return (      
      <>
        <div className='TabPanelWrap'>

            <Filter/>             

            <div className={classes.VideoSendingWrap}>
                <div className={classes.VideoSendingLeft}>
                    
                    <h4>Your ask: {Videos ? <span>{Videos.length} videos</span> : ''}</h4>

                    {Videos.map( (value) => 
                      <div key={value.uuid} className={[classes.chatBoxWrap, classes.SenderChatBoxWrap].join(' ')}>
                        <VideoSend message={value}/>
                      </div> 
                    )}
                    
                    {/* <VideoSend/>

                    <VideoSend/>

                    <VideoSend/>

                    <VideoSend/>

                    <VideoSend/>  */}
                </div>

                <div className={classes.VideoSendingRight}>
                    
                    <h4>Athlete's Reply: <span>12 videos</span></h4>

                    <VideoWating/>

                    <VideoReplied/>

                    <VideoReplied/>

                    <VideoReplied/>
                    
                    <VideoReplied/>

                </div>
            </div>
        </div>
      </>
    );
  }
}

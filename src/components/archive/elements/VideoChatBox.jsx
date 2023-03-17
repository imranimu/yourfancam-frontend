import React, { Component } from 'react';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import classes from '../styles/Conversations.module.css';

//import VideoReplied from './VideoReplied'
//import SendVideo from './SendVideo'
import { ConversationContext } from '../../../context/ConversationContext';


//import 'react-tabs/style/react-tabs.css';

import MessageFilter from './MessageFiltel';

//import SelfiesText from './SelfiesText';
import VideoReceived from './VideoReceived'
import Spinner from 'reactstrap/lib/Spinner';
import VideoSend from './VideoSend';
import MessageReceived from './MessageReceived';
import MessageSend from './MessageSend';
// import VideoRiplied from './VideoReplied'

export default class ChatBox extends Component {
    static contextType = ConversationContext
    render() {
        const {         
          Loader,  
          Chats,
          sender_id,
          sender_name,
          video,
          selfi, 
          message,
          showConversation,
          GetVideosConversation
        } = this.context

        return (            
            <>
            <div className="position-relative">
              {showConversation ? 
                <div className={classes.ChatWrap}>
                    <div className={classes.ProfileHeader}>                    
                      <div className={classes.ChatListContent}>                      
                        <h4>{sender_name}</h4>
                        <div className={classes.ProfileHeaderImage}>
                          Online<span></span>                                          
                        </div>                                          
                      </div>

                      <MessageFilter uuid={sender_id}/>

                      <div className="ConversationTypeFilter">
                        <ul>
                          <li 
                            onClick={ ()=> GetVideosConversation(sender_id, 'video', sender_name)} 
                            className={video? 'active' : ''}>Videos</li>
                          <li 
                            onClick={ ()=> GetVideosConversation(sender_id, 'selfi', sender_name)} 
                            className={selfi? 'active' : ''}>Selfies</li>
                          <li 
                            onClick={ ()=> GetVideosConversation(sender_id, 'chat', sender_name)} 
                            className={message? 'active' : ''}>Chats</li>
                        </ul>
                      </div>

                      <div className="ConversationBody">
                        
                        {video ? 
                          <>                          
                            
                            {this.props.role === 'fan' ? <VideoSend data={Chats}/> : <VideoReceived data={Chats}/> }

                             
                          </> : ''
                        }

                        {selfi ? '' : ''}
                        
                        {message ? 
                          <>  

                            {this.props.role === 'fan' ? <MessageSend data={Chats}/> : <MessageReceived data={Chats} /> }   
                            
                          </>
                          
                        : ''}                      

                      </div>

                    </div>
                    
                </div>
              : 
              <>
                <div className="mt-5 ml-4"><h4>No Conversation Selected</h4></div>
              </> 
              }

              {/* <SendVideo/> */}
            
              {Loader ? <div className="LoadingIcon text-center"><Spinner/></div> : ''}

              {this.props.type}

            </div>
            
            
            </>
        );
    }
}

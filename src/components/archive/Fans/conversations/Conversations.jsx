import React, { Component } from 'react';

import classes from '../../styles/Conversations.module.css' 

// import ChatProfile from '../../elements/ChatProfile'
// import ChatBox from '../../elements/ChatBox'
import VideoChatBox from '../../elements/VideoChatBox'
import VideoChatProfile from '../../elements/VideoChatProfile'

export default class Conversations extends Component {

    constructor(){
      super(); 
      this.state ={
        VideoChat: true, 
        Chat: false,
        Loader: false, 
      }
    }

    render() {
      return (
        <>
          <div className={classes.ConversationsWrap}>
              <div className="TabContentLeft ConversationsLeft">
                <div className={classes.ConversationsHeader}>
                  <div className="ConversationTileWrap">
                    <h1 className="mainTitle">Messages <i className="fa fa-pencil-square-o"></i></h1>
                  </div>

                  {/* <div className={classes.ButtonWrap}>

                  <Button onClick={ () =>{ this.setState({VideoChat: true, Chat: false})} } className={`${this.state.VideoChat ? "active" : ""}`}>Videos</Button>

                  <Button onClick={ () =>{ this.setState({VideoChat: false, Chat: true})} } className={`${this.state.Chat ? "active" : ""}`}>Chat</Button>

                  </div> */}

                  <form action="#">
                      <div className={classes.SearchFormGroup}>
                          <i className="fa fa-search"></i>
                          <input type="text" placeholder="Find your mentor ..."/>
                      </div>
                  </form>
                </div>
                
                <VideoChatProfile/>

                {/* {this.state.VideoChat ? <VideoChatProfile/> : <ChatProfile/>} */}

                {/* <h5>No conversation Found</h5> */}
                
              </div>

              <div className="TabContentRight ConversationsRight">
                  {/* {this.state.VideoChat ? <VideoChatBox/> : <ChatBox />} */}

                  <VideoChatBox role="fan"/>
              </div>           
          </div>
        </>
      );
    }
}

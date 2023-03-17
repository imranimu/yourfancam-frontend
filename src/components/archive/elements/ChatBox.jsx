import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ConversationContext } from '../../../context/ConversationContext';
import Avatar from '../../partial/Avatar';
import classes from '../styles/Conversations.module.css';

export default class ChatBox extends Component {
    static contextType = ConversationContext
    render() {
        const {Chats, ChatReciverInfo} = this.context
        return (
            <>
            <div className={classes.ChatWrap}>
                <div className={classes.ProfileHeader}>
                  <div className={classes.ProfileHeaderImage}>
                    <span></span>
                    {/* <img src="images/00_02.png" alt=""/> */}
                    {ChatReciverInfo.avatar ? <Avatar src={ChatReciverInfo.avatar} size={60} /> : <Avatar size={60} />}                    
                  </div>
                  <div className={classes.ChatListContent}>
                    <h4>{ChatReciverInfo.first_name} {ChatReciverInfo.last_name}</h4>
                    <Link to={'/profile/'+ChatReciverInfo.uuid}>View Profile</Link>
                  </div>
                </div>

                <div className={classes.ChatContentWrap}>

                  {Chats.map( (value) => 
                      <>
                        <div key={value.uuid} className={classes.chatBoxWrap}>
                          <div className={classes.ChatBox}>
                            <div className={classes.ChatBoxText}>
                              <p>{value.message}</p>
                              <span>{value.created_at}</span>
                            </div>
                          </div>
                          <div className={classes.SenderProfile}>
                            {/* <img src="images/00_02.png" alt=""/> */}
                            {value.sender_avatar ? <Avatar src={value.sender_avatar} size={40} /> : <Avatar size={40} />}                            
                          </div>
                        </div>  
                        <div className="clearfix"></div>
                      </>
                  )}
                  
                  {/* <div className={classes.Time}>
                    <span><i className="fa fa-clock-o"></i> Today</span>  
                  </div>     

                  <div className={classes.chatBoxWrap}>
                    <div className={classes.ChatBox}>
                      <div className={classes.ChatBoxText}>
                        <p>How are you all doing? How was the weekend?</p>
                        <span>8 minutes ago</span>
                      </div>
                    </div>
                    <div className={classes.SenderProfile}>
                      <img src="images/00_02.png" alt=""/>
                    </div>
                  </div>  
                  <div className="clearfix"></div>

                  <div className={[classes.chatBoxWrap, classes.SenderChatBoxWrap].join(' ')}>
                    <div className={classes.SenderProfile}>
                      <img src="images/00_05.png" alt=""/>
                    </div>
                    <div className={classes.ChatBox}>
                      <div className={classes.ChatBoxText}>
                        <p>Doing good, went hiking this weekend, the weather was great?</p>
                        <span>6 minutes ago</span>
                      </div>

                      <div className={classes.senderVideoWrap}>
                        <img src="images/mentors/001.png" alt="Mentors"/>
                        <div className="OverlayContent">                          
                          <p className="PalyButton">
                            <Link to={"#"}><img className={["PalyIcon", classes.PalyIconSmall].join(' ')} src="images/play.png" alt=""/></Link>
                          </p>                          
                        </div>
                      </div>
                    </div>                    
                  </div> 
                  <div className="clearfix"></div>*/}

                </div>  

                <div className={classes.ChatFooter}>
                    <form>
                        <div className={classes.ChatFormGroup}>   

                            <input type="text" placeholder="Type something ..."/>

                            <button><i className="fa fa-paper-plane-o"></i> Send</button>
                        </div>

                        <ul>
                          <li><Link to={"#"}><i className="fa fa-picture-o"></i></Link></li>
                          <li><Link to={"#"}><i className="fa fa-link"></i></Link></li>
                          <li><Link to={"#"}><i className="fa fa-paperclip"></i></Link></li>
                          <li><Link to={"#"}><i className="fa fa-map-marker"></i></Link></li>
                          <li><Link to={"#"}><i className="fa fa-smile-o"></i></Link></li>
                        </ul>
                    </form>
                </div>
              </div>
            </>
        );
    }
}

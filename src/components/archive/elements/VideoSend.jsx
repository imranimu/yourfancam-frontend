import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Avatar from '../../partial/Avatar';
//import SocialShare from '../../partial/SocialShare';

import classes from '../styles/VideoItem.module.css'

export default class VideoSend extends Component {
    render() {      
        
        return (
            <>
                {this.props.data.map( (value) =>
                    <>  <div key={value.uuid} className={[classes.VideoItemWrap, classes.VideoItemWrapRight].join(' ')}>

                            <div className={classes.ProfileInfoMsg}>
                                <p>{value.sender.name}  12:27</p>
                                <div className={['TopBorderRadius' , classes.VideoSendWrap].join(' ')}>
                                    <div className={classes.VideoThum}>                                                            
                                        <video controls> 
                                            <source src={value.conversation.video} type="video/mp4"/>                        
                                        </video>
                                    </div>
                                    <div className={classes.VideoTitle}>
                                        <h2>Today’s training at school</h2>
                                        <span>{value.created_at}</span>
                                    </div>
                                    {/* <div className="ShareAction">
                                        <SocialShare/>
                                    </div> */}
                                </div> 

                                {/* <div className="ActionReply">
                                    <span><Link to={"#"}>Reply</Link></span>
                                    <span><Link to={"#"} className="deny" >Deny</Link></span>
                                    <span><Link to={"#"} className="report">Report</Link></span>
                                </div>                        */}
                            </div>

                            <div className={classes.ProfileAvater}>
                                {value.sender.avatar ? <Avatar src={value.sender.avatar} size={75}/> : <Avatar size={75}/>}
                            </div>
                        </div>
                    </>
                )}                
            </>
        );
    }
}

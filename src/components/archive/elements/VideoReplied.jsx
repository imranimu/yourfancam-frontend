import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Avatar from '../../partial/Avatar';

import classes from '../styles/VideoItem.module.css'

//import SocialShare from '../../partial/SocialShare'

export default class VideoRiplied extends Component {
    render() {                        

        return (
            <> 
                <div className={classes.VideoItemWrap}>
                    
                    <div className={classes.ProfileInfoMsg}>
                        <p>12:27</p>
                        <div className={['TopBorderRadius mb-2' , classes.VideoSendWrap].join(' ')}>
                            <div className={classes.VideoThum}>                        
                                <img src="/images/video-001.jpg" alt=""/>
                                {/* <video controls> 
                                    <source src={this.props.message.resources_url} type="video/mp4"/>                        
                                </video> */}
                            </div>
                            <div className={classes.VideoTitle}>
                                <h2>Today’s training at school</h2>
                                <span>02.11.2020  15:45</span>
                            </div>
                        </div> 
                        <span><i className="fa fa-check"></i></span>
                        <span><i className="fa fa-check"></i></span>
                    </div>
                    {/* <div className={[classes.ProfileAvater, 'mr-0 ml-3'].join(' ')}>
                        <Avatar size={75}/>
                    </div> */}
                </div> 
                {/* <div className={['RightBorderRadius' , classes.VideoSendWrap].join(' ')}>

                    <div className={classes.VideoThum}>
                        <img src="images/video-001.jpg" alt="Video Thum"/>
                    </div>
                    
                    <div className={classes.VideoTitle}>
                        <h2>It S Classified How To Utilize Free Classified Ad Sites To Boost Business</h2>

                        <span>22/05/2020 | 14:22</span>
                    </div>

                    <div className="clearfix"></div>

                    {this.props.Athletes ? 
                        <div className={['text-left', classes.Status].join(' ')}>
                            <SocialShare/>
                        </div>
                    :
                    <>
                    <div className={classes.SentTo}>
                        <p>Replied by:</p>
                        <div className={classes.SentToProfile}>
                            <img src="images/00_05.png" alt="Replied Profile" />
                            <h3>Chris Rhodes</h3>
                        </div>
                    </div>

                    <div className={['text-right', classes.Status].join(' ')}>
                        <SocialShare/>
                    </div>
                    </>
                    }

                    
                    
                    <div className="clearfix"></div>

                </div> */}
            </>
        );
    }
}

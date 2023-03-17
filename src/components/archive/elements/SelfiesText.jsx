import React, { Component } from 'react';
import Avatar from '../../partial/Avatar';

import classes from '../styles/Conversations.module.css';

export default class SelfiesText extends Component {
    render() {
        return (
            <>
                <div className={[classes.chatBoxWrap, classes.ChatBoxLeft].join(' ')}>
                    
                    <div className={classes.SenderProfile}>
                        <Avatar src="/images/00_02.png" size={75} />                             
                    </div>

                    <div className={[classes.ChatBox, classes.ChaoxSelfies].join(' ')}>                        
                        
                        <span className={classes.ChatTimeDate}>12:30</span>

                        <img src="/images/00_10.jpg" alt=""/>

                        <div className={classes.ChatBoxText}>
                            <p>This was me in the olympics. :)</p>                  
                        </div>
                        
                    </div>
                    
                </div>  
                
                <div className="clearfix"></div>

                <div className={[classes.chatBoxWrap, classes.ChatBoxRight].join(' ')}>
                    
                    <div className={[classes.ChatBox, classes.ChaoxSelfies].join(' ')}>                        
                        <span className={classes.ChatTimeDate}>12:30</span>

                        <div className={classes.ChatBoxText}>
                            <p>This is with friends after we won the game. Can you send me another selfie please?</p>
                            <p>That would make me sooo happy! :)</p>                    
                        </div>
                        <img src="/images/00_11.jpg" alt=""/>
                    </div>
                    <div className={classes.SenderProfile}>
                        <Avatar src="/images/00_03.png" size={75} />                             
                    </div>
                </div>  
                <div className="clearfix"></div>
            </>
        )
    }
}

import React, { Component } from 'react';

import Avatar from '../../partial/Avatar';

import classes from '../styles/Conversations.module.css';


export default class MessageSend extends Component {
    render() {
        return (
            <>
                {this.props.data.map( (value) => 
                    <>
                    <div key={value.uuid} className={[classes.chatBoxWrap, classes.ChatBoxRight].join(' ')}>
                        
                        <div className={classes.ChatBox}>
                            <span className={classes.ChatTimeDate}>{value.created_at}</span>

                            <div className={classes.ChatBoxText}>
                                <p>{value.conversation.message}</p>                                  
                            </div>
                        </div>                    

                        <div className={classes.SenderProfile}>                                
                            {value.sender.avatar ? <Avatar src={value.sender.avatar} size={75} /> : <Avatar size={75} />}                            
                        </div>
                        
                    </div>  
                    <div className="clearfix"></div>
                    </>
                )}
            </>
        );
    }
}

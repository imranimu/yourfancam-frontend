import React, { Component } from 'react';
import classes from '../styles/Conversations.module.css';
import {Link} from 'react-router-dom'
import { ConversationContext } from '../../../context/ConversationContext';
import Avatar from '../../partial/Avatar';

export default class ChatProfile extends Component {
    static contextType = ConversationContext
    render() {
        const {Users, sender_id,  GetVideosConversation} = this.context
        return (
            <>
                <div className={classes.ConversationsContent}>
                    <ul>
                        {Users.map( (value) =>

                            <li key={value.sender_uuid} className={sender_id === value.sender_uuid ? classes.Active : ''}>
                                
                                <Link onClick={ ()=> GetVideosConversation(value.sender_uuid, 'video', value.sender_name)} to={"#"}>
                                    
                                    {value.sender_avatar ? <Avatar src={value.sender_avatar} size={60} /> : <Avatar size={60} />}         

                                    <div className={classes.ChatListContent}>

                                        <h4>{value.sender_name}</h4>

                                        <p>You sent you a video</p> 

                                    </div>

                                </Link>

                            </li> 

                        )}                        
                    </ul>
                </div>
            </>        
        );
    }
}

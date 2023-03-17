import React, { Component } from 'react';

import classes from '../styles/Conversations.module.css';

import {Link} from 'react-router-dom'
import { ConversationContext } from '../../../context/ConversationContext';
import Avatar from '../../partial/Avatar';

export default class ChatProfile extends Component {

    static contextType = ConversationContext

    render() {

        const {Users, reciver_id, GetConversation} = this.context

        return (

            <>
                <div className={classes.ConversationsContent}>
                    <ul>                        
                        {Users.map( (value) =>                             
                            <li key={value.uuid} className={reciver_id === value.uuid && classes.Active}>
                                <Link onClick={ ()=> GetConversation(value.uuid)} to={"#"}>
                                    <Avatar src={value.avatar} rounded={true} size={60} />                                    
                                    <div className={classes.ChatListContent}>
                                        <h4>{value.first_name} {value.last_name}</h4>
                                        <p>You sent you a video</p>
                                    </div>
                                </Link>
                            </li> 
                        )}                         
                    </ul>
                </div>

                <div className={classes.NewMessage}>
                    <button><i className="fa fa-paper-plane"></i> New Message</button>
                </div>
            </>        
        );
    }
}

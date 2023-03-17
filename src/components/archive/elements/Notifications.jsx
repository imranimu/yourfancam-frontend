import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Conversations.module.css';
import Avatar from '../../partial/Avatar';

export default class Notifications extends Component {
    render() {
        return (
            <div className='TabPanelWrap'>
                
                <h1 className="mainTitle"> Notifications </h1>

                <div className={[classes.ConversationsContent, 'ConversationsNotification'].join(' ')}>
                    <ul>                    
                        <li>
                            <Link to={"#"}>
                                <Avatar rounded={true} size={60} />                                    
                                <div className={[classes.ChatListContent, 'ChatListContent'].join(' ')}>
                                    <h4>Steve Holland sent you a video.</h4>
                                    <p>02.11.2020 - 16:30</p>
                                </div>
                            </Link>
                        </li>                                             
                        <li>
                            <Link to={"#"}>
                                <Avatar rounded={true} size={60} />                                    
                                <div className={[classes.ChatListContent, 'ChatListContent'].join(' ')}>
                                    <h4>Steve Holland sent you a video.</h4>
                                    <p>02.11.2020 - 16:30</p>
                                </div>
                            </Link>
                        </li>                                             
                        <li>
                            <Link to={"#"}>
                                <Avatar rounded={true} size={60} />                                    
                                <div className={[classes.ChatListContent, 'ChatListContent'].join(' ')}>
                                    <h4>Steve Holland sent you a video.</h4>
                                    <p>02.11.2020 - 16:30</p>
                                </div>
                            </Link>
                        </li>                                             
                    </ul>
                </div>

            </div>
        );
    }
}

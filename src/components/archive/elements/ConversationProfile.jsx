import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ConversationProfile extends Component {
  render() {
    return (
        <li key={value.uuid} className={reciver_id}>
            <Link onClick={ ()=> GetVideosConversation(value.uuid)} to={"#"}>              
                <Avatar src={value.avatar} rounded={true} size={60} />
                {/* <img src="images/00_06.png" alt=""/> */}
                <div className={classes.ChatListContent}>
                    <h4>{value.first_name} {value.last_name}</h4>
                    <p>You sent you a video</p>
                </div>
            </Link>
        </li>
    );
  }
}

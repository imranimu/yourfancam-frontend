import React, { Component } from 'react';

import classes from '../styles/Conversations.module.css';

import {Link} from 'react-router-dom'

class SendVideo extends Component {     

    render() {

        return (
        <>
            <div className={[classes.NewMessage, classes.RequestMessage].join(' ')}>     

                <Link className="" to={"/videosend"}><i className="fa fa-paper-plane"></i> New Request</Link>

            </div>
        </>
        );
    }
}

export default SendVideo; 

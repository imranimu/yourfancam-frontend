import React, { Component } from 'react';

import classes from './styles/SocialShare.module.css'

import {Link} from 'react-router-dom'

export default class SocialShare extends Component {
  render() {
    return (        
        <ul className={classes.SocialShare}>
            <li><Link to={"#"}><i className="fa fa-share-alt"></i></Link></li>
            <li><Link to={"#"}><i className="fa fa-download"></i></Link></li>
            {/* <li><Link to={"#"}><i className="fa fa-flag"></i></Link></li> */}
        </ul>        
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export default class Logo extends Component {
  render() {
    return (
        <div className="header_left">
            <Link to={"/"}><img src="/images/logo.png" alt="Logo"/></Link>
        </div>
    );
  }
}

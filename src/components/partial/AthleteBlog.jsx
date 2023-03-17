import React, { Component } from 'react';

import {Link } from 'react-router-dom';

export default class AthleteBlog extends Component {
  render() {
    return (
        <div className="MentorsWrap">
            <div className="MentorsImageWrap">
                <img src={this.props.Image} alt="Mentors"/>
                <div className="OverlayContent">
                    <p className="Time">{this.props.Time}</p>
                    <p className="Status">{this.props.Status}</p>
                    <p className="PalyButton"><Link to={"#"}><img className="PalyIcon" src="/images/play.png" alt=""/></Link></p>
                    <p className="price">{this.props.Price}</p>
                </div>
            </div>
            <div className="MentorsContent">
                <h4>{this.props.Title}</h4>

                <p>{this.props.Des}</p>

                <Link to={'/profile/'+this.props.uuid}><span>See profile</span> <i className="fa fa-angle-double-right"></i></Link>
            </div>
        </div>
    );
  }
}

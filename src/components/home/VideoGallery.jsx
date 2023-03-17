import React, { Component } from 'react';

import {Link} from 'react-router-dom'
 
export default class VideoGallery extends Component {
    render() {
        return (
            <>
                <section className="VideoContentWrap pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-4 mb-4">
                                <img src="images/video01.png" alt=""/> 					
                            </div> 						 
                        </div> 
                    </div> 
                </section> 

                <section className="col_wrap pb-5">
                    <div className="container bigContainer">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="VideoContentThum">
                                    <ul>
                                        <li><Link to={"#"}><img src="images/video02.png" alt=""/></Link></li>
                                        <li className="active"><Link to={"#"}><img src="images/video02.png" alt=""/></Link></li>
                                        <li><Link to={"#"}><img src="images/video02.png" alt=""/></Link></li>
                                        <li><Link to={"#"}><img src="images/video02.png" alt=""/></Link></li>
                                    </ul> 						
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

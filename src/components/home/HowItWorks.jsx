import React, { Component } from 'react';

import {Link} from 'react-router-dom'

export default class HowItWork extends Component {
    render() {
        return (
            <>
                <section className="pb-5"> 
                    <img src="images/00_01.png" alt=""/> 
                </section> 

                <section className="ServicesWrap">
                    <div className="container bigContainers">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <ul className="FilterNav">
                                    <li><Link to={"#"} className="small">1</Link></li>
                                    <li><Link to={"#"}>2</Link></li>
                                    <li><Link to={"#"} className="small">3</Link></li>
                                    <li><Link to={"#"}>4</Link></li>
                                </ul>	
                            </div>

                            <div className="col-md-3">
                                <div className="serviceItem BgChange">
                                    <img src="/images/i-001.png" alt=""/>                                    
                                    <p>Select the Athlete or Coach you would like to send a video, photo with text or text message to today!</p>
                                </div>
                            </div> 
                            <div className="col-md-3">
                                <div className="serviceItem">
                                    <img src="/images/i-002.png" alt=""/>                                    
                                    <p>Upload/record video, photo with text or text message on web-platform or mobile apps.</p>
                                </div>
                            </div> 
                            <div className="col-md-3">
                                <div className="serviceItem BgChange">
                                    <img src="/images/i-003.png" alt=""/>                                    
                                    <p>Send video, photo with text or text message &amp; pay. Receive your receipt and order updates to the e-mail you provided us.</p>
                                </div>
                            </div> 
                            <div className="col-md-3">
                                <div className="serviceItem">

                                    <img src="/images/i-004.png" alt=""/>

                                    <p>Receive your video, photo with text or text message reply from your chosen Athlete or Coach to your message inbox on the yourfancam web-platform or mobile applications.</p>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </section>
            </>
        );
    }
}

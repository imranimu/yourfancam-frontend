import React from 'react';

import {Container, Row, Col} from 'reactstrap'

import {Link} from 'react-router-dom'

const MyVideo = () =>{   
    return(
        <>
            <section className="SignUpWrap MyVideoWrap mt-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="mainTitle">My Video</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia, aliquam distinctio eveniet facilis consequuntur accusantium amet nulla magnam, assumenda, expedita reprehenderit esse aspernatur minus a temporibus saepe! Possimus, excepturi.</p> 
                        </Col> 
                    </Row> 
                </Container> 
            </section> 

            <section className="PopularMentorsWrap MyVideoOverlay"> 		 
                <Container>
                    <div className="PopularMentors">
                        <div className="MentorsWrap">
                            <div className="MentorsImageWrap">
                                <img src="/images/mentors/001.png" alt="Mentors"/>

                                <div className="OverlayContent"> 
                                    <p className="PalyButton"><Link to={"#"}><img className="PalyIcon" src="/images/play.png" alt=""/></Link></p> 
                                </div>
                            </div> 					 
                        </div>
                        <div className="MentorsWrap">
                            <div className="MentorsImageWrap">
                                <img src="/images/mentors/002.png" alt="Mentors"/>

                                <div className="OverlayContent"> 
                                    <p className="PalyButton"><Link to={"#"}><img className="PalyIcon" src="/images/play.png" alt=""/></Link></p> 
                                </div>
                            </div> 					 
                        </div>
                        <div className="MentorsWrap">
                            <div className="MentorsImageWrap">
                                <img src="/images/mentors/003.png" alt="Mentors"/>

                                <div className="OverlayContent"> 
                                    <p className="PalyButton"><Link to={"#"}><img className="PalyIcon" src="/images/play.png" alt=""/></Link></p> 
                                </div>
                            </div> 					 
                        </div>
                        <div className="MentorsWrap">
                            <div className="MentorsImageWrap">
                                <img src="/images/mentors/004.png" alt="Mentors"/>

                                <div className="OverlayContent"> 
                                    <p className="PalyButton"><Link to={"#"}><img className="PalyIcon" src="/images/play.png" alt=""/></Link></p> 
                                </div>
                            </div> 					 
                        </div>    

                        <div className="clearfix"></div>

                        <div className="sliderArrow mt-4">
                            <span><Link to={"#"}><i className="fa fa-angle-left"></i></Link></span>
                            <span><Link to={"#"}><i className="fa fa-angle-right"></i></Link></span>
                        </div>
                    </div>
                </Container> 
            </section>
        </>
    )
}

export default MyVideo; 
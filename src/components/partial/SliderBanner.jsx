import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import classes from './styles/Header.module.css';
import TextSlider from './TextSlider';
import IconSlider from './IconsSlider'

const PageSpinner = ({ title, BGimage, Pagetype }) => {
    return (
        <>  
            {Pagetype ? 
                <section className={classes.SliderWrap}>                    

                    <video className={[classes.VideoPlayer, classes.DesktopPlayer].join(' ')} autoPlay="true" muted loop> 
                        <source src="https://yfc-videos.s3-us-east-2.amazonaws.com/1605516293248.mp4" type="video/mp4"/>                        
                    </video>
                    
                    <video className={[classes.VideoPlayer, classes.PalyerMobile].join(' ')} autoPlay="true" muted loop>
                        <source src="https://yfc-videos.s3-us-east-2.amazonaws.com/1605516371115.mp4" type="video/mp4"/>
                    </video>
                    

                    <div className={classes.SliderContent}>
                        <Container className="bigContainer">
                            {/* <form action="#">
                                <div className={classes.SearchFormGroup}>
                                    <i className="fa fa-search"></i>
                                    <input type="text" placeholder="Find your mentor ..."/>
                                </div>
                            </form>	

                            <h1>be My Athlete</h1>

                            <h3>Getting in touch with your favorite persone sounds like a dream?</h3>

                            <h3>Let us make that happen!</h3>

                            <button className="btn btn-primary CustomButton">Get Started</button> */}
                            <Row>

                                <Col md={12} className="text-center HomeTextSlider">
                                    {/* <h1>Direct video, photo with text or text messaging</h1> */}                                    
                                    <TextSlider/>
                                </Col>

                                <Col md={12}>

                                    <div className={[classes.DownloadAppWrap, 'text-right'].join(" ")}>

                                        <h2 className="text-white">Download our App for iPhone and Android</h2>

                                        <span>
                                            <Link to={"#"}>
                                                <img src="/images/apple.png" alt=""/>
                                            </Link>
                                        </span>
                                        <span className="ml-3">
                                            <Link to={"#"}>
                                                <img src="/images/playstore.png" alt=""/>
                                            </Link>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>                        
                    </div>	
                    <div className="SendRecordMessage">
                        <IconSlider/>
                    </div> 	
                </section> :

                <section className="SliderWrap SliderWrapProfile">	

                    <img className="sliderImage" src={BGimage} alt=""/>

                    <div className={['ProfileSlide', classes.SliderContent].join(' ')}>
                        <div className="container">

                            <h1 className="smallTitle">{title}</h1>

                            <Link to={"#"}><img className="PalyIcon" src="/images/play.png" alt=""/></Link>

                        </div>
                    </div>		
                </section>
            }            
        </>
    );
};

PageSpinner.propTypes = {
  title: PropTypes.string.isRequired,
  Pagetype: PropTypes.string.isRequired,
  BGimage: PropTypes.string.isRequired,
};

PageSpinner.defaultProps = {
    title: 'success',
    Pagetype: '',
    BGimage: '/images/ProfileBanner.jpg',
};

export default PageSpinner;
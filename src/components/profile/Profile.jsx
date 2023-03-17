import React, { Component } from 'react';
import Header from '../partial/Header'
import Footer from '../partial/Footer'
import {Container, Row, Col} from 'reactstrap'

import ProfileInfo from './ProfileInfo'
import AboutProfile from './AboutProfile'
import ButtonActions from './ButtonAction'

//import MyVideo from './MyVideo'

import { ProfileContext } from '../../context/ProfileContext';

import HowItWork from './HowItWotk';

class Profile extends Component {

    static contextType = ProfileContext

    render() {    
        
        const {
            name,   
            about_me,
            //banner,
            history,            
            proudest_career, 
            uuid
        } = this.context

        return (

            <>
                <Header Title={"Hi there! i'm "+ name } BGimage={"/images/ProfileBanner.jpg"}/>

                <section className="ProfileContentWrap pb-5">
                    <Container>
                        <Row>
                            <Col className="mb-5">  

                                <ProfileInfo/>

                            </Col>

                            <ButtonActions uuid={uuid}/>
                        
                            <Col md={12} className="mb-4">

                                {about_me ?
                                    <>
                                        <AboutProfile
                                            title ='About me'
                                            content ={about_me}
                                        />                                        
                                    </> : ''
                                }

                                {history ?
                                    <AboutProfile
                                        title ='Playing / Coaching History'
                                        content ={history}
                                        type='Playing'
                                    />
                                    : ''
                                }

                                {proudest_career ?
                                    <AboutProfile
                                        title ='Proudest sporting moments in career'
                                        content ={proudest_career}
                                        type='Proudest'
                                        LastItem={true}
                                    />
                                    : ''
                                }
                            </Col>

                            <Col className="text-center">
                                <HowItWork/>
                            </Col>
                        </Row> 
                    </Container> 
                </section> 
                
                {/* <MyVideo /> */}

                <Footer/>
            </>
        );
    }
}

export default Profile;
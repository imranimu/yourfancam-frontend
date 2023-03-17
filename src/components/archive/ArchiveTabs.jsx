import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container , Row, Col } from 'reactstrap';

import 'react-tabs/style/react-tabs.css';

import classes from './styles/ArchiveTabs.module.css'
import AuthServices from '../../services/AuthServices';

//import AthletesDashboard from './Athlete/dashboard/AthletesDashboard'
import AthletesConversations from './Athlete/conversations/Conversations'
import AthletesVideoGallery from './Athlete/videoGallery/VideoGallery'
import AthletesAccount from './Athlete/account/AthletesAccount'

//import FanDashboard from './Fans/dashboard/dashboard'
import FanConversations from './Fans/conversations/Conversations'
import FanVideoGallery from './Fans/videoGallery/VideoGallery'
//import FavoriteAthletes from './Fans/favoriteAthletes/FavoriteAthletes'
import FanAccount from './Fans/account/FanAccount'
import ConversationContextProvider from '../../context/ConversationContext';
import Notifications from './elements/Notifications';
import MessageContextProvider from '../../context/MessageContext';


class AchiveTabs extends Component {
    
    constructor() {
        super(); 
        this.state = {   
            Fan: false,               
            designation: '',
        };        
    }

    componentDidMount() { 
        
        const user = AuthServices.getUser();       
        
        if(user){

            const designation = user.role; 

            if(designation === 'Fan'){

                this.setState({Fan: true});    

            }
        }
        
    }

    render() { 

        return (
            <> 
                <section className={['pb-2 ', classes.ArchiveTabsWrap].join(' ')}>
                    <Tabs defaultIndex={0}>                        
                        <div className={['CustomTabNav',classes.TabsNavWrap].join(' ')}>
                            <Container className="bigContainer">
                                <Row>
                                    <Col md={12}>
                                        <TabList>
                                            {/* <Tab><i className="fa fa-book"></i> Dashboard</Tab> */}
                                            <Tab><i className="fa fa-comments-o"></i> Messages</Tab>
                                            <Tab><i className="fa fa-file-video-o"></i> Video Gallery</Tab>
                                            <Tab><i className="fa fa-bell"></i> Notifications</Tab>
                                            {/* { this.state.Fan ? <Tab><i className="fa fa-heart"></i> Favorite Athletes</Tab> : ''} */}
                                            <Tab><i className="fa fa-user"></i> My Account</Tab>
                                        </TabList>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <Container className="bigContainer">
                            <Row>
                                <Col md={12}>
                                    {/* <TabPanel>
                                        <ConversationContextProvider>
                                            { this.state.Fan ? <FanDashboard/> : <AthletesDashboard/>}
                                        </ConversationContextProvider>
                                    </TabPanel> */}

                                    <TabPanel>
                                        <ConversationContextProvider>
                                            <MessageContextProvider>
                                                { this.state.Fan ? <FanConversations/> : <AthletesConversations/>}
                                            </MessageContextProvider>
                                        </ConversationContextProvider>
                                    </TabPanel>

                                    <TabPanel>                                        
                                        { this.state.Fan ? <FanVideoGallery/> : <AthletesVideoGallery/>}
                                    </TabPanel>

                                    {/* { this.state.Fan ? <>                                        
                                        <TabPanel>                                        
                                            <FavoriteAthletes/>
                                        </TabPanel> </>
                                    : ''} */}

                                    <TabPanel>                                         
                                        <Notifications/>                                        
                                    </TabPanel>  

                                    <TabPanel>                                         
                                        { this.state.Fan ? <FanAccount/> : <AthletesAccount/>}                                        
                                    </TabPanel>   
                                </Col>                         
                            </Row>
                        </Container>
                    </Tabs>
                </section> 
            </>
        )
    }
}

export default AchiveTabs;


import React, { Component } from 'react';

import Header from '../partial/Header'
import PopularAthletes from './PopularAthletes'; 
import Athletes from './Athletes'
import HowItWorks from './HowItWorks'
import NoticeBoard from './NoticeBoard'
// import DownloadApp from './DownloadApp'
// import VideoGallery from './VideoGallery'
// import SignUp from './SignUp'
import Footer from '../partial/Footer'

import AthletesContextProvider from '../../context/AthletesContext';
import Features from './Features';

export default class componentName extends Component {

    componentDidMount() {

        document.title = "Home || Your fan cam" 

    }

    render() {
        
        return (
            <>
                <Header Pagetype="home"/>                    

                <AthletesContextProvider>

                    <Features/>

                    <PopularAthletes Title="Popular Athletes"/>

                    <Athletes/>

                </AthletesContextProvider>

                <HowItWorks/>

                <NoticeBoard />

                {/* <DownloadApp />

                <VideoGallery />                

                <SignUp /> */}

                <Footer />                
            </>
        );
    }
}

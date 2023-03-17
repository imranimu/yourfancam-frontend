import React, { Component } from 'react';

import Logo from './Logo'

//import Nav from './Nav'

import ProfileInfo from './ProfileInfo'

import { Container , Row } from 'reactstrap';

import classes from './styles/Header.module.css';

import SliderBanner from './SliderBanner'

import ProfileInfoContextProvider from '../../context/ProfileInfoContext';
import SignupContextProvider from '../../context/SignupContext';



export default class Header extends Component {
  render() {
    return (
        <ProfileInfoContextProvider>
            <header id={classes.headerWrap}>  
                <div className={classes.MainHeaderWrap}>
                    <Container className="w-100">  
                        <Row>                        
                            <Logo/>                             

                            {/* <Nav/> */}
                            <SignupContextProvider>
                                <ProfileInfo/>
                            </SignupContextProvider>
                            
                        </Row>                
                    </Container> 	
                </div>

                {this.props.BannerHide ? 
                <>
                    <section className={classes.BannerLessHeader}></section>
                </> :
                    <SliderBanner title={this.props.Title} BGimage={this.props.BGimage} Pagetype={this.props.Pagetype} />
                }         
            </header>
        </ProfileInfoContextProvider>
    );
  }
}

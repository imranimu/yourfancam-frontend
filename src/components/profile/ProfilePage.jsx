import React, { Component } from 'react';
import ProfileContextProvider from '../../context/ProfileContext';
import { withRouter } from "react-router";

import Profile from './Profile';

 class ProfilePage extends Component {   

    render() {

        return (
            <ProfileContextProvider uuid={this.props}>

                <Profile/>

            </ProfileContextProvider>
        );
    }
}

export default withRouter(ProfilePage);
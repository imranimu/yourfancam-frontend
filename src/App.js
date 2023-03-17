import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/home/Home';

import Profile from './components/profile/ProfilePage'
import Archive from './components/archive/Archive'
import SendVideo from './components/videos/sendVideo'
import BlankPage from './components/404Page'

import './App.css';
import './responsive.css'

import PrivateRoute from './services/PrivateRoute';
import AuthContextProvider from './context/AuthContext';
import SendVideoContextProvider from './context/SendVideoContext';

class App extends Component {
  render() {
    return (
        <>
            <div id="wrapper">
                <AuthContextProvider>
                    <Router>    
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/profile/:id" component={Profile} />                        
                            <PrivateRoute path="/my-profile" component={Archive} />
                            <SendVideoContextProvider>
                                <PrivateRoute path="/videosend" component={SendVideo} />
                            </SendVideoContextProvider>
                            <Route component={BlankPage} />
                        </Switch>
                    </Router>
                </AuthContextProvider>
            </div>
        </>
    );
  }
}

export default App;
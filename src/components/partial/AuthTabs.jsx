import React, { useState } from 'react';

import {     
    TabContent, TabPane, Nav, NavItem, NavLink,  
    Row, Col, 
} from 'reactstrap';

import classnames from 'classnames';

import LoginForm from '../auth/LoginForm'
// import SignUpForm from '../auth/SignUpForm'
// import FanSignupContextProvider from '../../context/FanSignupContext';

const AuthFormTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs className="moduleTabNav">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <i className="fa fa-user"> </i>Sing In
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <i className="fa fa-sign-in"> </i>Sign Up
          </NavLink>
        </NavItem> */}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">                
                <LoginForm />                 
            </Col>
          </Row>
        </TabPane>
        {/* <TabPane tabId="2">
            <Row>                 
                <Col md={12}> 
                    <FanSignupContextProvider>
                      <SignUpForm/>  
                    </FanSignupContextProvider>
                </Col>
            </Row>
        </TabPane> */}
      </TabContent>
    </div>
  );
}

export default AuthFormTab;

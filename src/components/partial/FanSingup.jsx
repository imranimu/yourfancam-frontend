import React, { Component } from 'react';

import {Link } from "react-router-dom"

import {     
  Modal, ModalHeader, ModalBody
} from 'reactstrap';
import FanSignupContextProvider from '../../context/FanSignupContext';

import SignUpForm from '../auth/SignUpForm';

class FanSingup extends Component {   

  constructor(props) {
    super(props);     
    this.state = {   
        FansModal: false,
        login: false, 
        isOpen: false,
        Mentee: false,             
        token: '',  
        name: '',
        designation: '',
    };        
  }  

  toggleFans = () => {        
    this.setState({ 
        FansModal: !this.state.FansModal
    });
  };

  render() {    

    const FansCloseBtn = <button className="close" onClick={this.toggleFans}>&times;</button>;

    return (
      <>
        <Link to={"#"} onClick={this.toggleFans}>Sign up as Fan</Link>

        <Modal isOpen={this.state.FansModal} toggle={this.toggleFans} className="CustomModalBox">

          <ModalHeader toggle={this.toggleFans} close={FansCloseBtn}><i className="fa fa-sign-in"> </i> Sign up as Fan</ModalHeader>

          <ModalBody>  

            {/* <SignUpFansForm/> */}
            <FanSignupContextProvider>
                <SignUpForm/>
            </FanSignupContextProvider>

          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default FanSingup;
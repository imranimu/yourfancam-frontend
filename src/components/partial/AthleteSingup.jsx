import React, { Component } from 'react';

//import Auth from '../../services/auth'

import {Link } from "react-router-dom"

import SignUpAthletesForm from '../auth/SignUpAthletesForm'

import {     
  Modal, ModalHeader, ModalBody
} from 'reactstrap';

class AthleteSingup extends Component {   

  constructor(props) {
    super(props);     
    this.state = {   
        AthletesModal: false,
        login: false, 
        isOpen: false,
        Mentee: false,             
        token: '',  
        name: '',
        designation: '',
    };        
  }  

  toggleAthletes = () => {        
    this.setState({ 
        AthletesModal: !this.state.AthletesModal
    });
  };

  render() {    

    const AthletesCloseBtn = <button className="close" onClick={this.toggleAthletes}>&times;</button>;

    return (
      <>
        <Link to={"#"} onClick={this.toggleAthletes}>Sign up as Athlete or Coach</Link>

        <Modal isOpen={this.state.AthletesModal} toggle={this.toggleAthletes} className="CustomModalBox">

          <ModalHeader toggle={this.toggleAthletes} close={AthletesCloseBtn}><i className="fa fa-sign-in"> </i> Sign up as Athlete or Coach</ModalHeader>

          <ModalBody>  

            <SignUpAthletesForm/>

          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default AthleteSingup;
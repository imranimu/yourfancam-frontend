import React, { Component } from 'react';


import Auth from '../../services/auth'

import {Link } from "react-router-dom"

import SignUpAthletesForm from '../auth/SignUpAthletesForm'

import {     
  Modal, ModalHeader, ModalBody
} from 'reactstrap';

class Nav extends Component {   

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

  componentDidMount() {    
    
    const user = Auth.getUser();    
    if(user){
      var userName = user.first_name + ' ' + user.last_name;    

      if( userName && user.role ){
        this.setState({login: true });
      }
    }
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
        <div className="header_center">            
            <ul className="mainMenu">
                {/* <li><Link to={"/"}>Home</Link></li> 
                <li><Link to={"#"}>How it work </Link></li>
                <li><Link to={"#"}>Contact</Link></li>
                <li><Link to={"#"}>Download app</Link></li> */}
                {this.state.login ? '' : 
                  <li><Link to={"#"} onClick={this.toggleAthletes}>Sign Up as Athlete</Link></li>
                }                                
            </ul>
        </div>

        <Modal isOpen={this.state.AthletesModal} toggle={this.toggleAthletes} className="CustomModalBox">

          <ModalHeader toggle={this.toggleAthletes} close={AthletesCloseBtn}><i className="fa fa-sign-in"> </i> Sign Up as Athlete</ModalHeader>

          <ModalBody>  

            <SignUpAthletesForm/>

          </ModalBody>
      </Modal>
      </>
    );
  }
}
export default Nav;
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import HowItWorks from '../home/HowItWorks'

import {     
    Modal,  ModalBody    
} from 'reactstrap';

export default class HowItWork extends Component {

    constructor() {
        super();  
        this.state = {             
            modal : false,   
        };         
    } 

    toggle = () => {        
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        return (
            <>
                <div className="columnBox noColor mr-0">
                    <Link onClick={this.toggle} to={"#"} className="btn btn-primary CustomButton">
                        <img src="/images/icons/how-it-work.png" alt="" className="mr-3"/> 
                        <span>How does it work?</span>
                    </Link>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="CustomModalBox BigPopup">
                    <ModalBody>

                        <button className="close" onClick={this.toggle}>&times;</button>

                        <HowItWorks/>
                        
                    </ModalBody>                            
                </Modal>
            </>
        );
    }
}

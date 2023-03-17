import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import {     
    Modal,  ModalBody    
} from 'reactstrap';

import Payment from './payment/Payment'

//import MessageForm from './MessageForm'
import SendMessageContextProvider from '../../context/SendMessageContext';

import { ProfileContext } from '../../context/ProfileContext';
import SelfiForm from './SelfeForm';
import MessageContextProvider from '../../context/MessageContext';

export default class SendSelfiMessage extends Component {

    static contextType = ProfileContext

    constructor() {
        super();  
        this.state = {             
            modal : false,  
            MessageModal: false,  
            paymentStatus: false, 
        };         
    }      

    toggle = () => {        
        this.setState({
            modal: !this.state.modal,
        });
    };

    Messagetoggle = () => {        
        this.setState({
            MessageModal: !this.state.MessageModal,
        });
    };

    PopupCallback = (props)  =>{        
        if(props){
            this.setState({ 
                modal: !this.state.modal,
                MessageModal: !this.state.MessageModal
            })

            document.body.classList.add('pr-0');
        }
    }   

    SendStatus = ( status ) =>{
        if(status){
            this.setState({                 
                MessageModal: false
            })
            document.body.classList.add('pr-0');
        }
    }

    render() {
        const {            
            text_selfi_price
        } = this.context
        return (
            <>
                <div className="columnBoxButton">
                    
                    <Link to={"#"} onClick={this.Messagetoggle} className="btn btn-primary CustomButton purple">
                        <img src="/images/icons/send-video.png" alt=""/> 
                        <span>SEND SELFIE+TEXT </span>
                        {text_selfi_price ? <span className="AthletePrice">${text_selfi_price}</span>: ''}  
                    </Link>

                    {/* {this.state.paymentStatus ?
                        <Link to={"#"} onClick={this.Messagetoggle} className="btn btn-primary CustomButton purple">
                            <img src="/images/icons/send-video.png" alt=""/> 
                            <span>SEND SELFIE+TEXT </span>
                        </Link> : 
                        <Link to={"#"} onClick={this.toggle} className="btn btn-primary CustomButton purple">
                            <img src="/images/icons/send-video.png" alt=""/> 
                            <span>SEND SELFIE+TEXT </span>
                        </Link>
                    } */}
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="MessagePopup PaymentPopup">
                    <ModalBody>

                        <button className="close" onClick={this.toggle}>&times;</button>

                        <Payment uuid={this.props.uuid} paymentFor="chat" callback={this.PopupCallback} />
                        
                    </ModalBody>                            
                </Modal>

                <Modal isOpen={this.state.MessageModal} toggle={this.Messagetoggle} className="MessagePopup BigTop">

                    <ModalBody>

                        <button className="close" onClick={this.Messagetoggle}>&times;</button>                        

                        <SendMessageContextProvider>
                            <MessageContextProvider>
                                <SelfiForm uuid={this.props.uuid} paymentFor="selfe"/>
                            </MessageContextProvider>
                        </SendMessageContextProvider> 
                        
                    </ModalBody>           

                </Modal>                
            </>
        );
    }
}

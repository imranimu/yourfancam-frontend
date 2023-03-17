import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import {     
    Modal,  ModalBody    
} from 'reactstrap';

//import Payment from './payment/Payment'

import MessageForm from './MessageForm'
import SendMessageContextProvider from '../../context/SendMessageContext';
import { ProfileContext } from '../../context/ProfileContext';


export default class SendMessage extends Component {

    static contextType = ProfileContext

    constructor() {
        super();  
        this.state = {             
            modal : false,  
            MessageModal: false,  
            paymentStatus: false, 
        };         
    }      
    
    Messagetoggle = () => {        
        this.setState({
            MessageModal: !this.state.MessageModal,
        });
        document.body.classList.add('pr-0');
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
            chat_price
        } = this.context
        return (
            <>
                <div className="columnBoxButton">
                    <Link to={"#"} onClick={this.Messagetoggle} className="btn btn-primary CustomButton purple">
                        <img src="/images/icons/send-message.png" alt=""/> 
                        <span>Send Message</span> 
                        {chat_price ? <span className="AthletePrice">${chat_price}</span>: ''}  
                    </Link>                     
                </div>

                <Modal isOpen={this.state.MessageModal} toggle={this.Messagetoggle} className="MessagePopup BigTop">
                    <ModalBody>

                        <button className="close" onClick={this.Messagetoggle}>&times;</button>

                        <SendMessageContextProvider>

                            <MessageForm uuid={this.props.uuid} type="chat" SendStatus={this.SendStatus}/>
                            
                        </SendMessageContextProvider>
                        
                    </ModalBody>           

                </Modal>                
            </>
        );
    }
}

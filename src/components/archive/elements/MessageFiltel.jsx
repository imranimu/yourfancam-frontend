import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MessageContext } from '../../../context/MessageContext';

import {     
    Modal,  ModalBody    
} from 'reactstrap';
import MessageForm from '../../profile/MessageForm';
import SendMessageContextProvider from '../../../context/SendMessageContext';
import SelfiForm from '../../profile/SelfeForm';
import ModalVideo from './ModalVideo';

export default class MessageFilter extends Component {

    static contextType = MessageContext

    render() {
        
        const { 
            modalSelfi, 
            modalMessage,            
            toggleSelfi,
            toggleMessage            
        } = this.context

        return (
            <>
            <div className="MessageItem">

                <ModalVideo uuid={this.props.uuid}/>

                <span className="mr-4"> 
                    <Link to={"#"} onClick={toggleSelfi}> 
                        {modalSelfi ? <img src="/images/icons/selfie-r.png" alt=""/> : <img src="/images/icons/selfie.png" alt=""/>}                        
                    </Link>
                </span>
                <span>
                    <Link to={"#"} onClick={toggleMessage}> 
                        {modalMessage ? <img src="/images/icons/mail-r.png" alt=""/> : <img src="/images/icons/mail.png" alt=""/>}                        
                    </Link>
                </span>
            </div>            

            <Modal isOpen={modalSelfi} toggle={toggleSelfi} className="MessagePopup SendSelfiVideo">
                <ModalBody>
                    
                    <button className="close" onClick={toggleSelfi}>&times;</button>                                 

                    <SendMessageContextProvider>
                        <SelfiForm uuid={this.props.uuid} type="chat" SendStatus={this.SendStatus}/>
                    </SendMessageContextProvider>                       
                    
                </ModalBody>                            
            </Modal>

            <Modal isOpen={modalMessage} toggle={toggleMessage} className="MessagePopup SendMessageVideo">
                <ModalBody>
                    
                    <button className="close" onClick={toggleMessage}>&times;</button>
                    
                    <SendMessageContextProvider>
                        {/* <MessageForm uuid={this.props.uuid} paymentFor="chat"/> */}
                        <MessageForm uuid={this.props.uuid} type="chat" SendStatus={this.SendStatus}/>
                    </SendMessageContextProvider>         
                    
                </ModalBody>                            
            </Modal>

            </>
        );
    }
}


import React, { Component } from 'react';
import {     
    Modal,  ModalBody, Spinner,
    Form, FormGroup, Input, Button
} from 'reactstrap';
//import {Link} from 'react-router-dom' 
import { SendMessageContext } from '../../context/SendMessageContext';
import UploadImage from './UploadImage';
import PaymentInfo from './payment/Payment';

export default class SelfiForm extends Component {

    static contextType = SendMessageContext     

    render() {

        const {
            MessageSendBox,
            Loader,
            WrongMassage,            
            SendMessageFormSubmit,            
            MessageHandler,
            CloseToggle, 
        } = this.context

        return (
            <>

            <div className="MessageWrap"> 

                <Form onSubmit={SendMessageFormSubmit}>           

                    <FormGroup className="mb-3">

                        <UploadImage/>
                         
                        <Input type="textarea" name="Message" placeholder="Message body" onChange={MessageHandler} />

                    </FormGroup>

                    {WrongMassage ? <p className="text-danger">{WrongMassage}</p> : ''}   

                    <div className="position-relative FormButtonWrap">

                        <Button className="FormSubmitButton">Pay &amp; Send</Button>                   

                        {Loader ? (
                            <div className="LoadingIcon Spinner">                               
                                <Spinner color={"success"} />
                            </div>
                        ) : ( '' )}

                    </div>
                </Form>     
            </div>

            <Modal isOpen={MessageSendBox} toggle={CloseToggle} className="CustomModalBox PaymentPopup">

                <ModalBody>

                    <button className="close" onClick={CloseToggle}>&times;</button>  

                    <PaymentInfo uuid={this.props.uuid} paymentFor={this.props.paymentFor}/>

                </ModalBody>

            </Modal>
            </>
        );
    }
}

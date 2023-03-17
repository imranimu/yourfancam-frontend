import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Spinner from '../../partial/Spinner'
import SweetAlert from 'react-bootstrap-sweetalert';
import { PaymentContext } from '../../../context/PaymentContext';

export default class PaypalPayment extends Component {

    static contextType = PaymentContext    

    render() {
        const {PaymentFormSubmit, EmailHandler, Loader, WrongMassage, ShowSweetAlert, CallSuccessAlert} = this.context
        return (
            <>
            <Form onSubmit={PaymentFormSubmit}>           

                <FormGroup className="mb-3">
                    <Label for="Email" className="mr-sm-2">Email</Label>
                    <span className="input-group-addon"><i className="fa fa-paypal"></i></span>
                    <Input type="email" name="Email" placeholder="Email" onChange={EmailHandler} />
                </FormGroup>

                <p className="paymentInfoText">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                {WrongMassage ? <p className="text-danger">{WrongMassage}</p> : ''}   

                <div className="position-relative FormButtonWrap">

                    <Button className="CustomButton">Pay Now</Button>                   

                    {Loader ? (
                        <div className="LoadingIcon Spinner">
                            {/* <img src="/images/loader.svg" alt="Loading Image"/> */}
                            <Spinner color={"success"} />
                        </div>
                    ) : ( '' )}
                    
                </div>

            </Form>

            <SweetAlert 
                show={ShowSweetAlert}
                success 
                title="God Job!" 
                onConfirm={CallSuccessAlert}>
                Your payment is Successful.
            </SweetAlert>  
            </>
        );
    }
}

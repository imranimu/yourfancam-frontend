import React, { Component } from 'react';

import {Form, Row, Col, Label, Input, Button } from 'reactstrap'

import Spinner from '../../partial/Spinner'

import SweetAlert from 'react-bootstrap-sweetalert';

import { PaymentContext } from '../../../context/PaymentContext';

export default class Password extends Component {

    static contextType = PaymentContext     

    render() {

        const {
            PaymentFormSubmit,             
            CardnumberHandler,
            ExpirationMonthHandler, 
            //ExpirationYearHandler,
            CVCHandler,
            Loader, 
            WrongMassage, 
            ShowSweetAlert, 
            CallSuccessAlert
        } = this.context

        return (
            <>    
                <Form onSubmit={ PaymentFormSubmit }>                      
                    <Row>
                        <Col md={12} className="mb-3 InputWrap">                            
                            <Row>
                                <Col md={5}><Label for="CardNumber" className="mr-sm-2">Name Holder Name</Label></Col>
                                <Col md={7}><Input className="text-right" name="CardNumber" placeholder="Jason Bourne" onChange={CardnumberHandler}/></Col>
                            </Row>
                        </Col>

                        <Col md={12} className="mb-3 InputWrap">                             
                            <Row>
                                <Col md={5}><Label for="CardNumber" className="mr-sm-2">Card Number</Label></Col>
                                <Col md={7}><Input className="text-right" name="CardNumber" placeholder="4111 555 2222 0088" onChange={CardnumberHandler}/></Col>
                            </Row>
                        </Col>                        

                        <Col md={8} className="mb-3">
                            <Row>
                                <Col md={6}><Label for="Expiration" className="mr-sm-2">Expiration Date</Label></Col>
                                <Col md={6}><Input name="Expiration" placeholder="MM / YY" onChange={ExpirationMonthHandler}/></Col>
                            </Row>                             
                        </Col>                          

                        <Col md={4} className="mb-3">                             
                            <Row>
                                <Col md={3}><Label for="CVC" className="mr-sm-2">CVC</Label></Col>
                                <Col md={9}><Input name="CVC" placeholder="123" onChange={CVCHandler}/></Col>
                            </Row>
                        </Col>
                    </Row>                       

                    {WrongMassage ? <p className="text-danger">{WrongMassage}</p> : ''}   

                    <div className="position-relative FormButtonWrap">

                        <Button className="CustomButton">Pay Now</Button>  

                        {/* <Button className="CustomButton">Cancel</Button> */}

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

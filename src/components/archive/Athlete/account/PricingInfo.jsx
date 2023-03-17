import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

import SweetAlert from 'react-bootstrap-sweetalert';

import LoadingIcon from '../../../partial/LoadingIcon'

import { AthletesAccountContext } from '../../../../context/AthletesAccountContext';
import { Link } from 'react-router-dom';

export default class EditProfile extends Component {

    static contextType = AthletesAccountContext     

    render() { 
        
        const {
            credentials, 
            Loader, 
            WrongMassage,
            ShowSweetAlert, 
            handleFormSubmit,
            chatPriceHandler,
            SelfiPriceHandler,
            videoPriceHandler,
            CallSuccessAlert,
            TearmsCondition,
            TearmsConditionHandaler
        } = this.context

        return (
            <>            
                <Form onSubmit={handleFormSubmit} >  
                    <Row>                                          
                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label for="chat_price" className="mr-sm-2">Chat Price</Label>
                                <span className="input-group-addon"><i className="fa fa-usd"></i></span>
                                <Input name="chat_price" placeholder="0" onChange={chatPriceHandler} value={credentials.chat_price} />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label for="chat_price" className="mr-sm-2">Selfi+Text Price</Label>
                                <span className="input-group-addon"><i className="fa fa-usd"></i></span>
                                <Input name="chat_price" onChange={SelfiPriceHandler} value={credentials.text_selfi_price} placeholder="0"/>
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label for="video_price" className="mr-sm-2">Video Price</Label>
                                <span className="input-group-addon"><i className="fa fa-usd"></i></span>
                                <Input name="video_price" placeholder="0" onChange={videoPriceHandler} value={credentials.video_price}/>
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup row>                                
                                <Col sm={{ size: 10 }}>
                                    <FormGroup check>
                                        <Label check> 
                                            <Input onChange={TearmsConditionHandaler} type="checkbox"/>{' '}<Link to={"#"}>Terms &amp; Conditions</Link></Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                        </Col>

                    </Row>                                                            

                    {WrongMassage ? 
                        <p className="text-danger">{WrongMassage}</p> : ''
                    }

                    <div className="ButtonWrap position-relative d-inline-block mt-3">

                        {TearmsCondition ? 
                            <button className="btn btn-primary CustomButton mt-2 mr-0">Save Changes</button> : 
                            <button disabled className="btn btn-primary CustomButton mt-2 mr-0">Save Changes</button>
                        }                        

                        {/* <button to={"#"} className="btn btn-primary CustomButton CustomButtonCancel">Cancel</button>    */}

                        {Loader ? (
                            <div className="LoadingIcon">
                                <LoadingIcon/>
                            </div>
                        ) : ( '' )} 
                    </div>
                </Form>

                <SweetAlert 
                    show={ShowSweetAlert}
                    success 
                    title="Good job!" 
                    onConfirm={CallSuccessAlert}>
                    Account edit successfully.
                </SweetAlert>
            </>
        );
    }
}

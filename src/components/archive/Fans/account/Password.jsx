import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap' 

import SweetAlert from 'react-bootstrap-sweetalert';

import LoadingIcon from '../../../partial/LoadingIcon'

import { ChangePassword } from '../../../../context/ChangePasswordContext';

export default class Password extends Component {

    static contextType = ChangePassword    

    render() {

        const {            
            handleFormSubmit,
            PasswordHandler, 
            NewPasswordHandler, 
            confirmPassworddHandler, 
            WrongMassage,
            Loader, 
            ShowSweetAlert,
            CallSuccessAlert,
        } = this.context;        

        return (
            <>  
                <Form onSubmit={handleFormSubmit}>
                    <Row>                                      
                        <Col md={12}>                            
                            <FormGroup className="mb-3">
                                <Label for="Email" className="mr-sm-2">Email</Label>
                                <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                                <Input type="email" name="Email" placeholder="Email" readOnly value={this.props.userMail}/>
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label for="OldPassword" className="mr-sm-2">Current Password</Label>
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <Input type="password" name="OldPassword" placeholder="Current Password" onChange={PasswordHandler}/>
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label for="NewPassword" className="mr-sm-2">New Password</Label>
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <Input type="password" name="NewPassword" placeholder="New Password" onChange={NewPasswordHandler}/>
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup className="mb-3">
                                <Label for="ConfirmPassword" className="mr-sm-2">Confirm Password</Label>
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <Input type="password" name="ConfirmPassword" placeholder="Confirm Password" onChange={confirmPassworddHandler}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    {WrongMassage ? 
                        <p className="text-danger">{WrongMassage}</p> : ''
                    }

                    <div className="ButtonWrap position-relative d-inline-block mt-3">

                        <button className="btn btn-primary CustomButton mt-2 mr-0">Save Changes</button>
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
                    Password Changed successfully.
                </SweetAlert>    
            </>
        );
    }
}

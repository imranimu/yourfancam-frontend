import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import SweetAlert from 'react-bootstrap-sweetalert';

import LoadingIcon from '../partial/LoadingIcon'

import {         
    Row, Col,
    Form, FormGroup, Input, Button    
} from 'reactstrap';

import { FanSignupContext } from '../../context/FanSignupContext';

class SignUpForm extends Component {

    static contextType = FanSignupContext

    render() {

        const {
            WrongMassage,
            Loader,
            ShowSweetAlert,
            handleSingup,
            FirstNameHandler,
            LastNameHandler,
            emailHandler,
            PasswordHandler,
            confirmPassworddHandler, 
            togglePasswordVisiblity,
            passwordShown,
            CallSuccessAlert 
        } = this.context

        return (
            <>
            <Form onSubmit={ handleSingup }>            
                <Row>                                          
                    <Col md={12}>
                        <FormGroup className="mb-4">
                            {/* <Label for="FirstName" className="mr-sm-2">First Name</Label> */}
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <Input name="FirstName" placeholder="First Name" onChange={FirstNameHandler} />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup className="mb-4">
                            {/* <Label for="LastName" className="mr-sm-2">Last Name</Label> */}
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <Input name="LastName" placeholder="Last Name" onChange={LastNameHandler}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className="mb-4">
                    {/* <Label for="SEmail" className="mr-sm-2">Email</Label> */}
                    <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                    <Input type="email" name="Semail" placeholder="something@idk.cool" onChange={ emailHandler} />
                </FormGroup>

                <FormGroup className="mb-4">
                    {/* <Label for="SPassword" className="mr-sm-2">Password</Label> */}
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <Input type={passwordShown ? "text" : "password"} name="Spassword" placeholder="Password" onChange={ PasswordHandler} />
                    <div className="ShowHidePass">
                        <i onClick={togglePasswordVisiblity} className={passwordShown ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                    </div>
                </FormGroup>                                            
                <FormGroup className="mb-5">
                    {/* <Label for="ConfirmPassword" className="mr-sm-2">Confirm Password</Label> */}
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <Input type="password" name="Confirmpassword" placeholder="Confirm Password" onChange={ confirmPassworddHandler} />
                </FormGroup>    

                {WrongMassage ? <p className="text-danger">{WrongMassage}</p> : ''}  

                <div className="position-relative FormButtonWrap">

                    <Button className="FormSubmitButton">Sign Up</Button>

                    {Loader ? (
                        <div className="LoadingIcon">
                            <LoadingIcon/>
                        </div>
                    ) : ( '' )}

                </div>

                <SweetAlert 
                    show={ShowSweetAlert}
                    success 
                    title="Welcome to the Family" 
                    onConfirm={CallSuccessAlert}>
                    You are now successfully regestered. Please Login to continue.
                </SweetAlert>
            </Form>
            </>
        );
    }
}

export default withRouter(SignUpForm);
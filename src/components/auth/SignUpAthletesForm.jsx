import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import SweetAlert from 'react-bootstrap-sweetalert'; 
import {Link} from 'react-router-dom'
import LoadingIcon from '../partial/LoadingIcon'

import {         
    Form, FormGroup, Input, Button,
    Row, Col,    
} from 'reactstrap';

import { SignupContext } from '../../context/SignupContext';
import UploadAthleteVideo from '../videos/AthleteVideoUpload';

class SignUpForm extends Component {   

    static contextType = SignupContext      

    render() {

        const {
            credentials,
            WrongMassage,
            Loader,
            ShowSweetAlert,
            categories,
            handleSingup,
            FirstNameHandler,
            LastNameHandler,
            emailHandler,
            PasswordHandler,
            confirmPassworddHandler, 
            currentStatusHandler,
            togglePasswordVisiblity,
            passwordShown,
            FirstStep,            
            VideoUpload, 
            FinalStep,
            AthleteVideoUpload,
            AthleteFinalStep,
            VideoFileName,
            VideoUploadStatusCallback,
            SportHandler,
            CallSuccessAlert            
        } = this.context

        return (
            <>
            {FirstStep ? <>
            <Form onSubmit={ handleSingup }>                   
                
                <Row>                                          
                    <Col md={12}>
                        <FormGroup className="mb-4">
                            {/* <Label for="FAName" className="mr-sm-2">First Name</Label> */}
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <Input name="FAName" placeholder="First Name" onChange={FirstNameHandler} value={credentials.first_name} />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup className="mb-4">
                            {/* <Label for="LAName" className="mr-sm-2">Last Name</Label> */}
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <Input name="LAName" placeholder="Last Name" onChange={LastNameHandler} value={credentials.last_name}/>
                        </FormGroup>
                    </Col>
                </Row>                

                <Row>
                    <Col md={12}>                        
                        <FormGroup className="mb-4">
                            {/* <Label for="AEmail" className="mr-sm-2">Email</Label> */}
                            <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                            <Input type="email" name="Aemail" placeholder="something@idk.cool" onChange={emailHandler} value={credentials.email}/>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup className="mb-4">
                            {/* <Label for="SportingCode" className="mr-sm-2">Sporting Code</Label> */}
                            <span className="input-group-addon"><i className="fa fa-gamepad"></i></span>
                            <Input type="select" name="SportingCode" className="select" onChange={SportHandler} value={credentials.profession}>
                                <option value="">Sporting Code</option>
                                {categories.map((value, i) => (
                                    <option key={i} value={value.name}>{value.name}</option>
                                ))}  
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                
                <Row>                                          
                    <Col md={12}>
                        <FormGroup className="mb-4">
                            {/* <Label for="CurrentStatus" className="mr-sm-2">Current Status</Label> */}
                            <span className="input-group-addon"><i className="fa fa-check-square-o"></i></span>
                            <Input type="select" name="CurrentStatus" placeholder="Current Status" onChange={currentStatusHandler} value={credentials.current_status}>
                                <option value="">Current Status</option>
                                <option value="Playing">Playing</option>
                                <option value="Coaching">Coaching</option>
                                <option value="Retired">Retired</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    {/* <Col md={12}>
                        <FormGroup className="mb-4">                            
                            <span className="input-group-addon"><i className="fa fa-trophy"></i></span>
                            <Input name="Qualifications" placeholder="Qualifications" onChange={qualificationsHandler}/>
                        </FormGroup>
                    </Col> */}
                </Row>                

                <Row>                                          
                    <Col md={12}>
                        <FormGroup className="mb-4">
                            {/* <Label for="SPassword" className="mr-sm-2">Password</Label> */}
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <Input type={passwordShown ? "text" : "password"} name="Spassword" placeholder="Password" onChange={PasswordHandler} value={credentials.password}/>
                            <div className="ShowHidePass">
                                <i onClick={togglePasswordVisiblity} className={passwordShown ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={12} className="mb-5">

                        <FormGroup>
                            {/* <Label for="ConfirmPassword" className="mr-sm-2">Confirm Password</Label> */}
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <Input type={passwordShown ? "text" : "password"}  name="Confirmpassword" placeholder="Confirm Password" onChange={confirmPassworddHandler} value={credentials.password_confirmation}/>
                            <div className="ShowHidePass">
                                <i onClick={togglePasswordVisiblity} className={passwordShown ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                            </div>
                        </FormGroup>

                        {VideoFileName ? 
                            <div className="text-right text-white mt-3">{VideoFileName}</div> : ''
                        }
                    </Col>                    
                </Row>

                {WrongMassage ? <p className="text-danger">{WrongMassage}</p> : ''}                 

                <div className="position-relative mb-4">

                    {FinalStep ?
                        <Button className="FormSubmitButton">Submit</Button>                        
                        : 
                        <div onClick={AthleteVideoUpload} className="FormSubmitButton SubmitButtonNext">Next</div>
                    }

                    {/* {this.state.FinalStep ? <Button className="FormSubmitButton">Submit</Button> : '' } */}

                    {Loader ? (
                        <div className="LoadingIcon">
                            <LoadingIcon/>
                        </div>
                    ) : ( '' )}

                </div>

                <div className="text-center">
                    <p>Already have an account? <Link to={"#"}>Sign in</Link></p>
                </div>

                <SweetAlert 
                    show={ShowSweetAlert}
                    success 
                    title="Welcome to the Family" 
                    onConfirm={ CallSuccessAlert }>
                    You are now successfully regestered. Please Login to continue.
                </SweetAlert>

            </Form>
            </>
            :
            '' 
            }

            {VideoUpload ? 
                <>

                <UploadAthleteVideo callback={VideoUploadStatusCallback}/> 

                {WrongMassage ? <p className="text-danger">{WrongMassage}</p> : ''}

                <div className="position-relative mb-3">
                    
                    {Loader ? (
                        <div className="LoadingIcon">
                            <LoadingIcon/>
                        </div>
                    ) : ( '' )}

                    <div onClick={AthleteFinalStep} className="FormSubmitButton SubmitButtonNext">Next</div>
                </div>
                </>
                : ''
            }
            

            </>
        );
    }
}

export default withRouter(SignUpForm);
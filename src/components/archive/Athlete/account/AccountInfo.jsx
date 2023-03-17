import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

import SweetAlert from 'react-bootstrap-sweetalert';

import LoadingIcon from '../../../partial/LoadingIcon'

import { AthletesAccountContext } from '../../../../context/AthletesAccountContext';

import Avatar from '../../../partial/Avatar';

export default class EditProfile extends Component {

    static contextType = AthletesAccountContext     

    render() {   
                
        const {
            credentials, 
            Loader, 
            WrongMassage,
            ShowSweetAlert,
            avatarUpload,
            AvatarChangedHandler,
            UploadAvatarImage,
            categories,
            handleFormSubmit,
            emailNameHandler,
            SportHandler,
            currentStatusHandler,
            qualificationsHandler, 
            CallSuccessAlert
        } = this.context

        return (
            <>            
                <Form  onSubmit={handleFormSubmit}>  

                    <Row>   
                        <Col md={12} className="mb-4">
                            <div className="UploadInputImage UploadInputImageProfile position-relative">
                                                                
                                { credentials.avatar ? <Avatar src={credentials.avatar} size={160}/> : <Avatar size={160}/> }                                

                                <input type="file" id="ImageUpload" onChange={AvatarChangedHandler} accept="image/x-png,image/gif,image/jpeg"/>
                                <label for="ImageUpload" className="">                                    
                                    <p className="UploadImage"> <i className="fa fa-camera" aria-hidden="true"></i></p>
                                </label>
                            </div>
                            
                            {avatarUpload ? <span onClick={UploadAvatarImage} className="btn btn-info">Save</span> : ''}
                            
                        </Col>

                        <Col md={6}>
                            <FormGroup className="mb-3">
                                <Label for="AEmail" className="mr-sm-2">Email</Label>
                                <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                                <Input type="email" name="Aemail" placeholder="something@idk.cool" readOnly onChange={emailNameHandler} value={credentials.email}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="mb-3">
                                <Label for="SportingCode" className="mr-sm-2">Sporting Code</Label>
                                <span className="input-group-addon"><i className="fa fa-gamepad"></i></span>
                                <Input type="select" name="SportingCode" onChange={SportHandler} value={credentials.category_id}>
                                    <option value="">Select One</option>
                                    {categories.map((value, i) => (
                                        <option key={i} value={value.id}>{value.name}</option>
                                    ))}                                     
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>                       
                    
                    <Row>                                          
                        <Col md={6}>
                            <FormGroup className="mb-3">
                                <Label for="CurrentStatus" className="mr-sm-2">Current Status</Label>
                                <span className="input-group-addon"><i className="fa fa-check-square-o"></i></span>
                                <Input type="select" name="CurrentStatus" placeholder="Current Status" onChange={currentStatusHandler} value={credentials.playing_status}>
                                    <option value="">Select One</option>
                                    <option value="Currently Playing">Currently Playing</option>
                                    <option value="Retired">Retired</option> 
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="mb-3">
                                <Label for="Qualifications" className="mr-sm-2">Qualifications</Label>
                                <span className="input-group-addon"><i className="fa fa-trophy"></i></span>
                                <Input name="Qualifications" placeholder="Qualifications" onChange={qualificationsHandler} value={credentials.qualifications}/>
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
                                <LoadingIcon />
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

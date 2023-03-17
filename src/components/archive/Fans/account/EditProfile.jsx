import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import SweetAlert from 'react-bootstrap-sweetalert';

import LoadingIcon from '../../../partial/LoadingIcon'
import { FanAccountContext } from '../../../../context/FanAccountContext';

import Avatar from '../../../partial/Avatar'

export default class EditProfile extends Component {

    static contextType = FanAccountContext     

    render() {

        const {
            credentials, 
            Loader, 
            WrongMassage,
            ShowSweetAlert,
            handleFormSubmit,
            avatarUpload,
            AvatarChangedHandler,
            UploadAvatarImage,
            FirstNameHandler,
            LastNameHandler,
            emailNameHandler,
            //LanguageHandler,
            CountryHandler,
            CallSuccessAlert
        } = this.context

        return (
            <>            
                <Form onSubmit={handleFormSubmit}>
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
                                <Label for="FAName" className="mr-sm-2">First Name</Label>        
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>                        
                                <Input name="FAName" placeholder="First Name" onChange={FirstNameHandler} value={credentials.first_name} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="mb-3">
                                <Label for="LAName" className="mr-sm-2">Last Name</Label>        
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>                        
                                <Input name="LAName" placeholder="Last Name" onChange={LastNameHandler} value={credentials.last_name}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <FormGroup>
                        <Label for="YourName">Your Email</Label>
                        <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                        <Input type="email" name="YourEmail" placeholder="Your Email" readOnly onChange={emailNameHandler} value={credentials.email}/>
                    </FormGroup>

                    {/* <FormGroup>
                        <Label for="Language">Language</Label>
                        <span className="input-group-addon"><i className="fa fa-language"></i></span>
                        <Input type="select" name="Language" placeholder="Language" onChange={LanguageHandler} value={credentials.language}>
                            <option value="">Select Language</option>
                            <option value="English">English</option>
                            <option value="Dutch">Dutch</option>
                            <option value="Hawaiian">Hawaiian</option>
                            <option value="French">French</option>
                        </Input>
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="Location">Location</Label>
                        <span className="input-group-addon"><i className="fa fa-map-marker"></i></span>
                        <Input type="select" name="Location" placeholder="Location" onChange={CountryHandler} value={credentials.country}>
                            <option value="">Select Location</option>
                            <option value="USA">USA</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="Florida">Florida</option>
                            <option value="California">California</option>
                        </Input>
                    </FormGroup>
                    
                    {WrongMassage ? 
                        <p className="text-danger">{WrongMassage}</p> : ''
                    }

                    <div className="ButtonWrap position-relative d-inline-block mt-3">

                        <button className="btn btn-primary CustomButton mt-2 mr-0">Save Changes</button>                        

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

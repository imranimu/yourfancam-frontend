import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

import SweetAlert from 'react-bootstrap-sweetalert';

import LoadingIcon from '../../../partial/LoadingIcon'
import { AthletesAccountContext } from '../../../../context/AthletesAccountContext';

export default class EditProfile extends Component {

    static contextType = AthletesAccountContext    

    render() {    
        
        const {
            credentials, 
            Loader, 
            WrongMassage,
            ShowSweetAlert, 
            handleFormSubmit,
            FirstNameHandler,             
            LastNameHandler,
            AboutMeHandler,
            PlayingHistoryHandler,
            ProudestCareerHandler,
            CallSuccessAlert
        } = this.context

        return (
            <>            
                <Form onSubmit={handleFormSubmit} className="mb-5">                     
                    <Row>                                          
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

                    <FormGroup className="mb-3">
                        <Label className="mr-sm-2">About me</Label>                                                
                        <Input type="textarea" name="text" onChange={AboutMeHandler} value={credentials.about_me || ''} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label className="mr-sm-2">Playing / Coaching History</Label>                        
                        <Input type="textarea" name="text" onChange={PlayingHistoryHandler} value={credentials.history || ''}/>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label className="mr-sm-2">Proudest sporting moments in career</Label>                                                
                        <Input type="textarea" name="text" onChange={ProudestCareerHandler} value={credentials.proudest_career || ''} />
                    </FormGroup>                                     

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
                    Account edit successfully.
                </SweetAlert>
            </>
        );
    }
}

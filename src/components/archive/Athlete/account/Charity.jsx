import React, { Component } from 'react';

import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

import SweetAlert from 'react-bootstrap-sweetalert';

import { AthletesAccountContext } from '../../../../context/AthletesAccountContext';

import LoadingIcon from '../../../partial/LoadingIcon'

export default class CharityInfo extends Component {

    static contextType = AthletesAccountContext 

    constructor() {
		super();
		this.state = {
			selectedFile: null, 
			selectedFile2: null, 
			selectedFile3: null, 
		}
    } 

    singleFileChangedHandler = ( event ) => {
		this.setState({
			selectedFile: URL.createObjectURL(event.target.files[0]) 
		});
    }; 
    singleFileChangedHandler2 = ( event ) => {
		this.setState({
			selectedFile2: URL.createObjectURL(event.target.files[0]) 
		});
    }; 
    singleFileChangedHandler3 = ( event ) => {
		this.setState({
			selectedFile3: URL.createObjectURL(event.target.files[0]) 
		});
    }; 

    render() {
        const { 
            credentials,
            WrongMassage,
            Loader,
            handleFormSubmit,
            HasCharity,
            ShowSweetAlert,
            CallSuccessAlert
        } = this.context

        // console.log(credentials.charities )       

        return (

            <>
                <Form  onSubmit={handleFormSubmit}>
                    <Row>
                        <Col>
                            <FormGroup row>                                
                                <Col className="mb-4" sm={{ size: 10 }}>
                                    <FormGroup check>
                                        <Label check><Input onChange={HasCharity} checked={credentials.has_charity} type="checkbox"/>{' '} Enable Charity</Label>
                                    </FormGroup>
                                </Col>
                                
                                {/* {credentials.charities.map( (value , i ) => 
                                    <Col key={i} md={12}>
                                        <h2>{value.organization}</h2>
                                        <img src={value.logo} alt={value.organization} title={value.organization}/>
                                    </Col>
                                )}  */}

                                <Col md={12} className="mb-4">
                                    <h5>Charity 1</h5>
                                </Col>

                                <Col md={6}>                            
                                    <FormGroup className="mb-3">
                                        <Label for="Name" className="mr-sm-2">Name</Label>
                                        <span className="input-group-addon"><i className="fa fa-file-text-o"></i></span>
                                        <Input type="text" name="Name" placeholder="Name" value={this.state.name1}/>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <div className="UploadInputImage CharityLogoUpload mb-4 position-relative">

                                        { this.state.selectedFile ? <img src={this.state.selectedFile} alt=""/> : <img src="/images/profile.jpg" alt=""/> }
                                        
                                        <input type="file" id="ImageUpload" onChange={this.singleFileChangedHandler} accept="image/x-png,image/gif,image/jpeg"/>

                                        <label for="ImageUpload" className="">                                    
                                            <p className="UploadImage"> <i className="fa fa-camera" aria-hidden="true"></i></p>
                                        </label>

                                    </div>
                                </Col>

                                <Col md={12} className="mb-4">
                                    <h5>Charity 2</h5>
                                </Col>

                                <Col md={6}>                            
                                    <FormGroup className="mb-3">
                                        <Label for="Name" className="mr-sm-2">Name</Label>
                                        <span className="input-group-addon"><i className="fa fa-file-text-o"></i></span>
                                        <Input type="text" name="Name" placeholder="Name" value={this.state.name1}/>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <div className="UploadInputImage CharityLogoUpload mb-4 position-relative">
                                                                                
                                        { this.state.selectedFile2 ? <img src={this.state.selectedFile2} alt=""/> : <img src="/images/profile.jpg" alt=""/> }
                                        
                                        <input type="file" id="ImageUpload2" onChange={this.singleFileChangedHandler2} accept="image/x-png,image/gif,image/jpeg"/>
                                        <label for="ImageUpload2" className="">                                    
                                            <p className="UploadImage"> <i className="fa fa-camera" aria-hidden="true"></i></p>
                                        </label>
                                    </div>
                                </Col>

                                <Col md={12} className="mb-4">
                                    <h5>Charity 3</h5>
                                </Col>

                                <Col md={6}>                            
                                    <FormGroup className="mb-3">
                                        <Label for="Name" className="mr-sm-2">Name</Label>
                                        <span className="input-group-addon"><i className="fa fa-file-text-o"></i></span>
                                        <Input type="text" name="Name" placeholder="Name" value={this.state.name3}/>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <div className="UploadInputImage CharityLogoUpload mb-4 position-relative">
                                                                                
                                        { this.state.selectedFile3 ? <img src={this.state.selectedFile3} alt=""/> : <img src="/images/profile.jpg" alt=""/> }
                                        
                                        <input type="file" id="ImageUpload3" onChange={this.singleFileChangedHandler3} accept="image/x-png,image/gif,image/jpeg"/>
                                        <label for="ImageUpload3" className="">                                    
                                            <p className="UploadImage"> <i className="fa fa-camera" aria-hidden="true"></i></p>
                                        </label>
                                    </div>
                                </Col>
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

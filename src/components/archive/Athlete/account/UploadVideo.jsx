import React, { Component } from 'react';
import { AthletesAccountContext } from '../../../../context/AthletesAccountContext';

import {Row, Col, Modal,  ModalBody } from 'reactstrap'

import VideoUploadFrame from './VideoUploadFrame'
import SweetAlert from 'react-bootstrap-sweetalert';
import LoadingIcon from '../../../partial/LoadingIcon';

export default class UploadVideo extends Component {

    static contextType = AthletesAccountContext  

    constructor() {
        super();  
        this.state = {             
            modal : false,              
        };         
    } 

    toggle = () => {        
        this.setState({
            modal: !this.state.modal,
        });
    };   
    
    render() {

        const {
            credentials, 
            Loader, 
            WrongMassage,
            ShowSweetAlert,
            ProfileVideoUpload,    
            ProfileVideoUploadHandler,           
            CallSuccessAlert
        } = this.context

        return (

            <>
                <Row>
                    <Col md={7}>
                    <div className="card mb-4" style={{ background: '#33343b', color: "#ffffff", borderRadius: "10px", padding: "20px" }}>      

                        <div className="card-body ProfileVideoUpload">

                            <h4 className="card-text mb-4">Please upload a video for your profile</h4>        

                            <button onClick={this.toggle} class="FormSubmitButton mb-4"> <i class="fa fa-cloud-upload" aria-hidden="true"></i> Upload Video</button>   

                            {credentials.video ?  
                                <video className="ProfileVideoFrame" controls>
                                    <source src={credentials.video} type="video/mp4"/>
                                </video>
                            : ''}        

                            <Modal isOpen={this.state.modal} toggle={this.toggle} className="CustomModalBox PaymentPopup ProfileVideoUploadPopup">
                                <ModalBody>

                                    <button className="close" onClick={this.toggle}>&times;</button>

                                    <VideoUploadFrame callback={ProfileVideoUploadHandler} />  

                                    {WrongMassage ? 
                                        <p className="text-danger">{WrongMassage}</p> : ''
                                    }

                                    <div className="ButtonWrap position-relative d-inline-block mt-3">

                                        <button className="btn btn-primary CustomButton mt-2 mr-0" onClick={ProfileVideoUpload}>Save Changes</button>

                                        {Loader ? (
                                            <div className="LoadingIcon">
                                                <LoadingIcon />
                                            </div>
                                        ) : ( '' )} 
                                    </div>        
                                    
                                </ModalBody>                            
                            </Modal>                              

                        </div>

                    </div>	                    

                    </Col> 

                </Row>                
                        

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

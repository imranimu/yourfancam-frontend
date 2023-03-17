import React, { Component } from 'react';

import VideoRecorder from 'react-video-recorder'
import { FormGroup, Label, Input, Col, Row, Modal, Spinner,  ModalBody } from 'reactstrap';
import { SendVideoContext } from '../../context/SendVideoContext';
import PaymentInfo from '../profile/payment/Payment';

export default class VideoUpload extends Component {

    static contextType = SendVideoContext

    render() {

        const {
            Loading,
            WrongMassage,
            credentials,
            SendVideo, 
            VideoUploadStatusCallback, 
            togglePayment, 
            modalPayment,
            conversation_id,
            currency,
            amount
        } = this.context

        return (
            <>
            <Row>
                <Col md={6}>                    
                    <form  onSubmit={ SendVideo } className="VideoPreviewWrap">
                        <h1>Video Preview</h1>

                        <h5>00:36</h5>

                        <FormGroup row>
                            <Label for="Title" sm={2}>Title:</Label>
                            <Col sm={9}>
                                <Input type="text" name="Title" id="Title" placeholder="" />
                            </Col>
                        </FormGroup>

                        <p><strong>Duration: </strong><span>36s</span> (Max length allowed: 30s)</p>

                        {WrongMassage ? <p className="text-danger">{WrongMassage}</p> : ''}  

                        <div className="text-center position-relative">

                            <button type="submit" className="FormSubmitButton btn btn-secondary">PAY &amp; SEND</button>

                            {Loading ? (
                                <div className="LoadingIcon Spinner">                               
                                    <Spinner />
                                </div>
                            ) : ( '' )}
                        </div>
                    </form>                    
                </Col>

                <Col md={6}>
                    <div className="VideoFrame">
                        
                        {/* <h4>Choose your Video</h4>    */}

                        {this.props.error ? <p className="text-danger">{this.props.error}</p> : ''}

                        <VideoRecorder                
                            useVideoInput             
                            replayVideoAutoplayAndLoopOff
                            showReplayControls= {true} 
                            onRecordingComplete={videoBlob => {
                                // Do something with the video...
                                //console.log('videoBlob', videoBlob)
                                VideoUploadStatusCallback(videoBlob);
                            }}              
                        />
                        
                    </div>
                </Col>
            </Row>

            <Modal isOpen={modalPayment} toggle={togglePayment} className="CustomModalBox PaymentPopup">

                <ModalBody>

                    <button className="close" onClick={togglePayment}>&times;</button>  
                                            
                    <PaymentInfo 
                        sender_id={credentials.sender_id} 
                        conversation_id={conversation_id}   
                        amount={amount}   
                        currency={currency}                   
                    />

                </ModalBody>

            </Modal>
            </>
        );
    }

}

import React, { Component } from 'react';

//import S3 from 'react-aws-s3';

import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

import {Link} from 'react-router-dom'

import Header from '../partial/Header'
import Footer from '../partial/Footer'
import UploadVideo from './VideoUpload'
import RecorderVideo from './VideoRecorder'

import Spinner from '../partial/Spinner'
import { SendVideoContext } from '../../context/SendVideoContext';


export default class SendVideo extends Component {   

    static contextType = SendVideoContext    


    render() {

        const {
            Video,
            VideoUpload,
            VideoRecorder,
            VideoSendBox,
            VideoUploadToggle,
            VideoRecorderToggle,
            SendVideo,
            VideoUploadStatusCallback, 
            AllCloseToggle,
            Loading,
            WrongMassage,
            receiver_name, 
            receiver_avatar,
            paymentStatus
        } = this.context

        const VideoUploadCloseBtn = <button className="close" onClick={VideoUploadToggle}>&times;</button>;
        const VideoCloseBtn = <button className="close" onClick={VideoRecorderToggle}>&times;</button>;        

        return (
            <>
                <Header BannerHide="true"/>

                <div className="VideoPageWrap">
                    <Container className="pt-5 pb-5">
                        <Row>
                            <Col md={12} className="pt-5">
                                <div className="VideoPageTitleWrap">

                                    <h1>Send your Video</h1>

                                    <h4>Select your upload method</h4>

                                </div>

                                <button onClick={VideoUploadToggle} className="VideoButton UploadBg">
                                    <span className="VideoIconImage"><img src="/images/images-video-upload.svg" alt="Upload Video Icon."/></span> 
                                    <p>Upload Video <span>Max length 3:00. Supporting .mp4, .mov, .mkv.</span> </p>
                                </button>

                                <button onClick={VideoRecorderToggle} className="VideoButton RecordBG">
                                    <span className="VideoIconImage"><img src="/images/images-video-record.svg" alt="Upload Video Icon."/></span> 
                                    <p>Record Video <span>Max length 3:00. Video quality 480p</span> </p>
                                </button>                           

                            </Col>
                        </Row>
                    </Container>
                </div>


                <Footer/>

                <Modal isOpen={VideoUpload} toggle={VideoUploadToggle} className="CustomModalBox VideoModulBox">

                    {paymentStatus ? <>
                
                    <ModalHeader className="VideoButtonWrap" toggle={VideoUploadToggle} close={VideoUploadCloseBtn}>

                        <span className="VideoIconImage"><img src="/images/icons-upload-video.svg" alt="Upload Video Icon."/></span> 

                        <p>Upload Video <span>Max length 3:00. Supporting .mp4, .mov, .mkv.</span> </p>     

                    </ModalHeader>

                    <ModalBody>                    

                        <UploadVideo callback = {VideoUploadStatusCallback} error={WrongMassage}/>                        
                        
                    </ModalBody>                    

                    <ModalFooter className="text-center position-relative">
                        
                        <button onClick={VideoUploadToggle} className="btn CustomButton CancelButton btn-primary mt-2 mr-0">Cancel</button>
                        
                        {Video ? <button onClick={SendVideo} className="btn CustomButton btn-primary mt-2 ml-3">Send Video</button>: ''}

                        {Loading ? <div className="LoadingIcon"><Spinner color="dark" /></div> : ''}

                    </ModalFooter> </> : 
                    
                    <ModalBody>
                        {VideoUploadCloseBtn}
                        <p>Payment is not available for sent video</p>
                    </ModalBody>

                    }
                    
                </Modal>

                <Modal isOpen={VideoRecorder} className="CustomModalBox VideoModulBox">

                    {paymentStatus ? <>
                
                    <ModalHeader className="VideoButtonWrap" toggle={VideoRecorderToggle} close={VideoCloseBtn}>                        
                        <span className="VideoIconImage"><img src="/images/icons-record-video.svg" alt="Upload Video Icon."/></span> 

                        <p>Record Video <span>Max length 3:00. Video quality 480p</span> </p> 

                    </ModalHeader>

                    <ModalBody>          

                        <RecorderVideo callback = {VideoUploadStatusCallback}/>
                        
                    </ModalBody>   

                    <ModalFooter className="text-center position-relative">                        
                        <button onClick={VideoRecorderToggle} className="btn CustomButton CancelButton btn-primary mt-2 mr-0">Cancel</button>

                        {Video ? <button onClick={SendVideo} className="btn CustomButton btn-primary mt-2 ml-3">Send Video</button>: ''}

                        {Loading ? <div className="LoadingIcon"><Spinner color="dark" /></div> : ''}

                    </ModalFooter> </> : 
                    
                    <ModalBody>
                        {VideoCloseBtn}
                        <p>Payment is not available for sent video</p>
                    </ModalBody>

                    }

                </Modal>

                <Modal isOpen={VideoSendBox} toggle={AllCloseToggle} className="CustomModalBox sendingVideoModal">

                    <ModalBody>

                        <h1><i className="fa fa-check-circle text-success"></i> Your Video has been sent to</h1>

                        <div className="AthleteInfo">

                            <img src={receiver_avatar} alt={receiver_name}/>

                            <span>{receiver_name}</span>

                        </div>

                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                        <Link className="btn CustomButton btn-primary" toggle={AllCloseToggle} to={"/my-profile"}>Back to Your Dashboard</Link>

                    </ModalBody>
                </Modal>



            </>
        );
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { MessageContext } from '../../../context/MessageContext';
import SendVideoContextProvider from '../../../context/SendVideoContext';
import Recorder from '../../videos/VideoRecorder';
import VideoUpload from '../../videos/VideoUpload';

export default class ModalVideo extends Component { 

    static contextType = MessageContext

    render() {
        const {
            modalVideo,
            modalVideoUpload,            
            toggleVideo,             
            VideoUploadStatusCallback,
            toggleVideoUpload
        } = this.context
        return (
            <>            
                <span className="mr-4"> 
                    <Link to={"#"} onClick={toggleVideo} > 
                        {modalVideo ? <img src="/images/icons/video-camera-r.png" alt=""/> : <img src="/images/icons/video-camera.png" alt=""/>}
                    </Link>
                </span>

                <Modal isOpen={modalVideo} toggle={toggleVideo} className="MessagePopup RecordUploadVideo">
                    <ModalBody>
                        
                        <button className="close" onClick={toggleVideo}>&times;</button>                       
                        
                        <Recorder callback={VideoUploadStatusCallback} uuid={this.props.uuid} paymentFor="Video"/>
                        
                        <button className="uploadButton" onClick={toggleVideoUpload}><i className="fa fa-cloud-upload"></i>Upload</button>

                    </ModalBody>   

                </Modal>
                
                <Modal isOpen={modalVideoUpload} toggle={toggleVideoUpload} className="MessagePopup SendUploadVideo">
                    <ModalBody>
                        
                        <button className="close" onClick={toggleVideoUpload}>&times;</button>     

                        <SendVideoContextProvider>
                        
                            <VideoUpload 
                                callback={VideoUploadStatusCallback} 
                                uuid={this.props.uuid} 
                                type="video"
                            />                            
                        
                        </SendVideoContextProvider>

                    </ModalBody>      

                </Modal>

            </>
        );
    }
}

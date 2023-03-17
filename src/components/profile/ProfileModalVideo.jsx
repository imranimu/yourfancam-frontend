import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { MessageContext } from '../../context/MessageContext';
import Recorder from '../videos/VideoRecorder';
import VideoUpload from '../videos/VideoUpload';

export default class ProfileModalVideo extends Component { 

    static contextType = MessageContext

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
            modalVideo,
            modalVideoUpload,            
            toggleVideo,             
            VideoUploadStatusCallback,
            toggleVideoUpload
        } = this.context
        return (
            <>            
                <div className="columnBoxButton">
                    <Link onClick={toggleVideo} to={"#"} className="btn btn-primary CustomButton purple">
                        <img src="/images/icons/send-video.png" alt=""/>
                        <span>Send Video</span> 
                        {this.props.price ? <span className="AthletePrice">${this.props.price}</span>: ''}                        
                    </Link>                    
                </div>               

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
                        
                        <VideoUpload 
                            callback={VideoUploadStatusCallback} 
                            uuid={this.props.uuid} 
                            type="video"
                        />

                    </ModalBody>      

                </Modal>

            </>
        );
    }
}

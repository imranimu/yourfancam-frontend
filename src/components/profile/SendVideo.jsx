// import React, { Component } from 'react';

// import { ProfileContext } from '../../context/ProfileContext';

// import ProfileModalVideo from './ProfileModalVideo';
// import MessageContextProvider from '../../context/MessageContext';

// export default class SendVideo extends Component {

//     static contextType = ProfileContext

//     render() {

//         const {            
//             video_price
//         } = this.context

//         return (
//             <>
//                 <MessageContextProvider> 
//                     <ProfileModalVideo uuid={this.props.uuid} price={video_price} />
//                 </MessageContextProvider>          
//             </>
//         );

//     }

// }

import React, { Component } from 'react';

import { Modal, ModalBody } from 'reactstrap';

import { Link } from 'react-router-dom';

import { ProfileContext } from '../../context/ProfileContext';
import SendVideoContextProvider from '../../context/SendVideoContext';
import VideoUpload from '../videos/VideoUpload';
import Recorder from '../videos/VideoRecorder';

export default class SendVideo extends Component {

    static contextType = ProfileContext

    constructor() {
        super(); 
        this.state = {   
            modalVideo: false,
            modalVideoUpload: false,   
        };    
    }

    toggleVideo = () => {        
        this.setState({
            modalVideo: !this.state.modalVideo,
        });
        document.body.classList.add('pr-0');
    };

    toggleVideoUpload = () => {        
        this.setState({
            modalVideoUpload: !this.state.modalVideoUpload,
            modalVideo: false,
        });
        document.body.classList.add('pr-0');
    };

    VideoUploadStatusCallback = (file) => {
        console.log(file)
    }

    render() {
        const {            
            video_price
        } = this.context

        return (
            <>
                <div className="columnBoxButton">
                    <Link onClick={this.toggleVideo} to={"#"} className="btn btn-primary CustomButton purple">
                        <img src="/images/icons/send-video.png" alt=""/>
                        <span>Send Video</span> 
                        {video_price ? <span className="AthletePrice">${video_price}</span>: ''}                        
                    </Link>                    
                </div>

                <Modal isOpen={this.state.modalVideo} toggle={this.toggleVideo} className="MessagePopup RecordUploadVideo">
                    <ModalBody>
                        
                        <button className="close" onClick={this.toggleVideo}>&times;</button>                       
                        
                        <Recorder callback={this.VideoUploadStatusCallback} uuid={this.props.uuid} paymentFor="Video"/>                        
                        
                        <button className="uploadButton" onClick={this.toggleVideoUpload}><i className="fa fa-cloud-upload"></i>Upload</button>

                    </ModalBody>   

                </Modal>
                
                <Modal isOpen={this.state.modalVideoUpload} toggle={this.toggleVideoUpload} className="MessagePopup SendUploadVideo">
                    <ModalBody uuid={this.props.uuid} type="video">
                        
                        <button className="close" onClick={this.toggleVideoUpload}>&times;</button>                          
                        
                        <SendVideoContextProvider>
                            <VideoUpload  
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


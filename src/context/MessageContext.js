import React, { Component, createContext } from 'react';
import AuthServices from '../services/AuthServices';

export const MessageContext = createContext();

class MessageContextProvider extends Component {

    constructor() {
        super(); 
        this.state = {                          
            Loader: false,
            WrongMassage: '',  
            ShowSweetAlert: false, 
            credentials: {                
                sender_id: '',     
                receiver_id: '',     
                type: 'video',
                thumb: 'https://picsum.photos/200/300',
                video : "https://picsum.photos/200/300",
            },
            modalVideo: false,
            modalVideoUpload: false,
            modalSelfi: false,
            modalMessage: false,
            modalPayment: false,
            selectedFile: null,
            modalPreview: ''
        };    
    }

    componentDidMount(){ 

        const user = AuthServices.getUser();

        let sender_id = user.uuid;        

        let type = this.props.children.props.type; 
        
        let receiver_id = this.props.children.props.uuid;                 

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, sender_id, receiver_id, type }
        }));                
    }
    

    toggleVideo = () => {        
        this.setState({
            modalVideo: !this.state.modalVideo,
        });
    };

    toggleVideoUpload = () => {        
        this.setState({
            modalVideoUpload: !this.state.modalVideoUpload,
            modalVideo: false,
        });
    };

    toggleSelfi = () => {        
        this.setState({
            modalSelfi: !this.state.modalSelfi,
        });
    };

    toggleMessage = () => {        
        this.setState({
            modalMessage: !this.state.modalMessage,
        });
    };

    VideoUploadStatusCallback = (data) => {    
        
        console.log(data);

        this.setState({
            modalPreview: !this.state.modalPreview,
        });
        // this.setState({
        //     Video: file
        // }) 
    }

    singleFileChangedHandler = ( event ) => {
        //console.log(event.target.files[0]); 
		this.setState({
            selectedFile: URL.createObjectURL(event.target.files[0])            
		});
    };   
    
    UploadVideoPayment = ( e ) => { 

        e.preventDefault();
        
        console.log(this.state.credentials); 

        // this.setState({
        //     modalPayment: !this.state.modalPayment,
        // });

    }

    togglePayment = () => {        
        this.setState({
            modalPayment: !this.state.modalPayment,
        });
    };

    render() { 
        return (
            <MessageContext.Provider 
                value={{
                    ...this.state,
                    toggleVideo: this.toggleVideo,
                    toggleSelfi: this.toggleSelfi,
                    toggleMessage: this.toggleMessage,
                    VideoUploadStatusCallback: this.VideoUploadStatusCallback,
                    singleFileChangedHandler: this.singleFileChangedHandler,
                    toggleVideoUpload: this.toggleVideoUpload,
                    UploadVideoPayment: this.UploadVideoPayment,
                    togglePayment: this.togglePayment
                }}>

                {this.props.children}

            </MessageContext.Provider>
        );
    }
}

export default MessageContextProvider;
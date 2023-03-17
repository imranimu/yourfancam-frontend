import React, { Component, createContext } from 'react';
import AuthServices from '../services/AuthServices';
import UploadServices from '../services/UploadServices'
import S3 from 'react-aws-s3';
import SendMessage from '../api/SendMessage';

export const SendVideoContext = createContext();

class SendVideoContextProvider extends Component {

    constructor() {
        super(); 
        this.state = { 
            credentials: {                
                sender_id: '',     
                receiver_id: '',     
                type: 'video',
                thumb: 'https://picsum.photos/200/300',
                video : "",
            },

            VideoUpload: false,
            VideoRecorder: false,   
            VideoSendBox: false,
            UploadedVideo: false,

            Loading: false,
            modalPayment: false,     
            WrongMassage: '',  
            ShowSweetAlert: false, 

            conversation_id: '',
            currency: '',
            amount: ''
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
        
        //console.log(this.props.children.props);               
    }

    // VideoUploadToggle = () =>{

    //     this.setState({ 
    //         VideoUpload: !this.state.VideoUpload
    //     });

    //     if(!this.state.VideoUpload){
    //         this.setState({
    //             Video : false,
    //         })
    //     }
    // }

    // VideoRecorderToggle = () =>{

    //     this.setState({ 
    //         VideoRecorder: !this.state.VideoRecorder
    //     });

    //     if(!this.state.VideoRecorder){
    //         this.setState({
    //             Video : false,
    //         })
    //     }
    // }

    SendVideo = (e) => {

        e.preventDefault();
        
        console.log(this.state.credentials); 

        const UploadVideo = this.state.UploadedVideo       
        
        console.log(UploadVideo);

        const VideoConfig = UploadServices.configVideo();

        this.setState({Loading: true})         

        if ( UploadVideo ) {

            const ReactS3Client = new S3(VideoConfig);

            ReactS3Client.uploadFile(UploadVideo, UploadVideo.lastModified).then( ( response ) => {
                
                console.log(response);

                let video = response.location;

                this.setState(prevState => ({
                    credentials: { ...prevState.credentials, video}
                }));

                this.UplodaApiCall();

            }).catch( ( error ) => {
                // If another error
                console.log(error)

                this.setState({Loading: false})

            });
        }else{
            this.setState({Loading: false, WrongMassage:'Please Upload Video'})
        }
    }

    UplodaApiCall = async()=>{

        const callapi = await SendMessage.SendChats(this.state.credentials)

        console.log(callapi);

        if(callapi.error === false){

            let conversation_id = callapi.results.conversation_id
            let currency = callapi.results.currency
            let amount = callapi.results.amount

            this.setState({ 
                WrongMassage: '', 
                ShowSweetAlert: true,
                modalPayment: true, 
                Loader : false,
                conversation_id: conversation_id,
                currency: currency,
                amount: amount                
            });           
        }else{

            this.setState( { error: true, Loader : false, WrongMassage: callapi.message });

            return false;
        }     
    }

    VideoUploadStatusCallback = (file) => {        

        console.log(file);

        this.setState({
            UploadedVideo: file
        })   

    }

    AllCloseToggle = () => {
        this.setState({ 
            VideoSendBox: false
        })
    }

    render() {
        return (
            <SendVideoContext.Provider 
                value={{
                    ...this.state,                    
                    //VideoUploadToggle: this.VideoUploadToggle,
                    //VideoRecorderToggle: this.VideoRecorderToggle,
                    SendVideo: this.SendVideo,
                    VideoUploadStatusCallback: this.VideoUploadStatusCallback, 
                    AllCloseToggle: this.AllCloseToggle,  
                }}>

                {this.props.children}

            </SendVideoContext.Provider>
        );
    }
}

export default SendVideoContextProvider;
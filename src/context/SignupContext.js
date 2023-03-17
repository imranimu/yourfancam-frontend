import React, { Component, createContext }  from 'react';
import Categories from '../api/Categories';
import Signup from '../api/Signup';

import S3 from 'react-aws-s3';

import UploadServices from '../services/UploadServices'

export const SignupContext = createContext();

class SignupContextProvider extends Component {

    constructor() {
        super(); 
        this.state = { 
            credentials: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                phone: '',
                current_status: '',
                qualifications: '',
                profession: '',
                video: '',
                role: 'Athlete'
            },  
            categories: [],
            FirstStep: true,
            VideoUpload: false,  
            FinalStep: false,
            VideoUploadFile: null,
            VideoFileName: '', 
            Loader: false,
            WrongMassage: '',
            ShowSweetAlert: false,
            passwordShown: false
        };    
    }

    isValid(){
        if (this.state.credentials.first_name && this.state.credentials.last_name && this.state.credentials.email && this.state.credentials.password && this.state.credentials.password_confirmation && this.state.credentials.current_status && this.state.credentials.profession) { 
            return true
        }
        return false;
    }

    componentDidMount(){

        this.GetCategories(); 

    }

    async GetCategories(){

        const response = await Categories.getCategories();  

        console.log(response);

        if(response.error === false){
            this.setState({
                categories: response.results
            })
        }

    }    

    handleSingup = async(e) => {

        e.preventDefault();

        this.setState({Loader : true});

        if(this.isValid()){

            //console.log(this.state.credentials);

            const response = await Signup.apiSignUp(this.state.credentials);

            if(response.error === false){

                this.setState({ WrongMassage: '', ShowSweetAlert: true, Loader : false});
               
            }else{

                this.setState( { error: true, Loader : false, WrongMassage: response.message });
                return false;
            }

        }else{

            this.setState( { error: true, Loader : false, WrongMassage: "All fields are required!" });

            return false;
        }    
    }

    FirstNameHandler = (event) => {

        let first_name = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, first_name }
        }));
    } 
    LastNameHandler = (event) => {

        let last_name = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, last_name }
        }));
    } 
    emailHandler = (event) => {

        let email = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, email }
        }));
    }  
    PasswordHandler = (event) => {

        let password = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, password }
        }));
    }
    confirmPassworddHandler = (event) => {

        let password_confirmation = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, password_confirmation }
        }));
    } 
    togglePasswordVisiblity = () => {        
        this.setState({
            passwordShown: !this.state.passwordShown
        })
    };
    currentStatusHandler = (event) => {

        let current_status = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, current_status }
        }));
    } 
    qualificationsHandler = (event) => {

        let qualifications = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, qualifications }
        }));
    } 
    SportHandler = (event) => {

        let profession = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, profession }
        }));
    }

    CallSuccessAlert = () =>{

        this.setState({ 
            ShowSweetAlert: false
        });
    
        window.location = '/';
    }

    AthleteVideoUpload = () => {

        this.setState({Loader : true});

        if(this.isValid()){
            this.setState({
                FirstStep: false,
                VideoUpload: true, 
                WrongMassage: "", 
                Loader : false
            })
        }else{

            this.setState( { error: true, Loader : false, WrongMassage: "All fields are required!" });

            return false;
        }  
    }

    AthleteFinalStep = () => {         
        
        this.setState({Loader : true});
        
        const VideoUpload = this.state.VideoUploadFile;

        const VideoConfig = UploadServices.configVideo();

        if(VideoUpload){            

            const ReactS3Client = new S3(VideoConfig);

            ReactS3Client.uploadFile(VideoUpload, VideoUpload.lastModified).then( ( response ) => {
                
                console.log(response);

                let video = response.location;

                this.setState(prevState => ({
                    credentials: { ...prevState.credentials, video}
                }));  

                this.setState({
                    FirstStep: true,
                    VideoUpload: false, 
                    FinalStep: true,
                    Loader : false,
                })                                

            }).catch( ( error ) => {
                // If another error
                console.log(error)

                return false;
            }); 

        }else{

            this.setState( { error: true, Loader : false, WrongMassage: "All fields are required!" });

            return false;

        }  
    }

    VideoUploadStatusCallback = (event) =>{
        
        //console.log(event)

        let VideoUploadFile = event;

        this.setState({
            VideoUploadFile: VideoUploadFile,
            VideoFileName: event.name
        })  

    }

    render() { 
        return (
            <SignupContext.Provider 

                value={{
                    ...this.state,
                    handleSingup: this.handleSingup,
                    FirstNameHandler: this.FirstNameHandler,
                    LastNameHandler: this.LastNameHandler,
                    emailHandler: this.emailHandler,
                    PasswordHandler: this.PasswordHandler,
                    confirmPassworddHandler: this.confirmPassworddHandler,   
                    togglePasswordVisiblity: this.togglePasswordVisiblity,                 
                    currentStatusHandler: this.currentStatusHandler,
                    qualificationsHandler: this.qualificationsHandler,
                    SportHandler: this.SportHandler,
                    AthleteVideoUpload: this.AthleteVideoUpload,
                    AthleteFinalStep: this.AthleteFinalStep,
                    VideoUploadStatusCallback: this.VideoUploadStatusCallback,
                    CallSuccessAlert: this.CallSuccessAlert,
                }}>

                {this.props.children}

            </SignupContext.Provider>
        );
    }

}

export default SignupContextProvider;


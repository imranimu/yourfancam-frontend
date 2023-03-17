import React, { Component, createContext } from 'react';
import AccountUpdate from '../api/AccountUpdate';
import getProfile from '../api/getProfile';
import AuthServices from '../services/AuthServices';
import CookieServices from '../services/CookieServices';

import S3 from 'react-aws-s3';

import UploadServices from '../services/UploadServices'

export const FanAccountContext = createContext();

class FanAccountContextProvider extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            Loader: false,
            WrongMassage: '',    
            ShowSweetAlert: false, 
            uuid: '',          
            avatarUpload: null,  
            credentials: {
                avatar: null,
                first_name: '',
                last_name: '', 
                email: '',
                language: '',
                country: '',
            },
        };        
    } 

    componentDidMount() {    
        
        const user = AuthServices.getUser();      
        
        this.setState({
            uuid: user.uuid
        })

        this.getProfileOnLoad(user.uuid);

        console.log('Fan Account Context ... ');

    } 

    async getProfileOnLoad(id){

        let response =  await getProfile.getProfile(id);

        console.log(response);

        let avatar = response.avatar
        let first_name = response.first_name
        let last_name = response.last_name 
        let email = response.email 
        let language = response.language 
        let country = response.country 
        
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, avatar, first_name, last_name, email, language, country }
        }));                
    }

    handleFormSubmit = async (e) => { 

        e.preventDefault() 

        this.setState({Loader : true})           

        console.log(this.state.credentials);

        this.AccountUpdate();
         
    }

    UploadAvatarImage = () => {

        this.setState({Loader : true})  

        const UploadAvatar = this.state.avatarUpload; 

        const ImageConfig = UploadServices.configImage();

        if(UploadAvatar){

            const ReactS3Client = new S3(ImageConfig);

            ReactS3Client.uploadFile(UploadAvatar, UploadAvatar.lastModified).then( ( response ) => {
                
                console.log(response);

                let avatar = response.location;

                this.setState(prevState => ({
                    credentials: { ...prevState.credentials, avatar}
                }));  
                
                this.AccountUpdate();

            }).catch( ( error ) => {
                // If another error
                console.log(error)

                return false;
            });
        }
    }

    async AccountUpdate (){

        const response = await AccountUpdate.upadteAccount(this.state.uuid, this.state.credentials);

        console.log(response);        
        
        if(response.error === false){                           
            
            let options = { path : '/', sameSite: 'lax'}

            let name = response.results.first_name + ' ' + response.results.last_name;

            let user = {
                'name': name,
                'role': response.results.role,
                'avatar': response.results.avatar,
                'uuid': response.results.uuid,
            };

            CookieServices.set('user', JSON.stringify(user), options);

            this.setState({ Loader : false, ShowSweetAlert: true,  WrongMassage: '' }) 

        }else{

            this.setState( { error: true, Loader : false, WrongMassage: response.message });

            return false;
        }
    }


    AvatarChangedHandler = ( event ) => {        

        let avatar = URL.createObjectURL(event.target.files[0]);
        let avatarUpload = event.target.files[0];

        this.setState({
            avatarUpload: avatarUpload
        })        

		this.setState(prevState => ({
            credentials: { ...prevState.credentials, avatar }
        }));

    };

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

    emailNameHandler = (event) => {        
        let email = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, email }
        }));
    }  

    LanguageHandler = (event) => {
        let language = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, language }
        }));
    }  

    CountryHandler = (event) => {
        let country = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, country }
        }));
    }    

    CallSuccessAlert = () =>{

        this.setState({ShowSweetAlert: false});  

        window.location.reload();

    }

    render() {     

        return (
            <FanAccountContext.Provider 

                value={{
                    ...this.state,
                    handleFormSubmit: this.handleFormSubmit,
                    AvatarChangedHandler: this.AvatarChangedHandler,
                    UploadAvatarImage: this.UploadAvatarImage,
                    FirstNameHandler: this.FirstNameHandler,
                    LastNameHandler: this.LastNameHandler,
                    emailNameHandler: this.emailNameHandler,
                    LanguageHandler: this.LanguageHandler,
                    CountryHandler: this.CountryHandler, 
                    CallSuccessAlert: this.CallSuccessAlert
                }}>

                {this.props.children}

            </FanAccountContext.Provider>
        );
    }
}

export default FanAccountContextProvider;
 
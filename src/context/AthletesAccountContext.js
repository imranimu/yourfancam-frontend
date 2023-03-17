import React, { Component, createContext } from 'react';
import AccountUpdate from '../api/AccountUpdate';
import Categories from '../api/Categories';
import getProfile from '../api/getProfile';
import AuthServices from '../services/AuthServices';
import CookieServices from '../services/CookieServices';

import S3 from 'react-aws-s3';

import UploadServices from '../services/UploadServices'

export const AthletesAccountContext = createContext();

class AthletesAccountContextProvider extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            Loader: false,
            WrongMassage: '',    
            TearmsCondition: false, 
            ShowSweetAlert: false, 
            uuid: '',
            avatarUpload: null,
            VideoUpload: null,
            categories: [],
            credentials: {
                avatar: null,
                first_name: '',
                last_name: '', 
                email: '',
                language: '',
                country: '',
                category_id: '',
                about_me: '',                
                history : '',
                proudest_career : '',
                chat_price : '',
                text_selfi_price: '',
                video_price : '',
                qualifications : '',
                playing_status : '',
                has_charity: '',
                video: '',
                charities : [
                    {
                        organization: "Charity A",
                        logo: "https://picsum.photos/120/60"
                    },
                    {
                        organization: "Charity Z",
                        logo: "https://picsum.photos/120/60"
                    },
                    {
                        organization: "Charity Z",
                        logo: "https://picsum.photos/120/60"
                    }
                ]
            },
        };        
    } 

    componentDidMount() {    
        
        const user = AuthServices.getUser();      
        
        this.setState({
            uuid: user.uuid
        })

        this.getProfileOnLoad(user.uuid);

        console.log('Athletes Account Context ... ');

        this.GetCategories(); 

    } 

    async GetCategories(){

        const response = await Categories.getCategories();  

        //console.log(response);

        if(response.error === false){
            this.setState({
                categories: response.results
            })
        }
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
        let category_id = response.category_id         
        
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, avatar, first_name, last_name, email, language, country, category_id }
        }));               
        
        if(response.athlete){

            let about_me = response.athlete.about_me;
            let history = response.athlete.history;
            let proudest_career = response.athlete.proudest_career; 
            let chat_price = response.athlete.chat_price; 
            let text_selfi_price = response.athlete.text_selfi_price;
            let video_price = response.athlete.video_price; 
            let qualifications = response.athlete.qualifications; 
            let playing_status = response.athlete.playing_status;    
            let has_charity = response.athlete.has_charity; 
            let charities = response.athlete.charities 
            let video = response.athlete.video 
            
            this.setState(prevState => ({
                credentials: { 
                    ...prevState.credentials, 
                    about_me, 
                    history, 
                    proudest_career, 
                    chat_price, 
                    text_selfi_price,
                    video_price,  
                    qualifications,
                    playing_status,
                    has_charity,
                    charities,
                    video
                }
            }));
        }
    }

    handleFormSubmit = async (e) => { 

        e.preventDefault() 

        this.setState({Loader : true})  

        console.log(this.state.credentials);

        this.AccountUpdate();        
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

    ProfileVideoUploadHandler = (event) => {
        
        let video = event;

        let VideoUpload = event;

        this.setState({
            VideoUpload: VideoUpload
        })  

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, video }
        }));
    }

    ProfileVideoUpload = () => {

        //console.log('From Context... '); 

        //console.log(event)        

        this.setState({Loader : true})  

        const VideoUpload = this.state.VideoUpload; 

        const VideoConfig = UploadServices.configVideo();

        if(VideoUpload){

            const ReactS3Client = new S3(VideoConfig);

            ReactS3Client.uploadFile(VideoUpload, VideoUpload.lastModified).then( ( response ) => {
                
                console.log(response);

                let video = response.location;

                this.setState(prevState => ({
                    credentials: { ...prevState.credentials, video}
                }));  
                
                this.AccountUpdate();

            }).catch( ( error ) => {
                // If another error
                console.log(error)

                return false;
            });
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

    currentStatusHandler = (event) => {
        let playing_status = event.target.value; 

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, playing_status }
        }));
    }

    qualificationsHandler = (event) => {
        let qualifications = event.target.value;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, qualifications }
        }));
    }

    SportHandler = (event) => {

        let category_id = event.target.value;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, category_id }
        }));
    }   
    
    AboutMeHandler = (event) => {

        let about_me = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, about_me }
        }));
    }

    PlayingHistoryHandler = (event) => {
        let history = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, history }
        }));
    }

    ProudestCareerHandler = (event) => {
        let proudest_career = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, proudest_career }
        }));
    }

    chatPriceHandler = (event) => {
        
        let chat_price = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, chat_price }
        }));
    }

    SelfiPriceHandler = (event) =>{
        let text_selfi_price = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, text_selfi_price }
        }));        
    }

    videoPriceHandler = (event) => {
        
        let video_price = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, video_price }
        }));
    } 

    TearmsConditionHandaler = () =>{
        this.setState({
            TearmsCondition: !this.state.TearmsCondition,
        });
    }

    CallSuccessAlert = () =>{

        this.setState({ShowSweetAlert: false});  

        window.location.reload();
    }

    HasCharity = (event) => {

        let has_charity = event.target.checked;        

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, has_charity }
        }));
    }

    render() {     

        return (
            <AthletesAccountContext.Provider 
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
                    currentStatusHandler: this.currentStatusHandler,
                    qualificationsHandler: this.qualificationsHandler, 
                    SportHandler: this.SportHandler,
                    AboutMeHandler: this.AboutMeHandler,
                    PlayingHistoryHandler: this.PlayingHistoryHandler,
                    ProudestCareerHandler: this.ProudestCareerHandler,
                    chatPriceHandler: this.chatPriceHandler,
                    SelfiPriceHandler: this.SelfiPriceHandler,
                    videoPriceHandler: this.videoPriceHandler,
                    ProfileVideoUpload: this.ProfileVideoUpload,
                    ProfileVideoUploadHandler: this.ProfileVideoUploadHandler,
                    TearmsConditionHandaler: this.TearmsConditionHandaler,
                    CallSuccessAlert: this.CallSuccessAlert,
                    HasCharity: this.HasCharity
                }}>
                {this.props.children}
            </AthletesAccountContext.Provider>
        );
    }
}

export default AthletesAccountContextProvider;
 
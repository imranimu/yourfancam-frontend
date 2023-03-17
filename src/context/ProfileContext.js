import React, { Component, createContext } from 'react';
import getProfile from '../api/getProfile';

export const ProfileContext = createContext();

class ProfileContextProvider extends Component {

    constructor(props) {
        super(props); 
        this.state = {                
            name: '', 
            avatar: '', 
            country: '',
            date_of_birth: '', 
            language: '',
            phone: '',
            about_me: '',
            banner: '',
            history: '',
            playing_status: '',
            profession: '',
            proudest_career: '',
            qualifications: '' ,
            has_charity: '',
            chat_price: '',
            text_selfi_price: '', 
            video_price: '',
            uuid: ''
        };        
    } 

    componentDidMount() {         
        
        document.title = "Profile || Your fan cam"    
                
        const { id } = this.props.uuid.match.params;

        this.setState({
            uuid: id
        }) 

        this.getProfileOnLoad(id)
         
        window.scrollTo(0, 0) 
    } 

    async getProfileOnLoad(id){

        let response =  await getProfile.getProfile(id);

        console.log(response); 

        var name = response.first_name + ' ' + response.last_name; 
        var avatar = response.avatar;
        var country = response.country;
        var date_of_birth = response.date_of_birth; 
        var language = response.language;
        var phone = response.phone;
        

        if(response.athlete){
            var about_me = response.athlete.about_me;
            var banner = response.athlete.banner;
            var history = response.athlete.history;
            var chat_price = response.athlete.chat_price; 
            var text_selfi_price = response.athlete.text_selfi_price;
            var video_price = response.athlete.video_price; 
            var playing_status = response.athlete.playing_status;
            var profession = response.category;
            var proudest_career = response.athlete.proudest_career;
            var qualifications = response.athlete.qualifications;
            var has_charity = response.athlete.has_charity
        }

        this.setState({
            name: name, 
            avatar: avatar, 
            country: country,
            date_of_birth: date_of_birth, 
            language: language,
            phone: phone,
            about_me: about_me,
            banner: banner,
            history: history,
            playing_status: playing_status,
            profession: profession,
            proudest_career: proudest_career,
            qualifications: qualifications,
            has_charity: has_charity,
            chat_price: chat_price,
            text_selfi_price: text_selfi_price, 
            video_price: video_price
        })
        console.log('Get Profile ...')
    }

    render() {   

        return (
            <ProfileContext.Provider 

                value={{
                    ...this.state
                }}>

                {this.props.children}

            </ProfileContext.Provider>
        );
    }
}

export default ProfileContextProvider;
 
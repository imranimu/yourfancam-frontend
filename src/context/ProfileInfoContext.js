import React, { Component, createContext } from 'react';

import Auth from '../api/Auth';

import AuthServices from '../services/AuthServices';

export const ProfileInfoContext = createContext();

class ProfileInfoContextProvider extends Component {
    
    state = {   
        avatar: '',         
        name: '',             
        login: false, 
        modal : false,  
        isOpen: false,
        isOpenSettings: false,         
        Loader: false,
    }
    
    componentDidMount() { 
        
        const isAuthenticated = AuthServices.isAuthenticated();

        if(isAuthenticated){

            const user = AuthServices.getUser();                        

            if(user){
                this.setState({name: user.name, designation: user.role, login: true, avatar: user.avatar });
            }            
        }  
    } 

    toggle = () => {        
        this.setState({
            modal: !this.state.modal,
        });
    };

    toggleMenu = () => {        

        this.setState({

            isOpen: !this.state.isOpen,

        });

    };

    toggleSettings = () => {        

        this.setState({

            isOpenSettings: !this.state.isOpenSettings,

        });
    };      

    LogOut = async(e) => {

        e.preventDefault();

        this.setState({Loader : true}); 

        const response =  await Auth.doLogOut();

        console.log(response);

        if(response){

            this.setState({Loader : false});             

            window.location = '/';
            
        }
    }

    render() { 
        return (
            <ProfileInfoContext.Provider 
                value={{
                    ...this.state,                      
                    toggle: this.toggle,
                    toggleMenu: this.toggleMenu, 
                    toggleSettings: this.toggleSettings,  
                    LogOut: this.LogOut, 
                }}>

                {this.props.children}

            </ProfileInfoContext.Provider>
        );
    }
}
 
export default ProfileInfoContextProvider;
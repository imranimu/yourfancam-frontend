import React, { Component, createContext } from 'react';
import Auth from '../api/Auth';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    
    state = {
        credentials: {
            email: '',
            password: '',
            remember: false
        }, 
        auth: '',
        errorMessage: '',
        Loader: '',
    }
    
    Login = async(e) => {

        e.preventDefault();

        this.setState({Loader : true}); 

        const response = await Auth.doLogin(this.state.credentials);

        if(response.error === false){

            console.log(response);    
            
            window.location = '/';                 

        }else{

            this.setState( { error: true, Loader : false, errorMessage: response.message });

            return false;
        }

    }    

    emailHandler = (event) => {

        let email = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, email }
        }));
    }

    passwordHandler = (event) => {

        let password = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, password }
        }));
    }

    rememberHandler = (event) => {

        let remember = event.target.checked ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, remember }
        }));
    }     

    render() { 
        return (
            <AuthContext.Provider 

                value={{
                    ...this.state,                      
                    Login: this.Login,
                    emailHandler: this.emailHandler, 
                    passwordHandler: this.passwordHandler, 
                    rememberHandler: this.rememberHandler, 
                }}>

                {this.props.children}

            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;
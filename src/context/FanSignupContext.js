import React, { Component, createContext }  from 'react';
import Signup from '../api/Signup';

export const FanSignupContext = createContext();

class FanSignupContextProvider extends Component {

    constructor() {
        super(); 
        this.state = { 
            credentials: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '', 
                role: 'Fan'
            },              
            Loader: false,
            WrongMassage: '',
            ShowSweetAlert: false,
        };    
    }

    isValid(){
        if (this.state.credentials.first_name && this.state.credentials.last_name && this.state.credentials.email && this.state.credentials.password && this.state.credentials.password_confirmation) { 
            return true
        }
        return false;
    } 

    handleSingup = async(e) => {

        e.preventDefault();

        this.setState({Loader : true});

        if(this.isValid()){

            //console.log(this.state.credentials);

            const response = await Signup.apiSignUp(this.state.credentials);

            //console.log(response);

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
     
    CallSuccessAlert = () =>{

        this.setState({ 
            ShowSweetAlert: false
        });
    
        window.location = '/';
    }

    render() { 
        return (
            <FanSignupContext.Provider 

                value={{
                    ...this.state,
                    handleSingup: this.handleSingup,
                    FirstNameHandler: this.FirstNameHandler,
                    LastNameHandler: this.LastNameHandler,
                    emailHandler: this.emailHandler,
                    PasswordHandler: this.PasswordHandler,
                    confirmPassworddHandler: this.confirmPassworddHandler,                                        
                    CallSuccessAlert: this.CallSuccessAlert,
                }}>

                {this.props.children}

            </FanSignupContext.Provider>
        );
    }

}

export default FanSignupContextProvider;


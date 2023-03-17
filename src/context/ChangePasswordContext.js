import React, { Component, createContext } from 'react';
import AccountUpdate from '../api/AccountUpdate';

export const ChangePassword = createContext();

class ChangePasswordProvider extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            Loader: false,
            WrongMassage: '',    
            ShowSweetAlert: false,  
            credentials: { 
                old_password: '',
                new_password: '',            
                confirm_password: '',
            },
        };        
    }   

    handleFormSubmit = async (e) => { 

        e.preventDefault() 

        this.setState({Loader : true})  

        console.log(this.state.credentials);

        const response = await AccountUpdate.changePassword(this.state.credentials);

        console.log(response);        
        
        if(response.error === false){               

            this.setState({ Loader : false, ShowSweetAlert: true,  WrongMassage: '' }) 

        }else{

            this.setState( { error: true, Loader : false, WrongMassage: response.message });

            return false;
        }
    }

    PasswordHandler = (event) => {        
        let old_password = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, old_password }
        }));
    } 

    NewPasswordHandler = (event) => {        
        let new_password = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, new_password }
        }));
    }  

    confirmPassworddHandler = (event) => {        
        let confirm_password = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, confirm_password }
        }));
    }       

    CallSuccessAlert = () =>{

        this.setState({ShowSweetAlert: false});  

        window.location.reload();

    }

    render() {     

        return (
            <ChangePassword.Provider 

                value={{
                    ...this.state,
                    handleFormSubmit: this.handleFormSubmit,                     
                    PasswordHandler: this.PasswordHandler,
                    NewPasswordHandler: this.NewPasswordHandler,
                    confirmPassworddHandler: this.confirmPassworddHandler,
                    CallSuccessAlert: this.CallSuccessAlert
                }}>

                {this.props.children}

            </ChangePassword.Provider>
        );
    }
}

export default ChangePasswordProvider;
 
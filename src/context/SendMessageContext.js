import React, { Component, createContext } from 'react';
import SendMessage from '../api/SendMessage';
import AuthServices from '../services/AuthServices';
//import CookieServices from '../services/CookieServices';

export const SendMessageContext = createContext();

class SendMessageContextProvider extends Component {

    constructor() {
        super(); 
        this.state = { 
            credentials: {
                message: '',
                sender_id: '',     
                receiver_id: '',     
                type: '',
            },
            MessageSendBox: false,                 
            Loader: false,
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
        
        console.log(this.props.children.props);
    }

    SendMessageFormSubmit = async(e)=>{      

        e.preventDefault();

        this.setState({Loader : true});   
        
        console.log(this.state.credentials);   
        
        // this.setState({ 
        //     WrongMassage: '', 
        //     ShowSweetAlert: true,
        //     MessageSendBox: true, 
        //     Loader : false,
        //     receiver_name: '',
        //     receiver_avatar: ''            
        // });

        const response = await SendMessage.SendChats(this.state.credentials);  

        console.log(response);

        if(response.error === false){

            let conversation_id = response.results.conversation_id
            let currency = response.results.currency
            let amount = response.results.amount

            this.setState({ 
                WrongMassage: '', 
                ShowSweetAlert: true,
                MessageSendBox: true, 
                Loader : false,
                conversation_id: conversation_id,
                currency: currency,
                amount: amount                
            });           
        }else{

            this.setState( { error: true, Loader : false, WrongMassage: response.message });

            return false;
        }
    } 

    CloseToggle = () => {

        this.setState({ 
            MessageSendBox: false
        })

        //this.props.children.props.SendStatus(true);
    }     

    MessageHandler = (event) =>{

        let message = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, message }
        }));    

    }

    render() { 
        return (
            <SendMessageContext.Provider 
                value={{
                    ...this.state,
                    SendMessageFormSubmit: this.SendMessageFormSubmit,  
                    MessageHandler: this.MessageHandler,                    
                    CloseToggle: this.CloseToggle
                }}>

                {this.props.children}

            </SendMessageContext.Provider>
        );
    }
}

export default SendMessageContextProvider;
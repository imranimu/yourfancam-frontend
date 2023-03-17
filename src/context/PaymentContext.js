import React, { Component, createContext } from 'react';
import Payment from '../api/Payment';

export const PaymentContext = createContext();

class PaymentContextProvider extends Component {

    constructor() {
        super(); 
        this.state = { 
            credentials: {
                conversation_id: '',
                sender_id: '',
                source : "stripe",
                transaction_code : "wwww7363663636"                 
            },
            Loader: false,
            WrongMassage: '',  
            ShowSweetAlert: false,
        };    
    }    

    componentDidMount(){         

        console.log(this.props.children.props);
        
        let conversation_id = this.props.children.props.conversation_id
        let amount = this.props.children.props.amount
        let currency = this.props.children.props.currency
        let sender_id = this.props.children.props.sender_id

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, conversation_id, amount, currency, sender_id }
        }));

    }
    
    PaymentFormSubmit = async(e)=>{      

        e.preventDefault();

        this.setState({Loader : true});

        const response = await Payment.Payment(this.state.credentials);  

        console.log(response);

        if(response.error === false){

            this.setState({ WrongMassage: '', ShowSweetAlert: true, Loader : false});
           
        }else{

            this.setState( { error: true, Loader : false, WrongMassage: response.message });

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

    EmailHandler = (event) => {

        let email = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, email }
        }));
    }

    CardnumberHandler = (event) => {

        let card_number = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, card_number }
        }));
    }


    ExpirationMonthHandler = (event) => {

        let expiration_month = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, expiration_month }
        }));
    }

    ExpirationYearHandler = (event) => {

        let expiration_year = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, expiration_year }
        }));
    }

    CVCHandler = (event) => {

        let cvc_code = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, cvc_code }
        }));
    }

    CallSuccessAlert = () =>{

        this.setState({ 
            ShowSweetAlert: false
        });
        
        window.location.replace("/my-profile");

        // if(this.props.children.props.paymentFor=== 'Video'){

        //     window.location.replace("/videosend");

        // }else{

        //     this.props.children.props.callback(true);

        // }
    }

    render() { 
        return (
            <PaymentContext.Provider 
                value={{
                    ...this.state,
                    PaymentFormSubmit: this.PaymentFormSubmit, 
                    FirstNameHandler: this.FirstNameHandler, 
                    LastNameHandler: this.LastNameHandler,
                    EmailHandler: this.EmailHandler,
                    CardnumberHandler: this.CardnumberHandler,
                    ExpirationMonthHandler: this.ExpirationMonthHandler, 
                    ExpirationYearHandler: this.ExpirationYearHandler,
                    CVCHandler: this.CVCHandler,
                    CallSuccessAlert: this.CallSuccessAlert
                }}>

                {this.props.children}

            </PaymentContext.Provider>
        );
    }
}
 
export default PaymentContextProvider;
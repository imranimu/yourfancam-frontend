import React, { Component } from 'react';

import CardPayment from './CardPayment'
import PaypalPayment from './PaypalPayment'

import AuthServices from '../../../services/AuthServices';
import PaymentContextProvider from '../../../context/PaymentContext';

export default class PaymentInfo extends Component {

    constructor(){
        super(); 
        this.state ={
            CardPayment: true, 
            PaypalPayment: false,
            login: false
        }
    }

    componentDidMount(){

        const userLogin = AuthServices.isAuthenticated();

        if(userLogin){

            this.setState({
                login : true
            })
        }        
    }

    render() {
        return (
            <>
                {this.state.login ? 
                    <>
                        <div className="mb-4 PaymentInfoWrap">

                            <h1> Great! That's ${this.props.amount}</h1>

                            <h2>Payment</h2>

                            <button onClick={ () =>{ this.setState({CardPayment: false, PaypalPayment: true})} } className={`PaypalButton ${this.state.PaypalPayment ? "active" : ""}`}>
                                
                                <span>PayPal</span>

                                <img src="/images/paypal-icon.png" alt="Card Payment Icon"/>         

                            </button>   

                            <button onClick={ () =>{ this.setState({CardPayment: true, PaypalPayment: false})} } className={`${this.state.CardPayment ? "active" : ""}`}>
                                
                                <span>Debit/Credit Card</span>

                                <img src="/images/card-icon.png" alt="Card Payment Icon"/>       

                            </button>   

                            {/* <p>{this.props.sender_id}</p>

                            <p>{this.props.conversation_id}</p>

                            <p>{this.props.amount}</p>

                            <p>{this.props.currency}</p> */}
                            
                        </div>

                        <PaymentContextProvider>

                            {this.state.CardPayment ? 
                                <CardPayment 
                                    sender_id= {this.props.sender_id} 
                                    conversation_id= {this.props.conversation_id}
                                    amount= {this.props.amount}
                                    currency= {this.props.currency}
                                /> 
                                : 
                                <PaypalPayment 
                                    sender_id= {this.props.sender_id} 
                                    conversation_id= {this.props.conversation_id}
                                    amount= {this.props.amount}
                                    currency= {this.props.currency}
                                />
                            }
                            
                        </PaymentContextProvider>
                    </>
                :   <div className="mt-3 text-center">
                        <h4 className="mb-3">Oppps</h4>
                        <h5>Looks like you are not logged in! Please login first.</h5>
                    </div>
                }

            </>
        );
    }
}

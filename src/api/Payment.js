//import AuthServices from '../services/AuthServices';
import AxiosServices from '../services/AxiosServices';
import CookieServices from '../services/CookieServices';

class PaymentApi {

    async Payment (credentials){

        //const user = AuthServices.getUser(); 

        //let sender_id=  user.uuid
        //let receiver_id=  credentials.receiver_id
        //let type = credentials.payment_for 

        console.log(credentials)

        const paymentUrl = '/payments';        

        try{    

            const response =  await AxiosServices.post(paymentUrl, credentials);            

            // if(response.data.error === false){

            //     this.onPaymentSuccess(response.data, receiver_id);

            // }             

            return response.data;

        }catch(error){

            return error.response.data;

        }  
    }

    onPaymentSuccess = (data , receiver_id) =>{

        //console.log(data);

        let options = { path : '/', sameSite: 'lax'}

        CookieServices.set('payment_id', data.results.uuid, options);

        CookieServices.set('receiver_id', receiver_id, options);

        return true; 
    }
    
}


export default new PaymentApi();
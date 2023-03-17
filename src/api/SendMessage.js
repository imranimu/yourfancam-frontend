import AxiosServices from "../services/AxiosServices";
//import CookieServices from "../services/CookieServices";

class SendMessage{  
    
    /*
    ## Send Chats Message
    **********************************/
    async SendChats(credentials){

        const ApiUrl = '/conversations';

        try{            
            
            const response =  await AxiosServices.post(ApiUrl, credentials);

            if(response.data.error === false){

                //this.onSendSuccess();
                
                console.log('Done ... ');

            }

            return response.data; 


        }catch(error){

            return error.response.data;
            
        }
    }

    /*
    ## Send Video Message 
    **********************************/
    async SendVideo(credentials){

        const ApiUrl = '/videos';

        try{            
            
            const response =  await AxiosServices.post(ApiUrl, credentials);

            if(response.data.error === false){

                this.onSendSuccess();

            }

            return response.data;            

        }catch(error){

            return error.response.data;
            
        }
    }

    onSendSuccess = () =>{
        
        console.log('Success Conversation Create....'); 

        // CookieServices.remove('payment_id'); 
        // CookieServices.remove('receiver_id'); 

    }

}

export default new SendMessage();
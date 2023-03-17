import AuthServices from "../services/AuthServices";
import AxiosServices from "../services/AxiosServices";

class GetMessageApi {

    userId(){
        const user = AuthServices.getUser(); 

        let user_id=  user.uuid

        return user_id
    }

    /*
    ## Get Chats      
    ********************************/
    async getChats(sender_id, type){
        
        const user_id = this.userId();
        
        // let data = {
        //     receiver_id: user_id, 
        //     sender_id: sender_id , 
        //     type: type
        // };          
        let data = {
            user_id: user_id, 
            communicator_id: sender_id , 
            type: type
        };          
        
        const ApiURL = '/communications';    

        try{

            const response =  await AxiosServices.post(ApiURL, data);

            //console.log(response);
            
            return response.data.results;

        }catch(error){

            return error.response.data;

        }
    }

    /*
    ## Get Videos      
    ********************************/
    async getVideos(receiver_id){    
            
        const user_id = this.userId();
        
        const ApiURL = '/video/conversations?receiver_id='+receiver_id+'&user_id='+user_id;        

        try{
            
            const response =  await AxiosServices.get(ApiURL);
            
            return response.data.results;

        }catch(error){

            return error.response.data;

        }
    }


}


export default new GetMessageApi();
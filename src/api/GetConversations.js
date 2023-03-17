import AuthServices from "../services/AuthServices";
import AxiosServices from "../services/AxiosServices";

class Conversations {    

    /*
    ## Get All Conversations
    ********************************/
    async getConversations(){

        let user = AuthServices.getUser();

        console.log(user);
        
        const ConversationsURL = '/conversations?user_id=' + user.uuid;

        try{
            const response =  await AxiosServices.get(ConversationsURL);
            
            return response.data.results.data;

        }catch(error){

            return error.response.data;

        }
    }
}

export default new Conversations();
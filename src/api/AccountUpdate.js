import AxiosServices from "../services/AxiosServices";

class UpdateAccount{       

    /*
    ## Account Update
    **********************************/
    async upadteAccount(uuid, credentials){

        const ApiUrl = '/users/'+uuid;

        try{
            
            const response =  await AxiosServices.put(ApiUrl, credentials);

            return response.data;            

        }catch(error){
            return error.response.data;
        }
    }

    /*
    ## Change Password
    **********************************/
    async changePassword(credentials){

        const ApiUrl = '/change-password';

        try{
            
            const response =  await AxiosServices.post(ApiUrl, credentials);

            return response.data;            

        }catch(error){

            return error.response.data;
            
        }
    }
}

export default new UpdateAccount();
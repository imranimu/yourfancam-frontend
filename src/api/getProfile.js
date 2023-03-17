import AxiosServices from "../services/AxiosServices";

class ProfileApi {    

    /*
    ## Get Single Athlete
    ********************************/
    async getProfile(uuid){

        const ProfileApiURL = '/athletes/'+uuid;

        try{

            const response =  await AxiosServices.get(ProfileApiURL);
            
            return response.data.results;

        }catch(error){

            return error.response.data;

        }    
    }   

}


export default new ProfileApi();
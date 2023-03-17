import AxiosServices from '../services/AxiosServices';

class SignupApi {    
    /*
    ## Api Sign up
    ********************************/     
    async apiSignUp(credentials){
        
        const SignupURL = '/register';

        try{
            
            const response =  await AxiosServices.post(SignupURL, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                } 
            });

            return response.data;

        }catch(error){

            return error.response.data;

        } 
    }
}
export default new SignupApi();
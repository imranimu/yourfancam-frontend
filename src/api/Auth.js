import CookieService from '../services/CookieServices';
import AxiosServices from '../services/AxiosServices';

const expiredAt = 60*24*60*1000;

class AuthApi {

    async doLogin(credentials){

        if(this.validate(credentials)){

            const loginURL = "/login";

            try{
    
                const response =  await AxiosServices.post(loginURL, credentials);

                if(response.data.error === false){

                    this.onLoginSuccess(response.data, credentials.remember);

                }
    
                return response.data;
    
            }catch(error){
                return error.response.data;
            }    
        }
        return {'error': true, 'message': "Invalid Input"};
    }

    validate = (credentials) => {
        if (credentials.email && credentials.password) { 
            return true
        }
        return false;
    } 

    onLoginSuccess = (data, remember) => {

        let options = { path : '/', sameSite: 'lax'}

        if(remember){
            let date = new Date();
            date.setTime(date.getTime() + expiredAt);
            options.expires =  date;
        }    

        CookieService.set('token', data.results.access_token, options);

        let name = data.results.data.first_name + ' ' + data.results.data.last_name;

        let user = {
            'name': name,
            'role': data.results.data.role,
            'avatar': data.results.data.avatar,
            'uuid': data.results.data.uuid,
        };

        CookieService.set('user', JSON.stringify(user), options);
        
        return true;
    }

    async doLogOut(){

        const logoutURL = "/logout";                   

        try{
    
            const response =  await AxiosServices.post(logoutURL);

            console.log(response);            

            this.onLogoutSuccess();             

            return response.data;

        }catch(error){

            this.onLogoutSuccess();

            return error.response.data;            

        }         
    }

    onLogoutSuccess = () => {
        CookieService.remove('token');
        CookieService.remove('user');
    }


}


export default new AuthApi();
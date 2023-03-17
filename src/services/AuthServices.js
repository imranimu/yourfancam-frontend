import CookieService from './CookieServices';

class AuthServices{

    constructor(){

        const token = CookieService.get('token');

        (token) ? this.authenticated = true : this.authenticated = false;

        this.token = token;
    }

    isAuthenticated(){
        return this.authenticated; 
    }

    getUser(){
        let user = CookieService.get('user');
        if(user){
            return user;
        }else{
            return false; 
        }               
    } 

    getAccessToken(){
        return  CookieService.get('token');
    }
    
    // getUser(){
    //     return  CookieService.get('user');
    // }


}

export default new AuthServices();
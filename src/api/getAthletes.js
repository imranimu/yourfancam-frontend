import AxiosServices from "../services/AxiosServices";

class AthletesApi {    

    /*
    ## Get All Athletes     
    ********************************/
    async getAthletes(number_of_athlete){
        
        const athletesApiURL = '/athletes?number_of_athlete='+number_of_athlete;        

        try{

            const response =  await AxiosServices.get(athletesApiURL);
            
            return response.data.results.data;

        }catch(error){

            return error.response.data;

        }
    }

    async getFeaturedAthletes(number_of_athlete){
        
        const athletesApiURL = '/athletes?order_by=Featured&number_of_athlete='+number_of_athlete;        

        try{

            const response =  await AxiosServices.get(athletesApiURL);
            
            return response.data.results.data;

        }catch(error){

            return error.response.data;

        }
    }

    async AthletesSearch(data){
                
        const athletesApiURL = '/athletes?search='+data+'&number_of_athlete=5';

        try{

            const response =  await AxiosServices.get(athletesApiURL);
            
            return response.data.results.data;

        }catch(error){

            return error.response.data;

        }
    }



}


export default new AthletesApi();
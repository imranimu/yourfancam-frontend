import AxiosServices from '../services/AxiosServices';

class CategoriesApi {

    async getCategories(){       

        const CategoriesURL = "/categories";

        try{

            const response =  await AxiosServices.get(CategoriesURL);             

            return response.data;

        }catch(error){
            
            return error.response.data;

        }  

    }
    
}

export default new CategoriesApi();
import axios from 'axios';

class CarsService {

    async filtrByBodyType(value) {
        try {
            console.log(value);
           
            const response = await axios.get(`http://localhost:8080/car/bodyType/${value}`);
            console.log(response);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    
    async filtr(value) {
        try {
            let request ={} ;
            if(value.productionYear){
                request = {
                    brandId: value.selectBrand,
                    modelId: value.selectModel,
                    minAmount: value.minAmount,
                    maxAmount: value.maxAmount,
                    productionYear: value.productionYear.year()
                }
            }
            else{
                request = {
                    brandId: value.selectBrand,
                    modelId: value.selectModel,
                    minAmount: value.minAmount,
                    maxAmount: value.maxAmount,
                    productionYear: 2000
                }
            }
            // console.log(value);
            console.log(request)
            const response = await axios.post('http://localhost:8080/car/filtr', request);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
}
export default new CarsService();
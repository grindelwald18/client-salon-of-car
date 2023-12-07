import axios from 'axios';

class BrandsService {

    async filtr(value) {
        try {
            // console.log(value);
            const request = {
                brandId: value.selectBrand,
                modelId: value.selectModel,
                amount: value.amount,
                productionYear: value.productionYear.year()
            }
            console.log(request)
            const response = await axios.post('http://localhost:8080/car/filtr', request);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }

}
export default new BrandsService();
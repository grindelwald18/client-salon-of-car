import axios from 'axios';

class BrandsService {

    async getBrands() {
        try {
            const response = await axios.get('http://localhost:8080/brand');
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
}
export default new BrandsService();
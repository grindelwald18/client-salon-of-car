import axios from 'axios';

class ModelService {

    async getModelsByBrandId(id) {
        try {
            const response = await axios.get(`http://localhost:8080/model?brand-id=${id}`);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
}
export default new ModelService();
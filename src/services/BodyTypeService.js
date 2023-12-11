import axios from 'axios';

class BodyTypeService {

    async getBodyType() {
        try {
            const response = await axios.get('http://localhost:8080/bodyType');
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
}
export default new BodyTypeService();
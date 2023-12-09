import axios from 'axios';

class BasketService {

    async getBasket() {
        try {
            const userId = JSON.parse(localStorage.getItem('userId'));
            const response = await axios.get(`http://localhost:8080/basket/${userId}`);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
}
export default new BasketService();
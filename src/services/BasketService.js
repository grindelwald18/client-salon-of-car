import axios from 'axios';
import userService from './UserService';



class BasketService {
    async getBasket() {
        try {
            const user = await JSON.parse(localStorage.getItem('user'));
           
              const response = await axios.get(`http://localhost:8080/basket/${user.id}`);
              return response.data;
          
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    async deleteBasket(carId) {
        try {
          const user = await JSON.parse(localStorage.getItem('user'));
          const response = await axios.delete(`http://localhost:8080/basket/del-car?basketId=${user.id}&carId=${carId}`);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    async addCarBasket(carId) {
        try {
          const basketId = await userService.getId(); // Ожидание выполнения асинхронной операции
          const request = {
            basketId: basketId,
            carId: carId,
          };
      
          const response = await axios.post('http://localhost:8080/basket/add-car', request);
          return response.data;
        } catch (error) {
          // console.log(error);
          throw error;
        }
      }

}
export default new BasketService();
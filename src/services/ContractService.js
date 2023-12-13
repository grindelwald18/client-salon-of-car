import axios from 'axios';
import userService from './UserService';

class ContractService {

    async addContract(carId) {

        try {
            const userId = await userService.getId();

            const request = {
                userId: userId,
                carId: carId,
                sellerId: 1,
                totalAmount: 0,
                registrationDate: new Date().toISOString().split('T')[0],                
                status: "в обработке"
            };
            console.log(request);
            const response = await axios.post(`http://localhost:8080/contract/add`, request);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    async getContractByUserId() {

        try {
            const userId = await userService.getId();
            const response = await axios.get(`http://localhost:8080/contract?user-id=${userId}`);
            // console.log(response)
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    async getNotApprovedContracts() {

        try {
            const response = await axios.get(`http://localhost:8080/contract/not-approved`);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    async getApprovedContracts() {

        try {
            const seller = await JSON.parse(localStorage.getItem('user'));

            const response = await axios.get(`http://localhost:8080/contract/approved?seller-id=${seller.id}`);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    // async getUserContracts() {

    //     try {
    //         const userId = await JSON.parse(localStorage.getItem('user'));
    //         const response = await axios.get(`http://localhost:8080/contract?user-id=${userId.id}`);
    //         return response.data;
    //     } catch (error) {
    //         // console.log(error);
    //         throw error;
    //     }
    // }
    async approveContract(contract) {

        try {

            const seller = await JSON.parse(localStorage.getItem('user'));
            const request = {
                totalAmount: contract.totalAmount,
                sellerId: seller.id,
                userId:contract.user.id,
                carId:contract.car.id,
                registrationDate: new Date().toISOString().split('T')[0],
                status: "одобрен"
            };
            const response = await axios.put(`http://localhost:8080/contract/${contract.id}`,request);
            return response.data;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }


}
export default new ContractService();
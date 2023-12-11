import axios from 'axios';



class UserService {
    async getId() {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            return user.id;
        } catch (error) {
            throw new Error(`Error sending request: ${error.message}`);
        }
    }
    
   


}
export default new UserService();
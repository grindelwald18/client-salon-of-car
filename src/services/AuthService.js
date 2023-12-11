import axios from 'axios';



class AuthService {
    async Authentication(value) {
        try {
            const response = await axios.post('http://localhost:8080/authentication/authentication', value);
            localStorage.setItem('jwtToken', JSON.stringify(response.data.token));
            console.log(response.data.user)
            localStorage.setItem('user', JSON.stringify(response.data.user));
            return response.data;
        } catch (error) {
            throw new Error(`Error sending request: ${error.message}`);
        }
    }
    
   


}
export default new AuthService();
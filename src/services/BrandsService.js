import axios from 'axios';

class BrandsTable {

    async getBrands() {
        try {
            const response = await axios.get('http://localhost:8080/brands');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}

export default new BrandsTable();
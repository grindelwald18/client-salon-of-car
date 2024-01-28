import axios from 'axios';

class ModelService {

    async getModelsByBrandId(id) {
        try {
            const response = await axios.get(`http://localhost:8080/model?brand-id=${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }



    async fetchModels() {
        try {
            const response = await axios.get('http://localhost:8080/models');
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async deleteModel(id) {
        try {
            const response = await axios.delete(`http://localhost:8080/models/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async updateModel(model) {
        try {
            const response = await axios.put(`http://localhost:8080/models/${model.id}`, model);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async saveModel(model) {
        try {
            const response = await axios.post(`http://localhost:8080/models/create`, model);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async fetchModelsByBrand(brand) {
        try {
            const response = await axios.get(`http://localhost:8080/models?brand=${brand}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}



export default new ModelService();
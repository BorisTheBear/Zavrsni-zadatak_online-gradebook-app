import HttpService from "./HttpService";

class GradebookService extends HttpService {
    async getAll() {
        const { data } = await this.client.get('/gradebooks');
        return data;
    }

    async get(id) {
        const { data } = await this.client.get(`gradebooks/${id}`);
        return data;
    }
}

const gradebookService = new GradebookService();
export default gradebookService;
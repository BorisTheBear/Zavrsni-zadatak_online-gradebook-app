import HttpService from "./HttpService";

class GradebookService extends HttpService {
    async getAll({page, name}) {
        const params = new URLSearchParams([['page', page], ['name', name]]);
        const { data } = await this.client.get('/gradebooks', {params});
        return {...data, searchTerm: name};
    }

    async get(id) {
        const { data } = await this.client.get(`gradebooks/${id}`);
        return data;
    }
}

const gradebookService = new GradebookService();
export default gradebookService;
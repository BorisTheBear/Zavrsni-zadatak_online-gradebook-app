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

    async create(newGradebook) {
        const { data } = await this.client.post('/gradebooks', newGradebook);
        return data;
    }

    async addStudent(newStudent) {
        const { data } = await this.client.post('/students', newStudent);
        return data;
    }

    async edit(id, gradebook) {
        const { data } = await this.client.put(`gradebooks/${id}`, gradebook);
        return data;
    }

    async delete(id) {
        const { data } = await this.client.delete(`gradebooks/${id}`);
        return data;
    }
}

const gradebookService = new GradebookService();
export default gradebookService;
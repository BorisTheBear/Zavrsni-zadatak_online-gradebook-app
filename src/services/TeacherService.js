import HttpService from "./HttpService";

class TeacherService extends HttpService {
    async getAll({name, lastName}) {
        const params = new URLSearchParams([['first_name', name], ['last_name', lastName]]);
        const { data } = await this.client.get('/teachers', {params});
        return {...data, searchTerm: name};
    }

    async get(id) {
        const { data } = await this.client.get(`teachers/${id}`);
        return data;
    }
}

const teacherService = new TeacherService();
export default teacherService;
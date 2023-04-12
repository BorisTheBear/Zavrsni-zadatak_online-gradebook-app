import HttpService from "./HttpService";

class TeacherService extends HttpService {
    async getAll({page, name}) {
        const params = new URLSearchParams();
        params.set('page', page);
        params.set('name', name);
        const { data } = await this.client.get('/teachers', {params});
        return data;
    }

    async get(id) {
        const { data } = await this.client.get(`teachers/${id}`);
        return data;
    }

    async getMe() {
        const { data } = await this.client.get('/me');
        return data;
    }

    async getTeachersForSelectList() {
        const { data } = await this.client.get('/teachers/all');
        return data;
    }
}

const teacherService = new TeacherService();
export default teacherService;
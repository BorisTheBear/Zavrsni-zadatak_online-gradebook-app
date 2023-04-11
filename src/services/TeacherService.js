import HttpService from "./HttpService";

class TeacherService extends HttpService {
    async getAll() {
        const { data } = await this.client.get('/teachers');
        return data;
    }

    async get(id) {
        const { data } = await this.client.get(`teachers/${id}`);
        return data;
    }

    async getMe() {
        const { data } = await this.client.get('/me');
        console.log(data)
        return data;
    }
}

const teacherService = new TeacherService();
export default teacherService;
import HttpService from "./HttpService";

class TeacherService extends HttpService {
    async getAll() {
        const { data } = await this.client.get('/teachers');
        return data;
    }

    get(id) { //dodati async ispred get
        // const { data } = await this.client.get(`teachers/${id}`);
        // return data;
        const teachers = this.teachersArray();
        return teachers.find(teacher => teacher.id = id);
    }

    teachersArray() {
        return [
            {
                id: 1,
                gradebook: "VIII-2",
                name: "Marija Tir-Borlja",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 2,
                gradebook: "VII-3",
                name: "Florika Dadic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 3,
                gradebook: "VI-4",
                name: "Mirjana Tomanic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 4,
                gradebook: "VII-1",
                name: "Eva Videc",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 5,
                gradebook: "V-1",
                name: "Irina Markovic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 6,
                gradebook: "VI-2",
                name: "Gordana Milutinovic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 7,
                gradebook: "VII-7",
                name: "Dusan Mujovic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 8,
                gradebook: "V-5",
                name: "Mirjana Mitrovic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 9,
                gradebook: "VI-3",
                name: "Mirjana Pavlovic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 10,
                gradebook: "VIII-1",
                name: "Vladimir Popovic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            },
            {
                id: 11,
                gradebook: "VII-6",
                name: "Dusan Petkovic",
                image_url: "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183"
            }];
    }
}

const teacherService = new TeacherService();
export default teacherService;
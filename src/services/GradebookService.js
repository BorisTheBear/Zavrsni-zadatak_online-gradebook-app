import HttpService from "./HttpService";

class GradebookService extends HttpService {
    async getAll() {
        const { data } = await this.client.get('gradebooks');
        return data;
    }

    async get(id) {
        const { data } = await this.client.get(`gradebooks/${id}`);
        return data;
    }

    gradebookArray() {
        return [
        {
            id: 1,
            name: "VIII-2",
            teacher: "Marija Tir-Borlja",
            created_at: "20.8.2005."
        },
        {
            id: 2,
            name: "VII-3",
            teacher: "Florika Dadic",
            created_at: "22.8.2006."
        },
        {
            id: 3,
            name: "VI-4",
            teacher: "Mirjana Tomanic",
            created_at: "22.8.2007."
        },
        {
            id: 4,
            name: "VII-1",
            teacher: "Eva Videc",
            created_at: "15.8.2006."
        },
        {
            id: 5,
            name: "V-1",
            teacher: "Irina Markovic",
            created_at: "25.8.2008."
        },
        {
            id: 6,
            name: "VI-2",
            teacher: "Gordana Milutinovic",
            created_at: "23.8.2007."
        },
        {
            id: 7,
            name: "VII-7",
            teacher: "Dusan Mujovic",
            created_at: "29.8.2006."
        },
        {
            id: 8,
            name: "V-5",
            teacher: "Mirjana Mitrovic",
            created_at: "20.8.2008."
        },
        {
            id: 9,
            name: "VI-3",
            teacher: "Mirjana Pavlovic",
            created_at: "18.8.2007."
        },
        {
            id: 10,
            name: "VIII-1",
            teacher: "Vladimir Popovic",
            created_at: "26.8.2005."
        },
        {
            id: 11,
            name: "VII-6",
            teacher: "Dusan Petkovic",
            created_at: "10.8.2006."
        }];
    }
}

const gradebookService = new GradebookService();
export default gradebookService;
import { createSlice } from "@reduxjs/toolkit";
import gradebookService from "../../services/GradebookService";

const gradebooksSlice = createSlice({
    name: "gradebooks",
    initialState: {
        data: []
    },
    reducers: {
        addGradebook: (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const { addGradebook } = gradebooksSlice.actions;
export default gradebooksSlice.reducer;
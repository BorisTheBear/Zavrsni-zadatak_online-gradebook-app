import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
    name: "teachers",
    initialState: {
        data: []
    },
    reducers: {
        addTeacher: (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const { addTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;
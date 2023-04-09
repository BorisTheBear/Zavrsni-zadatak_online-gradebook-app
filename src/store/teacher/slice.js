import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    performGetAllTeachers: () => {},
    performGetSingleTeacher: () => {}
}

const teachersSlice = createSlice({
    name: "teachers",
    initialState: {
        data: [],
        single_teacher: []
    },
    reducers: {
        setTeachers: (state, action) => {
            state.data = action.payload.data;
        },
        setSingleTeacher: (state, action) => {
            state.single_gradebook = action.payload;
        },
        ...middlewareActions
    }
});

export const { setTeachers, setSingleTeacher, performGetAllTeachers, performGetSingleTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;
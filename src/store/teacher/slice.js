import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    performGetAllTeachers: () => {},
    performGetSingleTeacher: () => {},
    performGetTeachersForSelectList: () => {}
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
            state.single_teacher = action.payload;
        },
        ...middlewareActions
    }
});

export const { setTeachers, setSingleTeacher, performGetAllTeachers, performGetSingleTeacher, performGetTeachersForSelectList } = teachersSlice.actions;
export default teachersSlice.reducer;
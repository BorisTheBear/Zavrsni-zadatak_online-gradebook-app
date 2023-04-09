import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    performGetAllGradebooks: () => {},
    performGetSingleGradebook: () => {}
}

const gradebooksSlice = createSlice({
    name: "gradebooks",
    initialState: {
        data: {},
        single_gradebook: []
    },
    reducers: {
        setGradebooks: (state, action) => {
            if(state.data.data && state.data.searchTerm === action.payload.searchTerm) {
                action.payload.data = [...state.data.data, ...action.payload.data];
            }
            state.data = action.payload;
        },
        setSingleGradebook: (state, action) => {
            state.single_gradebook = action.payload;
        },
        ...middlewareActions
    }
});

export const { setGradebooks, setSingleGradebook, performGetAllGradebooks, performGetSingleGradebook } = gradebooksSlice.actions;
export default gradebooksSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from "./teacher/teachersSlice";
import gradebooksReducer from "./gradebook/gradebooksSlice";

const store = configureStore({
    reducer: {
        teachers: teachersReducer,
        gradebooks: gradebooksReducer
    }
});

export default store;
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import teachersReducer from "./teacher/slice";
import gradebooksReducer from "./gradebook/slice";
import createSagaMiddleware from "@redux-saga/core";
import { watchGetAllGradebooks, watchGetSingleGradebook, watchResetGradebookState } from "./gradebook/saga";
import { watchGetAllTeachers, watchGetSingleTeacher } from "./teacher/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        teachers: teachersReducer,
        gradebooks: gradebooksReducer
    },
    middleware: (getDefaultMiddleware) => {
        return [
            ...getDefaultMiddleware(),
            sagaMiddleware
        ]
    }
});

sagaMiddleware.run(watchGetAllGradebooks);
sagaMiddleware.run(watchGetSingleGradebook);
sagaMiddleware.run(watchGetAllTeachers);
sagaMiddleware.run(watchGetSingleTeacher);
sagaMiddleware.run(watchResetGradebookState);

export default store;
import { call, put, takeLatest } from "redux-saga/effects";
import gradebookService from "../../services/GradebookService";
import { setGradebooks, setSingleGradebook, performGetAllGradebooks, performGetSingleGradebook } from "./slice";

function* getAllGradebooksHandler(action) {
    try {
        const data = yield call([gradebookService, gradebookService.getAll], action.payload);
        yield put(setGradebooks(data));
    } catch (error) {
        console.log('error: ', error);
    }
}

function* getSingleGradebookHandler(action) {
    try {
        const data = yield call(gradebookService.get, action.payload);
        yield put(setSingleGradebook(data));
    } catch (error) {
        console.log('error: ', error);
    }
}

export function* watchGetAllGradebooks() {
    yield takeLatest(performGetAllGradebooks.type, getAllGradebooksHandler);
}

export function* watchGetSingleGradebook() {
    yield takeLatest(performGetSingleGradebook.type, getSingleGradebookHandler);
}
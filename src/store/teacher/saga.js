import { call, put, takeLatest } from "redux-saga/effects";
import teacherService from "../../services/TeacherService";
import { setTeachers, setSingleTeacher, performGetAllTeachers, performGetSingleTeacher } from "./slice";

function* getAllTeachersHandler(action) {
    try {
        const data = yield call(teacherService.getAll, action.payload);
        yield put(setTeachers(data));
    } catch (error) {
        console.log('error: ', error);
    }
}

function* getSingleTeacherHandler(action) {
    try {
        const data = yield call(teacherService.get, action.payload);
        yield put(setSingleTeacher(data));
    } catch (error) {
        console.log('error: ', error);
    }
}

export function* watchGetAllTeachers() {
    yield takeLatest(performGetAllTeachers.type, getAllTeachersHandler);
}

export function* watchGetSingleTeacher() {
    yield takeLatest(performGetSingleTeacher.type, getSingleTeacherHandler);
}
import { call, put, takeLatest } from "redux-saga/effects";
import teacherService from "../../services/TeacherService";
import { setTeachers, setSingleTeacher, performGetAllTeachers, performGetSingleTeacher, performGetTeachersForSelectList } from "./slice";

function* getAllTeachersHandler(action) {
    try {
        const data = yield call([teacherService, teacherService.getAll], action.payload);
        yield put(setTeachers(data));
    } catch (error) {
        console.log('error: ', error);
    }
}

function* getSingleTeacherHandler(action) {
    try {
        const teacher = yield call([teacherService, teacherService.get], action.payload);
        yield put(setSingleTeacher(teacher));
    } catch (error) {
        console.log('error: ', error);
    }
}

function* getTeachersForSelectList(action) {
    try {
        const data = yield call([teacherService, teacherService.getTeachersForSelectList], action.payload);
        const allTeachers = { data: data };
        yield put(setTeachers(allTeachers));
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

export function* watchGetTeachersForSelectList() {
    yield takeLatest(performGetTeachersForSelectList.type, getTeachersForSelectList);
}
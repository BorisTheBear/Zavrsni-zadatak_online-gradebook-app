export const teachersSelector = (state) => {
    return state.teachers.data;
}

export const singleTeacherSelector = (state) => {
    return state.teachers.single_teacher;
}
export const teachersSelector = (state) => {
    return {
        teachers: state.teachers.data,
        single_teacher: state.teachers.single_teacher
    }
}
export const gradebooksSelector = (state) => {
    return state.gradebooks.data;
}

export const singleGradebookSelector = (state) => {
    return state.gradebooks.single_gradebook;
}
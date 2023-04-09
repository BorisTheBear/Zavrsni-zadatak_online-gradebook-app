export const gradebooksSelector = (state) => {
    return {
        gradebooks: state.gradebooks.data,
        single_gradebook: state.gradebooks.single_gradebook
    }
}
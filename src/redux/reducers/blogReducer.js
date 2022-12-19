import { GET_BLOGS, SORT_BLOGS } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        case SORT_BLOGS:
            if (action.payload === "last-upload") {
                console.log(state.blogs);
                return {
                    ...state,
                    blogs: state.blogs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                }
            }
            if (action.payload === "first-upload") {
                return {
                    ...state,
                    blogs: state.blogs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                }
            }
            break;
        default:
            return state;
    }
}

export default blogReducer;
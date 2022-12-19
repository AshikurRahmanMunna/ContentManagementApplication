import { GET_BLOGS } from "../actionTypes/actionTypes"

export const getBlogs = (blogs) => {
    return {
        type: GET_BLOGS,
        payload: blogs
    }
}
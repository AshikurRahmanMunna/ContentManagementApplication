import { GET_BLOGS, SORT_BLOGS } from "../actionTypes/actionTypes"

export const getBlogs = (blogs) => {
    return {
        type: GET_BLOGS,
        payload: blogs
    }
}

export const sortBlogs = (sort) => {
    return {
        type: SORT_BLOGS,
        payload: sort
    }
}
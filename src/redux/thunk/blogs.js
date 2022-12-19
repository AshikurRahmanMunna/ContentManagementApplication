import axios from "axios"
import { getBlogs } from "../actions/blogActions";

export const loadBlogs = () => {
    return async (dispatch) => {
        const blogs = await axios.get("http://localhost:5000/api/blogs");
        if (blogs.status === 200) {
            dispatch(getBlogs(blogs.data.blogs));
        }
    }
}
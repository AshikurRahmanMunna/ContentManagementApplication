import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortBlogs } from '../../redux/actions/blogActions';
import { loadBlogs } from '../../redux/thunk/blogs';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogs());
    }, [dispatch])
    const [sortBy, setSortBy] = useState("last-upload")
    return (
        <div className='container mx-auto px-16'>
            <div>
                <h2 className='text-center text-6xl font-satisfy'>Blo<span className='text-primary'>gs</span></h2>
            </div>
            <div className='flex items-center mt-5 gap-x-3 justify-end'>
                <p>Sort By: </p>
                <button
                    onClick={() => {
                        setSortBy("last-upload")
                        dispatch(sortBlogs("last-upload"))
                    }}
                    className={`btn btn-sm ${sortBy === "last-upload" ? "btn-primary" : "btn-outline"}`}
                >
                    Last upload
                </button>
                <button
                    onClick={() => {
                        setSortBy("first-upload")
                        sortBlogs("first-upload")
                    }} className={`btn btn-sm ${sortBy === "first-upload" ? "btn-primary" : "btn-outline"}`}
                >
                    First upload
                </button>
            </div>
            <div className='my-5 grid grid-cols-3 gap-x-3'>
                {
                    blogs.map(b => <BlogCard key={b._id} blog={b} />)
                }
            </div>
        </div>
    );
};

export default Blogs;
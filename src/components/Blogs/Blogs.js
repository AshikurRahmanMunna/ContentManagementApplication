import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBlogs } from '../../redux/thunk/blogs';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogs());
    }, [dispatch])
    return (
        <div className='container mx-auto px-16'>
            <div>
                <h2 className='text-center text-6xl font-satisfy'>Blo<span className='text-primary'>gs</span></h2>
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
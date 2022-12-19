import React from 'react';
import Moment from 'react-moment';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';

const BlogCard = ({ blog }) => {
    const { image: { url }, title, createdAt, reacts, views, _id } = blog;
    const viewStyle = {
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "2px 5px"
    }
    const reactStyle = {
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "2px 5px"
    }
    return (
        <Link to={`/blogs/${_id}`} className="hover:shadow-lg duration-300 rounded-md p-5 relative">
            <div className='w-full h-[200px]'>
                <img onError={(e) => {
                    e.target.onError = null;
                    e.target.src = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                }} className='w-full h-full object-cover rounded-md' src={url} alt={`Blog ${_id}`} />
            </div>
            <div>
                <h2 className='text-2xl mt-3'>{title}</h2>
                <p className='text-lg'><small>{blog.blog.length > 200 ? `${blog.blog.slice(0, 200)}...` : blog.blog}</small></p>
                <p className='flex items-center text-xs mt-3'>
                    <Moment format='DD/MM/YYYY'>{createdAt}</Moment>
                    <BsDot />
                    <Moment fromNow>{createdAt}</Moment>
                </p>
            </div>
            <div className='flex items-center absolute top-7 right-7 gap-x-3'>
                <div style={viewStyle}>
                    <AiOutlineEye fontSize={25} className="mr-1" />{views}
                </div>
                <div style={reactStyle}>
                    <AiOutlineHeart fontSize={25} className="mr-1" />{reacts}
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
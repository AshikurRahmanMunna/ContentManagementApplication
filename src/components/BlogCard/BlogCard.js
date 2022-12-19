import React from 'react';
import Moment from 'react-moment';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { image: { url }, title, createdAt, reacts, views, _id } = blog;
    return (
        <Link to={`/blogs/${_id}`} className="hover:shadow-lg duration-300 rounded-md p-5">
            <div className='w-full h-[200px]'>
                <img onError={(e) => {
                    e.target.onError = null;
                    e.target.src = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                }} className='w-full h-full object-cover rounded-md' src={url} alt={`Blog ${_id}`} />
            </div>
            <div>
                <h2 className='text-2xl mt-3'>{title}</h2>
                <p className='flex items-center text-xs'>
                    <Moment format='DD/MM/YYYY'>{createdAt}</Moment>
                    <BsDot />
                    <Moment fromNow>{createdAt}</Moment>
                </p>
            </div>
        </Link>
    );
};

export default BlogCard;
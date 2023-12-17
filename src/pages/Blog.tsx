import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../constants/api';
import { useBlog } from '../context/BlogContext';

export type Post = {
    title: string;
    id: string;
    body: string;
}

const Blog = () => {
    const { posts } = useBlog();

    return (
        <div>
            {posts.map(post => (
                <div>
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blog;


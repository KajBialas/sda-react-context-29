import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../constants/api';

export type Post = {
    title: string;
    id: string;
    body: string;
}

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

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


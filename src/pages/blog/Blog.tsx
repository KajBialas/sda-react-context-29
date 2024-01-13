import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants/api';
import { useBlog } from '../../context/blog/BlogContext';
import styles from './blog.style.module.css';

export type Post = {
    title: string;
    id: string;
    body: string;
}

const Blog = () => {
    const { posts } = useBlog();

    return (
        <section className={styles.blogPostSection}>
            <h1>Posty bloga:</h1>
            <div className={styles.blogPostList}>
                {posts.map(post => (
                    <div className={styles.blogPostContainer}>
                        <h2 className={styles.blogPostTitle}>
                            {post.title}
                        </h2>
                        <Link to={`/blog/${post.id}`}>
                            Czytaj więcej...
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog;


import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { API_URL } from '../../constants/api';
import { Post } from '../blog/Blog';
import styles from './postDetails.style.module.css';

const PostDetails = () => {
    const { id } = useParams();
    const [ postDetails, setPostDetails] = useState<Post | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => setPostDetails(data))
    }, [id]);

    return (<section className={styles.postDetailsContainer}>
            <h1 className={styles.postDetailsTitle}>{postDetails && postDetails.title}</h1>
            <p>{postDetails && postDetails.body}</p>
    </section>)
}

export default PostDetails;
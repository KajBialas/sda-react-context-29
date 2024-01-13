import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { API_URL } from '../../constants/api';
import { Post } from '../blog/Blog';
import styles from './postDetails.style.module.css';

const PostDetails = () => {
    const { id } = useParams();
    const [ postDetails, setPostDetails] = useState<Post | null>(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);

                if (!response.ok) {
                    throw new Error('HTTP error');
                }

                const data = await response.json();
                setPostDetails(data);

            } catch (error) {
                setError('Error');
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();

    }, [id]);

    if (isLoading) {
        return (<div>Ładowanie danych:</div>)
    }

    if (error) {
        return (<div>Błąd pobierania danych</div>)
    }

    return (<section className={styles.postDetailsContainer}>
            <h1 className={styles.postDetailsTitle}>{postDetails && postDetails.title}</h1>
            <p>{postDetails && postDetails.body}</p>
    </section>)
}

export default PostDetails;
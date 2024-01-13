import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { API_URL } from '../../constants/api';
import { Post } from '../blog/Blog';

const PostDetails = () => {
    const { id } = useParams();
    const [ postDetails, setPostDetails] = useState<Post | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => setPostDetails(data))
    }, [id]);

    return (<div>
        <h1>Szczegóły postu: </h1>
        <div>
            <h2>{postDetails && postDetails.title}</h2>
            <p>{postDetails && postDetails.body}</p>
        </div>
    </div>)
}

export default PostDetails;
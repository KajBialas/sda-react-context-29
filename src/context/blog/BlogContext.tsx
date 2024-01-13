import { useState, useEffect, useContext, createContext } from "react";
import { API_URL } from "../../constants/api";
export type Post = {
    title: string;
    id: string;
    body: string;
}

export type BlogContextType = {
    posts: Post[];
    addPost: (newPost: Post) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

type BlogProviderProps = {
    children: React.ReactNode;
}

export const useBlog = () => {
    const context = useContext(BlogContext);

    if (!context) {
        throw new Error('useContext');
    }
    return context;
}

export const BlogProvider = ({children}: BlogProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const addPost = (newPost: Post) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
        // setPosts([newPost, ...posts]);
    }

    return (
        <BlogContext.Provider value={{posts, addPost}}>
            {children}
        </BlogContext.Provider>)
}
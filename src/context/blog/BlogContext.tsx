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
    isLoading: boolean;
    error: string | null;
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
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error('HTTP error');
                }

                const data = await response.json();
                setPosts(data);

            } catch (error) {
                setError('Error');
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();

    }, []);

    const addPost = (newPost: Post) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
        // setPosts([newPost, ...posts]);
    }

    return (
        <BlogContext.Provider value={{posts, addPost, isLoading, error}}>
            {children}
        </BlogContext.Provider>)
}
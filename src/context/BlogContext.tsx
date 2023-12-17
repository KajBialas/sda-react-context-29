import { useState, useEffect, useContext, createContext } from "react";
import { API_URL } from "../constants/api";
export type Post = {
    title: string;
    id: string;
    body: string;
}

export type BlogContextType = {
    posts: Post[];
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

    return (
        <BlogContext.Provider value={{posts}}>
            {children}
        </BlogContext.Provider>)
}
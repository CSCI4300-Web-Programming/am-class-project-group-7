"use client";

import { useState } from "react";

type NewPost = {
    title: string;
    description: string;
};

const emptyPost: NewPost = { title: "", description: "" };

export default function AddPostForm() {
    const [newPost, setNewPost] = useState<NewPost>(emptyPost);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted post:", newPost);
        setNewPost(emptyPost);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            placeholder="Post Title"
            required
            />
            <textarea
            name="description"
            value={newPost.description}
            onChange={handleChange}
            placeholder="Post description"
            required
            />
            <button type="submit">Add Post</button>
        </form>
    );
}
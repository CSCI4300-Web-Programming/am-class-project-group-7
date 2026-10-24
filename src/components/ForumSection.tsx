"use client";

import { useState } from "react";
import ForumPost, { ForumPostData } from "./ForumPost";
import AddPostForm from "./AddForumPosts";
import bulldogImage from "../../images/bulldog_glasses_red.jpg";

const initialPosts: ForumPostData[] = [
  {
    id: "welcome-post",
    title: "Example Post",
    description: "This is what a description will look like",
    imageSrc: bulldogImage,
    imageAlt: "Bulldog",
  },
  {
    id: "intro-post",
    title: "Introduce yourself",
    description: "Tell us a bit about who you are.",
    imageSrc: bulldogImage,
    imageAlt: "Bulldog",
  },
  {
    id: "questions-post",
    title: "Ask your questions here",
    description: "No question is too small.",
    imageSrc: bulldogImage,
    imageAlt: "Bulldog",
  },
];

type ForumSectionProps = {
    canPost: boolean;
};

export default function ForumSection({ canPost }: ForumSectionProps) {
    const [posts, setPosts] = useState<ForumPostData[]>(initialPosts);

    const handleAddPost = (title: string, description: string) => {
        const newPost: ForumPostData = {
            id: crypto.randomUUID(),
            title,
            description,
            imageSrc: bulldogImage,
            imageAlt: "Bulldog"
        };
        setPosts([...posts, newPost]);
    };

    return (
        <>
        {posts.map((post) => (
            <ForumPost key={post.id} post={post} />
        ))}
        {canPost && <AddPostForm onAddPost={handleAddPost} />}
        </>
    );
}
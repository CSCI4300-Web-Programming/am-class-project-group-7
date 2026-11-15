"use client";

import { useEffect, useState } from "react";
import ForumPost, { ForumPostData } from "./ForumPost";
import AddPostForm from "./AddForumPosts";
import bulldogImage from "../../images/bulldog_glasses_red.jpg";

type ForumSectionProps = {
    canPost: boolean;
};

function withImage(post: ForumPostData): ForumPostData {
  return { ...post, imageSrc: bulldogImage, imageAlt: "Bulldog"};
}

export default function ForumSection({ canPost }: ForumSectionProps) {
    const [dbPosts, setDbPosts] = useState<ForumPostData[]>([]);

    useEffect(() => {
      fetch("api/posts")
        .then((res) => res.json())
        .then((data: ForumPostData[]) => setDbPosts(data.map(withImage)))
        .catch((err) => console.error("Failed to load posts:", err));
    }, []);

    const handleAddPost = async (title: string, content: string) => {
      const res = await fetch ("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        return;
      }
      const created: ForumPostData = await res.json();
      setDbPosts((prev) => [...prev, withImage(created)]);
    };

    const handleDelete = async (id: string) => {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setDbPosts((prev) => prev.filter((p) => p.id !== id));
      }
    };

    return (
      <>
        {dbPosts.map((post) => (
          <ForumPost
            key={post.id}
            post={post}
            onDelete={canPost ? handleDelete : undefined}
            />
        ))}
        {canPost && <AddPostForm onAddPost={handleAddPost} />}
      </>
    );
  }
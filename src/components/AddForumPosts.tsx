"use client";

import { useState } from "react";

type NewPost = {
    title: string;
    content: string;
};

type AddFormPostsProps = {
    onAddPost: (title: string, content: string) => void;
    // Optional: pre-fill the form (e.g. when editing an existing post).
    initialPost?: NewPost;
    // Optional: text for the submit button. Defaults to "Post".
    submitLabel?: string;
}

const emptyPost: NewPost = { title: "", content: "" };

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "1.25rem 2rem",
  background: "#ba0c2f",
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  boxSizing: "border-box",
  fontSize: "1rem",
  fontFamily: "inherit",
  outline: "none",
};

export default function AddPostForm({
    onAddPost,
    initialPost,
    submitLabel = "Post",
}: AddFormPostsProps) {
    const [newPost, setNewPost] = useState<NewPost>(initialPost ?? emptyPost);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted post:", newPost);
        onAddPost(newPost.title, newPost.content);
        // Only clear the form when creating; when editing, keep the values shown.
        if (!initialPost) setNewPost(emptyPost);
    };
    

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "320px",
        margin: "2rem auto",
      }}
    >
      <input
        className="forum-field"
        type="text"
        name="title"
        value={newPost.title}
        onChange={handleChange}
        placeholder="Post Title"
        required
        style={fieldStyle}
      />
      <textarea
        className="forum-field"
        name="content"
        value={newPost.content}
        onChange={handleChange}
        placeholder="Post Body"
        required
        rows={10}
        style={{ ...fieldStyle, resize: "vertical", borderRadius: "1.5rem" }}
      />
      <button
        type="submit"
        style={{
          ...fieldStyle,
          cursor: "pointer",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textAlign: "center",
        }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
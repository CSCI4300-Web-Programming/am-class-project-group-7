"use client";

import AddPostForm from "./AddForumPosts";

export default function AddPostPageContent() {
  const handleAddPost = (title: string, content: string) => {
    console.log("Post ready to save:", { title, content });
  };

  return (
    <main style={{ flex: 1 }}>
      <div className="bground"></div>
      <AddPostForm onAddPost={handleAddPost} />
    </main>
  );
}

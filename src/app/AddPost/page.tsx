"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AddPostForm from "../../components/AddForumPosts";

export default function AddPostPage() {
  const handleAddPost = (title: string, description: string) => {
    console.log("Post ready to save:", { title, description });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar loggedIn={true} />
      <main style={{ flex: 1 }}>
        <div className="bground"></div>
        <AddPostForm onAddPost={handleAddPost} />
      </main>
      <Footer />
    </div>
  );
}
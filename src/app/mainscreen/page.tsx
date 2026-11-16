import { Suspense } from "react";
import { connection } from "next/server";
import { auth } from "@/auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForumPost, { ForumPostData } from "../../components/ForumPost";
import AddPostForm from "@/src/components/AddForumPosts";
import bulldogImage from "../../../images/bulldog_glasses_red.jpg";
import Link from "next/link";
import ForumSection from "../../components/ForumSection";

// Reads the session, so it must run at request time (inside <Suspense>).
async function ForumForUser() {
  await connection();
  const session = await auth();
  const isLoggedIn = Boolean(session?.user);

  return <ForumSection canPost={isLoggedIn} />;
}

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <div
          className="bground"
          style={{ backgroundImage: "url('/MainScreen.png')", alignItems: "center", justifyContent: "center", display: "flex" }}
        ></div>
{/*
        {isLoggedIn && (
          <Link
            href="/AddPost"
            className="get-started-link"
            style={{
              display: "block",
              width: "fit-content",
              margin: "1.5rem auto",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#ba0c2f",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Make a Post
          </Link>
         
        )}
 */}
        <Suspense fallback={null}>
          <ForumForUser />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

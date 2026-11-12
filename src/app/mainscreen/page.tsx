import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForumPost, { ForumPostData } from "../../components/ForumPost";
import AddPostForm from "@/src/components/AddForumPosts";
import bulldogImage from "../../../images/bulldog_glasses_red.jpg";
import Link from "next/link";
import ForumSection from "../../components/ForumSection";

const isLoggedIn: boolean = false;


export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar loggedIn={isLoggedIn}/>
      <div
        className="bground"
        style={{ backgroundImage: "url('/MainScreen.png')", alignItems: "center", justifyContent: "center", display: "flex" }}
      ></div>

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

      <ForumSection canPost={isLoggedIn} />

      <Footer />
    </div>
  );
}

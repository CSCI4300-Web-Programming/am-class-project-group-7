import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForumPost, { ForumPostData } from "../../components/ForumPost";
import AddPostForm from "@/src/components/AddForumPosts";
import bulldogImage from "../../../images/bulldog_glasses_red.jpg";
import Link from "next/link";
import ForumSection from "../../components/ForumSection";

const isLoggedIn: boolean = false;

const intialPosts: ForumPostData[] = [
  {
    id: "welcome-post",
    title: "Example Post",
    description: "This is what a description will look like.",
    imageSrc: bulldogImage,
    imageAlt: "Bulldog",
  },
  {
    id: "intro-post",
    title: "Introduce yourself",
    description: "Tell us a bit about yourself.",
    imageSrc: bulldogImage,
    imageAlt: "Bulldog",
  },
  {
    id: "questions-post",
    title: "Ask questions here.",
    description: "All questions accepted",
    imageSrc: bulldogImage,
    imageAlt: "Bulldog",
  },
];


export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar loggedIn={isLoggedIn}/>
      <div
        className="bground"
        style={{ backgroundImage: "url('/MainScreen.png')", alignItems: "center", justifyContent: "center", display: "flex" }}
      ></div>

      <ForumSection canPost={isLoggedIn} />

      <Footer />
    </div>
  );
}

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForumPost, { ForumPostData } from "../../components/ForumPost";
import AddPostForm from "../../components/AddForumPosts";
import bulldogImage from "../../../images/bulldog_glasses_red.jpg";

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

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar loggedIn={true} />
      <div
        className="bground"
        style={{ backgroundImage: "url('/LoggedIn.png')", alignItems: "center", justifyContent: "center", display: "flex" }}
      ></div>
      {initialPosts.map((post) => (
        <ForumPost key={post.id} post={post} />
      ))}

      <AddPostForm />

      <Footer />
    </div>
  );
}

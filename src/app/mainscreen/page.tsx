import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForumPost from "../../components/ForumPost";
import bulldogImage from "../../../images/bulldog_glasses_red.jpg";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <div
        className="bground"
        style={{ backgroundImage: "url('/MainScreen.png')", alignItems: "center", justifyContent: "center", display: "flex" }}
      ></div>
      <ForumPost
        post={{
          id: "welcome-post",
          title: "Example Post",
          description: "This is what a desciption will look like",
          imageSrc: bulldogImage,
          imageAlt: "Bulldog",
        }}
      />
      <Footer />
    </div>
  );
}

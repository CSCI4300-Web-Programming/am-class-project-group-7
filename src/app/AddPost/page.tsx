import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AddPostPageContent from "../../components/AddPostPage";

export default function AddPostPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <AddPostPageContent />
      <Footer />
    </div>
  );
}
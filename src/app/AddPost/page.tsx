import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { auth } from "@/auth";
import ForumSection from "../../components/ForumSection";

export default async function AddPostPage() {
  const session = await auth();
  const isLoggedIn = Boolean(session?.user);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <ForumSection canPost={isLoggedIn} />
      <Footer />
    </div>
  );
}

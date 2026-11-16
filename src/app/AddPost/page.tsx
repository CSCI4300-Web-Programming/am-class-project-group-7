import { Suspense } from "react";
import { connection } from "next/server";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { auth } from "@/auth";
import ForumSection from "../../components/ForumSection";

// Reads the session, so it must run at request time (inside <Suspense>).
async function ForumForUser() {
  await connection();
  const session = await auth();
  const isLoggedIn = Boolean(session?.user);

  return <ForumSection canPost={isLoggedIn} />;
}

export default function AddPostPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Suspense fallback={null}>
        <ForumForUser />
      </Suspense>
      <Footer />
    </div>
  );
}

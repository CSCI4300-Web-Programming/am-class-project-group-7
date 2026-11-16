import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookCoverLookup from "../../components/BookCoverLookup";

// Server Component: it can render the async <Navbar />, while the interactive
// lookup form lives in a Client Component.
export default function BookCoverPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <BookCoverLookup />
      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
}

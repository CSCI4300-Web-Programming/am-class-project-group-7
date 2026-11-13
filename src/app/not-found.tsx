import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main
        style={{
          display: "grid",
          flex: 1,
          placeItems: "center",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <section>
          <p style={{ margin: 0, color: "#ba0c2f", fontSize: "clamp(4rem, 15vw, 8rem)", fontWeight: 700 }}>
            404
          </p>
          <h1 style={{ margin: "0 0 1rem", fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}>
            Page not found
          </h1>
          <p style={{ marginBottom: "2rem" }}>
            Sorry, the page you were looking for does not exist.
          </p>
          <Link
            href="/"
            className="get-started-link"
            style={{
              display: "inline-block",
              borderRadius: "0.75rem",
              backgroundColor: "#ba0c2f",
              color: "#ffffff",
              padding: "0.75rem 1.5rem",
              fontWeight: 700,
            }}
          >
            Return to home
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column"  }}>
      <Navbar />
      <main className="login-page" style={{ flex: 1 }}>
        <section className="login-card">
          <h1 id="login-title" className="login-title">Sign in</h1>
          <LoginForm />
          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="get-started-link"
              style={{ color: "#ba0c2f", fontWeight: 700 }}
            >
              Register here
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

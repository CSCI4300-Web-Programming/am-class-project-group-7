import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignInLink from "../../components/SignInLink";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column"  }}>
      <Navbar />
      <main className="login-page" style={{ flex: 1 }}>
        <section className="login-card">
          <h1 id="login-title" className="login-title">Sign in</h1>
          <form className="login-form">
            <div className="login-field">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" required />
            </div>
            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" required />
            </div>
            <button className="login-submit" type="button">Sign in</button>
          </form>
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

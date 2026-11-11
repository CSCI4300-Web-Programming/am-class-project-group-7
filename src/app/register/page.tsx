import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main className="register-page" style={{ flex: 1 }}>
        <section className="register-card">
          <h1 className="register-title">Register</h1>
          <form className="register-form">
            <div className="register-field">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" />
            </div>
            <div className="register-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>
            <div className="register-field">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
            </div>
            <div className="register-field">
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
              />
            </div>
            <button className="register-submit" type="button">Register</button>
          </form>
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              href="/login"
              className="get-started-link"
              style={{ color: "#ba0c2f", fontWeight: 700 }}
            >
              Sign in here
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
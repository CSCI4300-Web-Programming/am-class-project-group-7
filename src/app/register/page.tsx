import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignupForm from "../../components/SignupForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main className="register-page" style={{ flex: 1 }}>
        <section className="register-card">
          <h1 className="register-title">Register</h1>
          <SignupForm />
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
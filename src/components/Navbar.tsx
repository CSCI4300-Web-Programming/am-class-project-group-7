import Link from "next/link";
import { doLogout } from "../app/actions";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  const loggedIn = Boolean(session?.user);

  return (
    <nav
      className="site-navbar"
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "initial",
        width: "100%",
        padding: "1.25rem 2rem",
        background: "#ba0c2f",
        color: "#ffffff",
        boxSizing: "border-box",
        borderRadius: "0 0 4rem 4rem",
      }}
    >
      <span
        className="site-navbar-title"
        style={{
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        CSCI Student Forum
      </span>

      <div className="site-navbar-links" style={{ display: "flex", alignItems: "center" }}>
        <Link href="/" className="site-navbar-link" style={{ color: "#ffffff", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/mainscreen" className="site-navbar-link" style={{ color: "#ffffff", textDecoration: "none" }}>
          Main Screen
        </Link>
        <Link href="/bookcover" className="site-navbar-link" style={{ color: "#ffffff", textDecoration: "none" }}>
          Book Cover
        </Link>
        {loggedIn ? (
          <form action={doLogout}>
            <button
              type="submit"
              className="site-navbar-link"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                font: "inherit",
              }}
            >
              Logout
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="site-navbar-link"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

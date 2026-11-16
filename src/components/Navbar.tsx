import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { doLogout } from "../app/actions";
import { auth } from "@/auth";

const linkStyle = { color: "#ffffff", textDecoration: "none" };

// Reads the session, so it must run at request time (not during prerendering).
async function AuthLink() {
  // Wait for a real request before calling auth(); NextAuth uses
  // crypto.getRandomValues() internally, which can't run while prerendering.
  await connection();
  const session = await auth();
  const loggedIn = Boolean(session?.user);

  return loggedIn ? (
    <form action={doLogout}>
      <button
        type="submit"
        className="site-navbar-link"
        style={{
          ...linkStyle,
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
    <Link href="/login" className="site-navbar-link" style={linkStyle}>
      Login
    </Link>
  );
}

export default function Navbar() {
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
        {/* The rest of the navbar prerenders; only the auth link waits for the request. */}
        <Suspense fallback={null}>
          <AuthLink />
        </Suspense>
      </div>
    </nav>
  );
}

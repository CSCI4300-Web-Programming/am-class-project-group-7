import Link from "next/link";

type NavbarProps = {
  loggedIn?: boolean;
};

export default function Navbar({ loggedIn = false }: NavbarProps) {
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
        <Link
          href={loggedIn ? "/mainscreen" : "/login"}
          className="site-navbar-link"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          {loggedIn ? "Logout" : "Login"}
        </Link>
      </div>
    </nav>
  );
}

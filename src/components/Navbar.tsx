import Link from "next/link";

type NavbarProps = {
  loggedIn?: boolean;
};

export default function Navbar({ loggedIn = false }: NavbarProps) {
  return (
    <nav
      className="site-navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0.9rem 1.5rem",
        background: "rgba(192, 0, 0, 0.8)",
        color: "#ffffff",
        boxSizing: "border-box",
        borderRadius: "0 0 18px 18px",
      }}
    >
      <span
        className="site-navbar-title"
        style={{
          fontWeight: 700,
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

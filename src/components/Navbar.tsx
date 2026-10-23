import Link from "next/link";

type NavbarProps = {
  loggedIn?: boolean;
};

export default function Navbar({ loggedIn = false }: NavbarProps) {
  return (
    <nav
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
      <Link
        href="/"
        style={{
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        CSCI Student Forum
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/mainscreen" style={{ color: "#ffffff", textDecoration: "none" }}>
          Main Screen
        </Link>
        <Link href="/login" style={{ color: "#ffffff", textDecoration: "none" }}>
          {loggedIn ? "Logout" : "Login"}
        </Link>
      </div>
    </nav>
  );
}

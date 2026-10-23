"use client";

import Link from "next/link";

export default function SignInLink() {
  return (
    <Link
      href="/loggedin"
      style={{
        position: "absolute",
        left: "50%",
        top: "71.5%",
        transform: "translate(-50%, -50%)",
        display: "grid",
        placeItems: "center",
        width: "33%",
        height: "11.5%",
        color: "#ffffff",
        fontSize: "clamp(1rem, 2vw, 1.5rem)",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      Sign In (Demo)
    </Link>
  );
}

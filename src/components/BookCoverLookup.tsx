"use client";

import { useState } from "react";
import Image from "next/image";

// Meant to take out any spaces or hyphens in the input
function cleanIsbn(input: string): string {
  const value = input.replace(/[-\s]/g, "").toUpperCase();
  return /^(\d{13}|\d{9}[\dX])$/.test(value) ? value : "";
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "1.25rem 2rem",
  background: "#ba0c2f",
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  boxSizing: "border-box",
  fontSize: "1rem",
  fontFamily: "inherit",
  outline: "none",
};

type Status = "idle" | "loading" | "found" | "missing";

export default function BookCoverLookup() {
    const [input, setInput] = useState("");
    const [isbn, setIsbn] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cleaned = cleanIsbn(input);

        if (!cleaned) {
            setError("Enter a valid 10 or 13 digit ISBN.");
            setIsbn("");
            setStatus("idle");
            return;
        }

        setError("");
        if (cleaned === isbn) return; // checking for the same book
        setStatus("loading");
        setIsbn(cleaned);
    };

    const coverUrl = isbn
    ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`
    : null;



    return (
        <main
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        maxWidth: "320px",
        margin: "2rem auto",
        }}
        >
        <h1>Textbook Cover Lookup</h1>

        <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}
        >
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter ISBN e.g. 9780321776419"
        required
        style={fieldStyle}
        />
        <button
        type="submit"
        style={{
        ...fieldStyle,
        cursor: "pointer",
        fontWeight: 500,
        letterSpacing: "0.05em",
        textAlign: "center",
        }}
        >
        Find Cover
        </button>
        </form>

        {error && <p role="alert">{error}</p>}
        {status === "loading" && <p>Loading cover…</p>}
        {status === "missing" && (
        <p>No cover found for ISBN {isbn}. Double-check the number or try another ISBN</p>
        )}

        {coverUrl && status !== "missing" && (
        <Image
        key={isbn}
        src={coverUrl}
        alt={`Book cover for ISBN ${isbn}`}
                width={900}
                height={1350}
        unoptimized
        style={{ width: "100%", height: "auto" }}
        onLoad={() => setStatus("found")}
        onError={() => setStatus("missing")}
        />
        )}
        </main>
    );
}
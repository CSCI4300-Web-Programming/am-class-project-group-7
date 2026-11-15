"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../app/actions";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await doCredentialLogin(new FormData(event.currentTarget));

      if (!result.success) {
        setError(result.error ?? "Invalid username or password.");
        return;
      }

      router.push("/loggedin");
      router.refresh();
    } catch {
      setError("Sign in failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="login-field">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          required
        />
      </div>
      <div className="login-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
        />
      </div>
      {error && <p role="alert">{error}</p>}
      <button className="login-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

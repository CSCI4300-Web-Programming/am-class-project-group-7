"use client";

import { useState, type FormEvent } from "react";

export default function SignupForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
      });

      const result: { error?: string; message?: string } = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Registration failed.");
        return;
      }

      setSuccess(result.message ?? "Registration successful.");
      form.reset();
    } catch {
      setError("Could not complete registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="register-form" onSubmit={onSubmit}>
      <div className="register-field">
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required />
      </div>
      <div className="register-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="register-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          minLength={8}
          required
        />
      </div>
      <div className="register-field">
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </div>
      {error && <p role="alert">{error}</p>}
      {success && <p role="status">{success}</p>}
      <button className="register-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

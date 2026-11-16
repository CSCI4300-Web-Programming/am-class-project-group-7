"use server";

import { signIn, signOut } from "@/auth";
export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData:FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !username.trim() ||
    !password
  ) {
    return { success: false, error: "Enter your username and password." };
  }

 try {
    await signIn("credentials", {
      username: username.trim(),
      password,
      redirect: false, 
    });
    return { success: true };
  } catch (error) {
    console.error("Login failed:", error);
    return { success: false, error: "Login failed" };
  }
}
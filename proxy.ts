import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const proxy = auth((request) => {
  const isAuthenticated = !!request.auth?.user;

  if (!isAuthenticated) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/AddPost/:path*",
    "/loggedin/:path*",
  ],
};

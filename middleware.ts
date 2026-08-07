import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("tambe_token")?.value;

  const { pathname } = request.nextUrl;


  // Homepage protection
  if (pathname === "/") {
    if (!token) {
      return NextResponse.redirect(
        new URL("/auth/signin", request.url)
      );
    }

    return NextResponse.next();
  }


  // Protected routes
  const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/booking",
    "/settings",
  ];


  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );


  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/auth/signin", request.url)
    );
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/profile/:path*",
    "/booking/:path*",
    "/settings/:path*",
  ],
};
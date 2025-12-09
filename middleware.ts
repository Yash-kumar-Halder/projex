import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const { pathname } = request.nextUrl;

    // Routes for unauthenticated users only
    const authPages = ["/sign-in", "/sign-up", "/verify"];

    // 1. If user is logged in and tries to visit auth pages → redirect to /home
    if (token && authPages.includes(pathname)) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // 2. If user is NOT logged in and tries to visit protected pages → redirect to sign-in
    const protectedRoutes = ["/dashboard"];

    if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/sign-in",
        "/sign-up",
        "/verify",
        "/dashboard/:path*",
    ],
};

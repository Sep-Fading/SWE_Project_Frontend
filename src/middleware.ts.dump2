import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const staticAssetPattern = /\.(jpg|jpeg|png|gif|svg|css|js)$/i;

  // Check if the request is for a static asset and bypass middleware if it is
  if (staticAssetPattern.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  
  // Retrieve tokens and user role from cookies.
  const accessToken = request.cookies.get("access_token");
  const userRoleCookie = request.cookies.get("userRole");

  // Defining the login page path 
  const loginPath = '/Login';
  
  // Handle redirection based on tokens and user role
  if (userRoleCookie && accessToken) {
    const userRole = userRoleCookie.value;

    // If accessing the login page, redirect to user-specifc
    if (request.nextUrl.pathname.startsWith(loginPath)) {
      return NextResponse.redirect(new URL(`/${userRole}/user_page`, request.url));
    }

    // Allow next response if the path starts with the user role or is public.
    if (request.nextUrl.pathname.startsWith(`/${userRole}`) || 
      request.nextUrl.pathname.toUpperCase().startsWith(`/EMPLOYEE`)) {
        
        return NextResponse.next();
    }

    // Redirect to the role-specific page if not on an allowed path.
    return NextResponse.redirect(new URL(`/${userRole}`, request.url));
  }

  // Redirect unauthenticated requests to the login page, excluding API paths.
  if (!accessToken && !request.nextUrl.pathname.startsWith(loginPath) &&
    !request.nextUrl.pathname.startsWith('/api')) {
      
      return NextResponse.redirect(new URL(loginPath, request.url));
  }

  // Continue with the request if none of the above conditions are met.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|lib).*)"],
};

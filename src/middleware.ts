import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const staticAssetPattern = /\.(jpg|jpeg|png|gif|svg|css|js)$/i;

  // Check if the request is for a static asset and bypass middleware if it is
  if (staticAssetPattern.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const userRoleCookie = request.cookies.get("userRole");
  const userIDCookie = request.cookies.get("userID");

  if (userRoleCookie && userIDCookie) {
    const userRole = userRoleCookie.value;
    const userID = userIDCookie.value;

    if (!request.nextUrl.pathname.startsWith(`/Login`)) {
      if (
        request.nextUrl.pathname.startsWith(`/${userRole}`) ||
        request.nextUrl.pathname.toUpperCase().startsWith(`/EMPLOYEE`)
      ) {
        if (
          request.nextUrl.pathname.startsWith(`/EMPLOYEE/view_claims`)
        ) {
          if (
            request.nextUrl.pathname === `/EMPLOYEE/view_claims/${userID}`
          ) {
            return NextResponse.next();
          } else {
            return NextResponse.redirect(
              new URL(`/EMPLOYEE/view_claims/${userID}`, request.url)
            );
          }
        } else if (
          request.nextUrl.pathname.startsWith(`/${userRole}/approve_claims`)
        ) {
          if (
            request.nextUrl.pathname === `/${userRole}/approve_claims/${userID}`
          ) {
            return NextResponse.next();
          } else {
            return NextResponse.redirect(
              new URL(`/${userRole}/approve_claims/${userID}`, request.url)
            );
          }
        } else if (
          request.nextUrl.pathname.startsWith(`/${userRole}/view_employees`)
        ) {
          if (
            request.nextUrl.pathname === `/${userRole}/view_employees/${userID}`
          ) {
            return NextResponse.next();
          } else {
            return NextResponse.redirect(
              new URL(`/${userRole}/view_employees/${userID}`, request.url)
            );
          }
        } else if (
          request.nextUrl.pathname.startsWith(`/${userRole}/process_claims`)
        ) {
          if (
            request.nextUrl.pathname === `/${userRole}/process_claims/${userID}`
          ) {
            return NextResponse.next();
          } else {
            return NextResponse.redirect(
              new URL(`/${userRole}/process_claims/${userID}`, request.url)
            );
          }
        }
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL(`/${userRole}`, request.url));
      }
    } else {
      return NextResponse.redirect(
        new URL(`/${userRole}/user_page`, request.url)
      );
    }
  }

  if (!userRoleCookie && !request.nextUrl.pathname.startsWith("/Login")) {
    return Response.redirect(new URL("/Login", request.url));
  } else {
    console.log("No currentUser cookie found.");
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

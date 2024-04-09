import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUserCookie = request.cookies.get("currentUser");

  if (currentUserCookie) {
    const str = JSON.parse(currentUserCookie.value).user_permission;
    let currentUser = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    if (currentUser) {
      if (request.nextUrl.pathname.startsWith(`/${currentUser}`)) {
        console.log(1);
        return;
      } else if (request.nextUrl.pathname.startsWith(`/`)) {
        console.log(2);
        return;
      } else if (request.nextUrl.pathname.startsWith("/Login")) {
        console.log(3);
        return Response.redirect(new URL("/user", request.url));
      } else if (request.nextUrl.pathname.startsWith("/home")) {
        console.log(4);
        return Response.redirect(new URL(`/${currentUser}`, request.url));
      } else {
        console.log(5);
        return Response.redirect(new URL(`/${currentUser}`, request.url));
      }
    }
    
    if (!currentUser && !request.nextUrl.pathname.startsWith("/Login")) {
      return Response.redirect(new URL("/Login", request.url));
    }
  } else {
    console.log("No currentUser cookie found.");
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

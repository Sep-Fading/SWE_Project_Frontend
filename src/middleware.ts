import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const staticAssetPattern = /\.(jpg|jpeg|png|gif|svg|css|js)$/i;

  // Check if the request is for a static asset and bypass middleware if it is
  if (staticAssetPattern.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const userRoleCookie = request.cookies.get("userRole");
  const userPasswordFlag = request.cookies.get("flagged_password_change");
  if (userRoleCookie) {
    const userRole = userRoleCookie.value;
    const passChange = userPasswordFlag.value;
    console.log(userPasswordFlag);
    const url = new URL("/Login/reset_password", request.nextUrl.origin);
   
    if (!request.nextUrl.pathname.startsWith(`/Login`)) {
      if (
        request.nextUrl.pathname.startsWith(`/${userRole}`) ||
        request.nextUrl.pathname.toUpperCase().startsWith(`/EMPLOYEE`)
      ) {
        
            // Redirect to password reset page if required
            if (userPasswordFlag === 'true') {
                console.log("PASSING THROUGH THE IF");
                // Constructing an absolute URL for redirection
                return NextResponse.redirect('/Login/reset_password');
            }
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL(`/${userRole}`, request.url));
      }
    } else {
      return NextResponse.redirect(new URL(`/${userRole}/user_page`, request.url));
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

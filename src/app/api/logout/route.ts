import { NextResponse, NextRequest } from "next/server";
import { serialize } from "cookie";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("Logout request received");
  try {

    const userRoleExpiredCookie = serialize("userRole", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0), // Date(0) sets the cookie's expiration to Jan 01 1970
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    const userIDExpiredCookie = serialize("userID", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0),
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    const userPasswordFlagExpiredCookie = serialize(
      "flagged_password_change",
      "",
      {
        httpOnly: true,
        path: "/",
        expires: new Date(0),
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      }
    );

    let cookies = [userRoleExpiredCookie, userIDExpiredCookie, userPasswordFlagExpiredCookie];
    let response = NextResponse.json({ message: "Logged out successfully" });
    cookies.forEach(cookie => response.headers.append('Set-Cookie', cookie));

    return new NextResponse(
      JSON.stringify({ message: "Logged out successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return new NextResponse(
      JSON.stringify({ message: "An unknown error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

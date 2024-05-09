import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(req) {
    if (req.nextauth.token) {
      if (req.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  },
  {
    callbacks: {
      authorized({ token, req }) {
        return true;
      }
    }
  }
);
export const config = { matcher: ["/", "/login"] };

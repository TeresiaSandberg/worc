import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    const allowed =
      pathname === "/" ||
      pathname.startsWith("/images") ||
      pathname.startsWith("/_next") ||
      pathname === "/api/contact";

    if (!allowed) {
      return new Response(null, { status: 404 });
    }
  }

  return NextResponse.next();
}
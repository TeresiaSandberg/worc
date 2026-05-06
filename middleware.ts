import { NextRequest, NextResponse } from "next/server";

function readSession(req: NextRequest) {
  const raw = req.cookies.get("worc_session")?.value;
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    const allowlist = [
      "/",
      "/api/contact",
      "/favicon.ico",
      "/robots.txt",
      "/sitemap.xml",
      "/manifest.webmanifest",
      "/site.webmanifest",
      "/apple-touch-icon.png",
    ] as const;
    const allowlistPrefixes = ["/_next/", "/images/"] as const;

    const isAllowedExactPath = allowlist.includes(pathname as (typeof allowlist)[number]);
    const isAllowedPrefix = allowlistPrefixes.some((prefix) =>
      pathname.startsWith(prefix),
    );

    if (!isAllowedExactPath && !isAllowedPrefix) {
      return new Response(null, { status: 404 });
    }
  }

  const isAdminRoute = pathname.startsWith("/admin");
  const isMeRoute = pathname.startsWith("/me");
  const isEconomyRoute = pathname.startsWith("/economy");
  const isLoginRoute = pathname.startsWith("/login");
  const isSignupRoute = pathname.startsWith("/signup");

  const session = readSession(req);

  if (pathname === "/economy" || pathname.startsWith("/economy/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/economy/, "/admin");
    return NextResponse.redirect(url);
  }

  const isSystemOnlyAdmin = pathname.startsWith("/admin/system/");

  if (isSystemOnlyAdmin && session && session.role !== "SYSTEM") {
    const url = req.nextUrl.clone();
    url.pathname = "/admin";
    url.searchParams.set("error", "system_only");
    return NextResponse.redirect(url);
  }

  const needsAuth = isAdminRoute || isMeRoute || isEconomyRoute;

  if (needsAuth && !session) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if ((isLoginRoute || isSignupRoute) && session) {
    const url = req.nextUrl.clone();
    const next = req.nextUrl.searchParams.get("next");
    url.pathname =
      next && next.startsWith("/") && !next.startsWith("//") ? next : "/admin";
    url.searchParams.delete("next");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Production gate för:
 * - `/admin` och allt under (matcher: `/admin/:path*`)
 * - `/api` och allt under (matcher: `/api/:path*`)
 *
 * `next dev`: gate av (NODE_ENV !== "production").
 *
 * Beteende när gate är aktiv (`next start` / Vercel produktionsserver):
 * - Saknas `ADMIN_USERNAME` eller `ADMIN_PASSWORD` → 404 för berörda URL:er.
 * - Finns båda → Basic Auth; fel uppgifter → 401 med `WWW-Authenticate`.
 *
 * Publik utanför matcher (middleware körs inte): `/`, `/images/...`, övriga sidor utanför `/admin` och `/api`.
 *
 * Under `next build` körs inte gate (NEXT_PHASE), så SSG påverkas inte.
 *
 * Miljövariabler (t.ex. Vercel):
 * - ADMIN_USERNAME
 * - ADMIN_PASSWORD
 */

const ADMIN_REALM = "WORC Admin";
const PHASE_PRODUCTION_BUILD = "phase-production-build";

/** Gate gäller i produktion på servern, inte under `next build` (SSG ska inte få 404 här). */
function shouldEnforceAdminGate(): boolean {
  if (process.env.NODE_ENV !== "production") return false;
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) return false;
  return true;
}

function parseBasicAuth(
  header: string | null,
  expectUser: string,
  expectPass: string,
): boolean {
  if (!header || !header.startsWith("Basic ")) return false;
  try {
    const b64 = header.slice(6).trim();
    const decoded = atob(b64);
    const colon = decoded.indexOf(":");
    if (colon < 0) return false;
    const u = decoded.slice(0, colon);
    const p = decoded.slice(colon + 1);
    return u === expectUser && p === expectPass;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  if (!shouldEnforceAdminGate()) {
    return NextResponse.next();
  }

  const user = process.env.ADMIN_USERNAME?.trim();
  const pass = process.env.ADMIN_PASSWORD;

  if (!user || pass === undefined || pass === "") {
    return new NextResponse(null, { status: 404 });
  }

  const ok = parseBasicAuth(
    request.headers.get("authorization"),
    user,
    pass,
  );
  if (!ok) {
    return new NextResponse("Autentisering krävs.", {
      status: 401,
      headers: {
        "WWW-Authenticate": `Basic realm="${ADMIN_REALM}", charset="UTF-8"`,
        "Cache-Control": "no-store",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};

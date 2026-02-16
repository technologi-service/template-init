import { auth } from "@/lib/auth/server";
import { type NextRequest, NextResponse } from "next/server";

interface UserWithRole {
  role?: string;
}

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  // Redirigir basado en el rol si está autenticado
  if ((pathname === "/" || pathname === "/dashboard") && session) {
    const role = (session.user as UserWithRole).role || "user";
    return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url));
  }

  // Proteger rutas de Dashboard
  if (pathname.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/dashboard/:path*"],
};

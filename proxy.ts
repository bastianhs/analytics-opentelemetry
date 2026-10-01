import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/session';

// Routes that require authentication
const protectedRoutes: string[] = [];

// Routes accessible only to guests (redirect if already authenticated)
const authRoutes = ['/login'];

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Decrypt session from cookie
  const sessionToken = req.cookies.get('session')?.value;
  const session = await decrypt(sessionToken);
  const isAuthenticated = !!session;

  // Redirect unauthenticated users away from protected routes
  if (protectedRoutes.includes(path) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // Redirect authenticated users away from auth-only routes (e.g. /login)
  if (authRoutes.includes(path) && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}

// Run proxy on all routes except Next.js internals and static files
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.svg$).*)'],
};

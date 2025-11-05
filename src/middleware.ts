import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get language from cookie
  const languageCookie = request.cookies.get('language')?.value;
  
  // If no language cookie, check localStorage via headers (not directly accessible in middleware)
  // Default to 'en' if nothing is found
  const language = languageCookie && (languageCookie === 'en' || languageCookie === 'ru') 
    ? languageCookie 
    : 'en';

  // Clone the response
  const response = NextResponse.next();
  
  // Set language cookie if not present
  if (!languageCookie) {
    response.cookies.set('language', language, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60, // 1 year
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|images|icons|fonts).*)',
  ],
};


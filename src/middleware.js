import { NextResponse } from "next/server";

export default function middleware(req) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all pages except:
    // - API routes
    // - Static assets (_next/static, _next/image, static, images, app-images, lottie, fonts, svgs, etc.)
    // - Favicon and other public assets
    "/((?!api/|_next/|static/|public/|favicon.ico|app-images/|lottie/|svgs/|images/|fonts/|icon.png).*)",
  ],
};

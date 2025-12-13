import { NextRequest, NextResponse } from 'next/server';

interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

// Store in memory (for production, use Redis)
const store: RateLimitStore = {};

export function rateLimit(maxRequests: number, windowMs: number) {
  return (handler: (req: NextRequest) => Promise<NextResponse>) => {
    return async (req: NextRequest): Promise<NextResponse> => {
      const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
      const key = `${ip}:${req.nextUrl.pathname}`;
      const now = Date.now();

      // Initialize or get existing record
      if (!store[key] || store[key].resetTime < now) {
        store[key] = { count: 0, resetTime: now + windowMs };
      }

      // Check if limit exceeded
      if (store[key].count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }

      // Increment count
      store[key].count += 1;

      // Add CORS and rate limit headers
      const response = await handler(req);
      response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || 'http://localhost:3000');
      response.headers.set('RateLimit-Limit', maxRequests.toString());
      response.headers.set('RateLimit-Remaining', (maxRequests - store[key].count).toString());
      response.headers.set('RateLimit-Reset', store[key].resetTime.toString());

      return response;
    };
  };
}

// Helper to check CORS origin
export function checkCors(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(',');
  return !origin || allowedOrigins.includes(origin);
}

export function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGINS || 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

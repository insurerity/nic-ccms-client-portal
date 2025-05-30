// app/api/optimize/route.ts
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import { URL } from 'url';

// Allowed domains (update as needed)
const ALLOWED_DOMAINS = new Set(['images.unsplash.com', 'unsplash.com', 'm11collection.com', 'img.freepik.com', 'assets.guesty.com', 'guesty-listing-images.s3.amazonaws.com', 'res.cloudinary.com', 'd397xw3titc834.cloudfront.net', 'firebasestorage.googleapis.com']);

// Rate Limiting (simple in-memory implementation)
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window in milliseconds
const RATE_LIMIT_MAX = 60; // Maximum 60 requests per IP per minute
const rateLimitMap: Map<string, number[]> = new Map();

// In-memory caching (For production, consider Redis or CDN caching)
const imageCache = new Map<string, Buffer>();
const CACHE_TTL = 60 * 60 * 1000; // Cache duration: 1 hour

// Helper: Validate URL Protocol
const isValidProtocol = (url: URL) => url.protocol === 'http:' || url.protocol === 'https:';

export async function GET(req: NextRequest): Promise<NextResponse> {
  // --- Rate Limiting ---
  // Extract client IP from x-forwarded-for header (if available) and use first IP in the list.
  const ipHeader = req.headers.get('x-forwarded-for');
  const ip = ipHeader ? ipHeader.split(',')[0].trim() : 'unknown';
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  // Remove outdated timestamps outside the rate limit window
  const recentTimestamps = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW);
  if (recentTimestamps.length >= RATE_LIMIT_MAX) {
    return NextResponse.json(
      { error: 'Too many requests. Slow down!' },
      { status: 429 }
    );
  }
  // Record current request timestamp and update the map
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);

  // --- Parameter Parsing and Validation ---
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get('url');
  const width = searchParams.get('width');
  const quality = searchParams.get('quality');

  // Validate Image URL
  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(imageUrl);
  } catch {
    return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
  }
  // Validate Protocol
  if (!isValidProtocol(parsedUrl)) {
    return NextResponse.json(
      { error: 'Invalid protocol. Only http and https allowed.' },
      { status: 400 }
    );
  }
  // Domain whitelist check
  if (!ALLOWED_DOMAINS.has(parsedUrl.hostname)) {
    return NextResponse.json(
      { error: `Domain not allowed: ${parsedUrl.hostname}` },
      { status: 403 }
    );
  }

  // Validate & Parse Width
  const parsedWidth = width ? parseInt(width, 10) : undefined;
  if (parsedWidth !== undefined && (isNaN(parsedWidth) || parsedWidth <= 0 || parsedWidth > 2000)) {
    return NextResponse.json(
      { error: 'Invalid width parameter (max: 2000px)' },
      { status: 400 }
    );
  }

  // Validate & Parse Quality
  const parsedQuality = quality ? parseInt(quality, 10) : 80;
  if (parsedQuality < 1 || parsedQuality > 100) {
    return NextResponse.json(
      { error: 'Invalid quality parameter (1-100)' },
      { status: 400 }
    );
  }

  // --- Check In-Memory Cache ---
  const cacheKey = `${imageUrl}-${parsedWidth}-${parsedQuality}`;
  if (imageCache.has(cacheKey)) {
    return new NextResponse(imageCache.get(cacheKey)!, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // --- Fetch and Process Image ---
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Failed to fetch image');
    const buffer = await response.arrayBuffer();

    // Process image with sharp
    let image = sharp(Buffer.from(buffer));
    if (parsedWidth) {
      image = image.resize(parsedWidth);
    }
    const optimizedImage = await image.jpeg({ quality: parsedQuality }).toBuffer();

    // Cache the processed image
    imageCache.set(cacheKey, optimizedImage);
    setTimeout(() => imageCache.delete(cacheKey), CACHE_TTL);

    // Return optimized image with appropriate headers
    return new NextResponse(optimizedImage, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Image optimization failed' },
      { status: 500 }
    );
  }
}

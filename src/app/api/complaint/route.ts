import { checkCors, getCorsHeaders } from '@/lib/rateLimit';
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.THEMIS_API_URL || 'https://themis.niccomplaintshub.com';

export async function POST(request: NextRequest) {

  if (!checkCors(request)) {
    return NextResponse.json(
      { error: 'CORS policy violation' },
      { status: 403, headers: getCorsHeaders() }
    );
  }
  try {
    const { complaint, documents, recaptchaToken } = await request.json();

    if (!complaint || !recaptchaToken || documents) {
      return NextResponse.json(
        { error: 'Missing required fields: complaint, documents, recaptchaToken' },
        { status: 400 }
      );
    }

    const response = await fetch(`${BASE_URL}/complaint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       complaint,
          documents,
          recaptchaToken,
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to submit ticket status';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

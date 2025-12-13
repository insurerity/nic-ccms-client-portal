
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.THEMIS_API_URL || 'https://themis.niccomplaintshub.com';

export async function POST(request: NextRequest) {
  try {
    const { ticketNumber, recaptureToken } = await request.json();

    if (!ticketNumber || !recaptureToken) {
      return NextResponse.json(
        { error: 'Missing required fields: ticketNumber, recaptureToken' },
        { status: 400 }
      );
    }

    const response = await fetch(`${BASE_URL}/ticket_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ticketNumber,
        recaptureToken
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

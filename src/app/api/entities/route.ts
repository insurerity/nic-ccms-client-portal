
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.API_BASE_URL || 'https://themis.niccomplaintshub.com';

export async function GET(request: NextRequest) {
  console.log('we are fetching dataaaaaaaaaaaaaaaaaaaaaaaaaaa....')
  try {
    const response = await fetch(`${BASE_URL}/entities`);

    console.log('response is here', response)
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
  
    return NextResponse.json(data);
  } catch (err) {
    console.log('fetching offices failed', err)
    const message = err instanceof Error ? err.message : 'Failed to fetch offices';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

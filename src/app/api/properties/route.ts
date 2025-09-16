// src/app/api/properties/route.ts

import { NextResponse } from 'next/server';
import { getProperties } from '@/lib/data';

// THE FIX: We've removed the unused `request: Request` parameter from the function.
export async function GET() {
  const properties = await getProperties();
  return NextResponse.json(properties);
}
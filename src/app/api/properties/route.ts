// src/app/api/properties/route.ts

import { NextResponse } from 'next/server';
import { getProperties } from '@/lib/data';

export async function GET(request: Request) {
  const properties = await getProperties();
  return NextResponse.json(properties);
}
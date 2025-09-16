// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';

// This function handles POST requests to /api/contact
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // --- Server-Side Validation ---
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- Process the data ---
    // In a real application, you would:
    // 1. Send an email using a service like Nodemailer or Resend.
    // 2. Save the message to your database.
    // For this example, we'll just log it to the server console.
    console.log('--- New Contact Message Received ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('------------------------------------');


    // --- Send a success response ---
    return NextResponse.json({ message: 'Your message has been sent successfully!' });

  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
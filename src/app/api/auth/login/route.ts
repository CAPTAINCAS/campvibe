import { NextRequest, NextResponse } from 'next/server';

// Mock user database - in production, use a real database
const users = [
  {
    id: '1',
    email: 'admin@campvibe.co.ke',
    password: 'CampVibe2024!',
    name: 'Admin User',
    role: 'admin',
    university: 'University of Nairobi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    verified: true,
  },
  {
    id: '2',
    email: 'student@uonbi.ac.ke',
    password: 'Student123!',
    name: 'Brian Kamau',
    role: 'user',
    university: 'University of Nairobi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    verified: true,
  },
  {
    id: '3',
    email: 'amina@ku.ac.ke',
    password: 'Student123!',
    name: 'Amina Wanjiku',
    role: 'user',
    university: 'Kenyatta University',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    verified: true,
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session token (in production, use JWT or session management)
    const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

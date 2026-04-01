import { NextRequest, NextResponse } from 'next/server';

// Mock user database - shared with login route
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
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, university } = body;

    // Validate input
    if (!email || !password || !name || !university) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = {
      id: String(users.length + 1),
      email,
      password,
      name,
      role: 'user' as const,
      university,
      avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop`,
      verified: false,
    };

    // Add to mock database
    users.push(newUser);

    // Create session token
    const token = Buffer.from(`${newUser.id}:${Date.now()}`).toString('base64');

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      token,
      message: 'Account created successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

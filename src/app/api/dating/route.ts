import { NextRequest, NextResponse } from 'next/server';

// Profile type definition
interface Profile {
  id: string;
  name: string;
  avatar: string;
  university: string;
  age: number;
  bio: string;
  interests: string[];
  location: string;
  gender: string;
  lookingFor: string;
  verified: boolean;
  matches: string[];
  likes: string[];
  likedBy: string[];
}

// Mock dating profiles database
let profiles: Profile[] = [
  {
    id: '2',
    name: 'Brian Kamau',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    university: 'University of Nairobi',
    age: 22,
    bio: 'Computer Science student at UoN. Love coding, music, and campus life! 🎓💻',
    interests: ['Coding', 'Music', 'Football', 'Photography'],
    location: 'Nairobi, Kenya',
    gender: 'Male',
    lookingFor: 'Female',
    verified: true,
    matches: [],
    likes: [],
    likedBy: [],
  },
  {
    id: '3',
    name: 'Amina Wanjiku',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    university: 'Kenyatta University',
    age: 21,
    bio: 'Business student at KU. Passionate about entrepreneurship and making a difference! 💼✨',
    interests: ['Business', 'Reading', 'Travel', 'Cooking'],
    location: 'Nairobi, Kenya',
    gender: 'Female',
    lookingFor: 'Male',
    verified: true,
    matches: [],
    likes: [],
    likedBy: [],
  },
  {
    id: '4',
    name: 'Grace Muthoni',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    university: 'Moi University',
    age: 23,
    bio: 'Medical student at Moi University. Future doctor with a passion for helping others! 🏥❤️',
    interests: ['Medicine', 'Volunteering', 'Dancing', 'Movies'],
    location: 'Eldoret, Kenya',
    gender: 'Female',
    lookingFor: 'Male',
    verified: true,
    matches: [],
    likes: [],
    likedBy: [],
  },
  {
    id: '5',
    name: 'David Ochieng',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    university: 'Strathmore University',
    age: 22,
    bio: 'Finance student at Strathmore. Love sports, music, and meeting new people! 🎵⚽',
    interests: ['Finance', 'Sports', 'Music', 'Networking'],
    location: 'Nairobi, Kenya',
    gender: 'Male',
    lookingFor: 'Female',
    verified: true,
    matches: [],
    likes: [],
    likedBy: [],
  },
];

// GET - Fetch dating profiles
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const gender = searchParams.get('gender');

    let filteredProfiles = profiles;

    // Filter by gender preference if provided
    if (gender) {
      filteredProfiles = profiles.filter((profile) => profile.gender === gender);
    }

    // Exclude the user's own profile
    if (userId) {
      filteredProfiles = filteredProfiles.filter((profile) => profile.id !== userId);
    }

    return NextResponse.json({
      success: true,
      profiles: filteredProfiles,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Like a profile
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, targetId, action } = body;

    if (!userId || !targetId || !action) {
      return NextResponse.json(
        { error: 'User ID, target ID, and action are required' },
        { status: 400 }
      );
    }

    const user = profiles.find((p) => p.id === userId);
    const target = profiles.find((p) => p.id === targetId);

    if (!user || !target) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    if (action === 'like') {
      // Add to user's likes
      if (!user.likes.includes(targetId)) {
        user.likes.push(targetId);
      }
      // Add to target's likedBy
      if (!target.likedBy.includes(userId)) {
        target.likedBy.push(userId);
      }

      // Check for mutual like (match)
      if (target.likes.includes(userId) && user.likes.includes(targetId)) {
        if (!user.matches.includes(targetId)) {
          user.matches.push(targetId);
        }
        if (!target.matches.includes(userId)) {
          target.matches.push(userId);
        }

        return NextResponse.json({
          success: true,
          matched: true,
          message: `It's a match! You and ${target.name} liked each other!`,
        });
      }

      return NextResponse.json({
        success: true,
        matched: false,
        message: `You liked ${target.name}!`,
      });
    } else if (action === 'pass') {
      return NextResponse.json({
        success: true,
        message: 'Profile passed',
      });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update dating profile
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, bio, interests, lookingFor } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const profile = profiles.find((p) => p.id === userId);
    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Update profile fields
    if (bio) profile.bio = bio;
    if (interests) profile.interests = interests;
    if (lookingFor) profile.lookingFor = lookingFor;

    return NextResponse.json({
      success: true,
      profile,
      message: 'Profile updated successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

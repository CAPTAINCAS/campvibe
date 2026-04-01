import { NextRequest, NextResponse } from 'next/server';

// Mock posts database
let posts = [
  {
    id: '1',
    userId: '2',
    userName: 'Brian Kamau',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    university: 'University of Nairobi',
    content: 'Just finished my final exams at UoN! 🎉 Time to celebrate with friends. Who\'s up for a campus party this weekend?',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    likes: 234,
    comments: 45,
    shares: 12,
    likedBy: [],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    userId: '3',
    userName: 'Amina Wanjiku',
    userAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    university: 'Kenyatta University',
    content: 'Working on an AI project at KU that can predict campus events attendance. The future is here! 🤖',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    likes: 567,
    comments: 89,
    shares: 34,
    likedBy: [],
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    userId: '4',
    userName: 'Grace Muthoni',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    university: 'Moi University',
    content: 'Campus sunrise at Moi University this morning was absolutely breathtaking! 🌅 Nature never fails to amaze me.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    likes: 892,
    comments: 67,
    shares: 45,
    likedBy: [],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
];

// GET - Fetch all posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    let filteredPosts = posts;
    if (userId) {
      filteredPosts = posts.filter((post) => post.userId === userId);
    }

    // Sort by createdAt descending
    filteredPosts.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({
      success: true,
      posts: filteredPosts,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, userName, userAvatar, university, content, image } = body;

    // Validate input
    if (!userId || !userName || !content) {
      return NextResponse.json(
        { error: 'User ID, name, and content are required' },
        { status: 400 }
      );
    }

    // Create new post
    const newPost = {
      id: String(posts.length + 1),
      userId,
      userName,
      userAvatar: userAvatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      university: university || 'Unknown University',
      content,
      image: image || null,
      likes: 0,
      comments: 0,
      shares: 0,
      likedBy: [],
      createdAt: new Date().toISOString(),
    };

    // Add to mock database
    posts.push(newPost);

    return NextResponse.json({
      success: true,
      post: newPost,
      message: 'Post created successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Like/unlike a post
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId, userId, action } = body;

    if (!postId || !userId || !action) {
      return NextResponse.json(
        { error: 'Post ID, user ID, and action are required' },
        { status: 400 }
      );
    }

    const post = posts.find((p) => p.id === postId);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    if (action === 'like') {
      if (!post.likedBy.includes(userId)) {
        post.likedBy.push(userId);
        post.likes += 1;
      }
    } else if (action === 'unlike') {
      const index = post.likedBy.indexOf(userId);
      if (index > -1) {
        post.likedBy.splice(index, 1);
        post.likes -= 1;
      }
    }

    return NextResponse.json({
      success: true,
      post,
      message: `Post ${action}d successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

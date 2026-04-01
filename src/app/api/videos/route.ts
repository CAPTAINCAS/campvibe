import { NextRequest, NextResponse } from 'next/server';

// Mock videos database
let videos = [
  {
    id: '1',
    userId: '2',
    userName: 'Brian Kamau',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    university: 'University of Nairobi',
    title: 'Campus Tour 2024',
    description: 'Check out the beautiful University of Nairobi campus! 🎓',
    videoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    likes: 1234,
    comments: 89,
    shares: 45,
    views: 5678,
    likedBy: [],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    userId: '3',
    userName: 'Amina Wanjiku',
    userAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    university: 'Kenyatta University',
    title: 'KU Tech Innovation Day',
    description: 'Amazing projects from our tech innovation day at Kenyatta University! 💡',
    videoUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    likes: 2345,
    comments: 156,
    shares: 78,
    views: 8901,
    likedBy: [],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    userId: '4',
    userName: 'Grace Muthoni',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    university: 'Moi University',
    title: 'Moi University Graduation 2024',
    description: 'Congratulations to all graduates! 🎉🎓',
    videoUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    likes: 3456,
    comments: 234,
    shares: 123,
    views: 12345,
    likedBy: [],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// GET - Fetch all videos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    let filteredVideos = videos;
    if (userId) {
      filteredVideos = videos.filter((video) => video.userId === userId);
    }

    // Sort by createdAt descending
    filteredVideos.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({
      success: true,
      videos: filteredVideos,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new video
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, userName, userAvatar, university, title, description, videoUrl, thumbnail } = body;

    // Validate input
    if (!userId || !userName || !title || !videoUrl) {
      return NextResponse.json(
        { error: 'User ID, name, title, and video URL are required' },
        { status: 400 }
      );
    }

    // Create new video
    const newVideo = {
      id: String(videos.length + 1),
      userId,
      userName,
      userAvatar: userAvatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      university: university || 'Unknown University',
      title,
      description: description || '',
      videoUrl,
      thumbnail: thumbnail || videoUrl,
      likes: 0,
      comments: 0,
      shares: 0,
      views: 0,
      likedBy: [],
      createdAt: new Date().toISOString(),
    };

    // Add to mock database
    videos.push(newVideo);

    return NextResponse.json({
      success: true,
      video: newVideo,
      message: 'Video created successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Like/unlike a video
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { videoId, userId, action } = body;

    if (!videoId || !userId || !action) {
      return NextResponse.json(
        { error: 'Video ID, user ID, and action are required' },
        { status: 400 }
      );
    }

    const video = videos.find((v) => v.id === videoId);
    if (!video) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    if (action === 'like') {
      if (!video.likedBy.includes(userId)) {
        video.likedBy.push(userId);
        video.likes += 1;
      }
    } else if (action === 'unlike') {
      const index = video.likedBy.indexOf(userId);
      if (index > -1) {
        video.likedBy.splice(index, 1);
        video.likes -= 1;
      }
    } else if (action === 'view') {
      video.views += 1;
    }

    return NextResponse.json({
      success: true,
      video,
      message: `Video ${action}d successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

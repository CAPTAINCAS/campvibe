import { NextRequest, NextResponse } from 'next/server';

// Mock chat messages database
let messages = [
  {
    id: '1',
    senderId: '2',
    senderName: 'Brian Kamau',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    receiverId: '3',
    receiverName: 'Amina Wanjiku',
    receiverAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    content: 'Hey Amina! How are you doing?',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: '2',
    senderId: '3',
    senderName: 'Amina Wanjiku',
    senderAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    receiverId: '2',
    receiverName: 'Brian Kamau',
    receiverAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'Hi Brian! I\'m doing great, thanks! How about you?',
    timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: '3',
    senderId: '2',
    senderName: 'Brian Kamau',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    receiverId: '3',
    receiverName: 'Amina Wanjiku',
    receiverAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    content: 'I\'m good! Are you coming to the campus event this weekend?',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
];

// GET - Fetch messages for a user
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const contactId = searchParams.get('contactId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    let filteredMessages = messages;
    if (contactId) {
      // Get messages between two users
      filteredMessages = messages.filter(
        (msg) =>
          (msg.senderId === userId && msg.receiverId === contactId) ||
          (msg.senderId === contactId && msg.receiverId === userId)
      );
    } else {
      // Get all messages for user
      filteredMessages = messages.filter(
        (msg) => msg.senderId === userId || msg.receiverId === userId
      );
    }

    // Sort by timestamp ascending
    filteredMessages.sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    return NextResponse.json({
      success: true,
      messages: filteredMessages,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Send a new message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { senderId, senderName, senderAvatar, receiverId, receiverName, receiverAvatar, content } = body;

    // Validate input
    if (!senderId || !senderName || !receiverId || !receiverName || !content) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new message
    const newMessage = {
      id: String(messages.length + 1),
      senderId,
      senderName,
      senderAvatar: senderAvatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      receiverId,
      receiverName,
      receiverAvatar: receiverAvatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      content,
      timestamp: new Date().toISOString(),
      read: false,
    };

    // Add to mock database
    messages.push(newMessage);

    return NextResponse.json({
      success: true,
      message: newMessage,
      messageText: 'Message sent successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Mark messages as read
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, contactId } = body;

    if (!userId || !contactId) {
      return NextResponse.json(
        { error: 'User ID and contact ID are required' },
        { status: 400 }
      );
    }

    // Mark all messages from contact as read
    messages.forEach((msg) => {
      if (msg.senderId === contactId && msg.receiverId === userId) {
        msg.read = true;
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Messages marked as read',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

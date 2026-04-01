import { NextRequest, NextResponse } from 'next/server';

// Mock EPL matches database
let matches = [
  {
    id: '1',
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool',
    homeScore: 2,
    awayScore: 1,
    status: 'live',
    minute: 67,
    league: 'Premier League',
    date: new Date().toISOString(),
    streamUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    viewers: 12500,
    chatEnabled: true,
  },
  {
    id: '2',
    homeTeam: 'Chelsea',
    awayTeam: 'Arsenal',
    homeScore: 0,
    awayScore: 0,
    status: 'live',
    minute: 23,
    league: 'Premier League',
    date: new Date().toISOString(),
    streamUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop',
    viewers: 8900,
    chatEnabled: true,
  },
  {
    id: '3',
    homeTeam: 'Manchester City',
    awayTeam: 'Tottenham',
    homeScore: 0,
    awayScore: 0,
    status: 'upcoming',
    minute: 0,
    league: 'Premier League',
    date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    streamUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    viewers: 0,
    chatEnabled: true,
  },
  {
    id: '4',
    homeTeam: 'Newcastle',
    awayTeam: 'Aston Villa',
    homeScore: 1,
    awayScore: 1,
    status: 'finished',
    minute: 90,
    league: 'Premier League',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    streamUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop',
    viewers: 0,
    chatEnabled: false,
  },
];

// Mock streaming chat messages
let streamChatMessages = [
  {
    id: '1',
    matchId: '1',
    userId: '2',
    userName: 'Brian Kamau',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'What a goal! 🔥',
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    matchId: '1',
    userId: '3',
    userName: 'Amina Wanjiku',
    userAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    content: 'Manchester United is playing so well today!',
    timestamp: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    matchId: '1',
    userId: '4',
    userName: 'Grace Muthoni',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    content: 'Come on Liverpool! 💪',
    timestamp: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
  },
];

// GET - Fetch matches
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const matchId = searchParams.get('matchId');

    if (matchId) {
      // Get specific match
      const match = matches.find((m) => m.id === matchId);
      if (!match) {
        return NextResponse.json({ error: 'Match not found' }, { status: 404 });
      }

      // Get chat messages for this match
      const chatMessages = streamChatMessages.filter((msg) => msg.matchId === matchId);

      return NextResponse.json({
        success: true,
        match,
        chatMessages,
      });
    }

    let filteredMatches = matches;
    if (status) {
      filteredMatches = matches.filter((match) => match.status === status);
    }

    // Sort by date
    filteredMatches.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return NextResponse.json({
      success: true,
      matches: filteredMatches,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Send chat message during stream
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { matchId, userId, userName, userAvatar, content } = body;

    if (!matchId || !userId || !userName || !content) {
      return NextResponse.json(
        { error: 'Match ID, user ID, user name, and content are required' },
        { status: 400 }
      );
    }

    // Check if match exists and chat is enabled
    const match = matches.find((m) => m.id === matchId);
    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }

    if (!match.chatEnabled) {
      return NextResponse.json(
        { error: 'Chat is disabled for this match' },
        { status: 403 }
      );
    }

    // Create new chat message
    const newMessage = {
      id: String(streamChatMessages.length + 1),
      matchId,
      userId,
      userName,
      userAvatar: userAvatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      content,
      timestamp: new Date().toISOString(),
    };

    // Add to mock database
    streamChatMessages.push(newMessage);

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

// PUT - Update match score or status
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { matchId, homeScore, awayScore, status, minute } = body;

    if (!matchId) {
      return NextResponse.json(
        { error: 'Match ID is required' },
        { status: 400 }
      );
    }

    const match = matches.find((m) => m.id === matchId);
    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }

    // Update match fields
    if (homeScore !== undefined) match.homeScore = homeScore;
    if (awayScore !== undefined) match.awayScore = awayScore;
    if (status) match.status = status;
    if (minute !== undefined) match.minute = minute;

    return NextResponse.json({
      success: true,
      match,
      message: 'Match updated successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

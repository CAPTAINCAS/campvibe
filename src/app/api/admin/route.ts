import { NextRequest, NextResponse } from 'next/server';

// Mock admin data
let adminStats = {
  totalUsers: 1250,
  activeUsers: 890,
  totalPosts: 3420,
  totalVideos: 156,
  totalMatches: 423,
  totalStreams: 12,
  revenue: 125000,
  premiumUsers: 89,
};

// Mock users for admin management
let users = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@campvibe.co.ke',
    role: 'admin',
    status: 'active',
    university: 'University of Nairobi',
    createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Brian Kamau',
    email: 'brian@uonbi.ac.ke',
    role: 'user',
    status: 'active',
    university: 'University of Nairobi',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    name: 'Amina Wanjiku',
    email: 'amina@ku.ac.ke',
    role: 'user',
    status: 'active',
    university: 'Kenyatta University',
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    name: 'Grace Muthoni',
    email: 'grace@mu.ac.ke',
    role: 'user',
    status: 'suspended',
    university: 'Moi University',
    createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
];

// Mock reports
let reports = [
  {
    id: '1',
    type: 'post',
    reportedBy: 'Brian Kamau',
    reportedUser: 'Grace Muthoni',
    reason: 'Inappropriate content',
    status: 'pending',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    type: 'user',
    reportedBy: 'Amina Wanjiku',
    reportedUser: 'Unknown User',
    reason: 'Spam account',
    status: 'resolved',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
];

// GET - Fetch admin stats and data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'stats') {
      return NextResponse.json({
        success: true,
        stats: adminStats,
      });
    }

    if (type === 'users') {
      return NextResponse.json({
        success: true,
        users,
      });
    }

    if (type === 'reports') {
      return NextResponse.json({
        success: true,
        reports,
      });
    }

    // Return all data
    return NextResponse.json({
      success: true,
      stats: adminStats,
      users,
      reports,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Admin actions (ban user, resolve report, etc.)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, userId, reportId, reason } = body;

    if (!action) {
      return NextResponse.json(
        { error: 'Action is required' },
        { status: 400 }
      );
    }

    if (action === 'banUser') {
      if (!userId) {
        return NextResponse.json(
          { error: 'User ID is required' },
          { status: 400 }
        );
      }

      const user = users.find((u) => u.id === userId);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      user.status = 'banned';

      return NextResponse.json({
        success: true,
        message: `User ${user.name} has been banned`,
      });
    }

    if (action === 'suspendUser') {
      if (!userId) {
        return NextResponse.json(
          { error: 'User ID is required' },
          { status: 400 }
        );
      }

      const user = users.find((u) => u.id === userId);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      user.status = 'suspended';

      return NextResponse.json({
        success: true,
        message: `User ${user.name} has been suspended`,
      });
    }

    if (action === 'activateUser') {
      if (!userId) {
        return NextResponse.json(
          { error: 'User ID is required' },
          { status: 400 }
        );
      }

      const user = users.find((u) => u.id === userId);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      user.status = 'active';

      return NextResponse.json({
        success: true,
        message: `User ${user.name} has been activated`,
      });
    }

    if (action === 'resolveReport') {
      if (!reportId) {
        return NextResponse.json(
          { error: 'Report ID is required' },
          { status: 400 }
        );
      }

      const report = reports.find((r) => r.id === reportId);
      if (!report) {
        return NextResponse.json({ error: 'Report not found' }, { status: 404 });
      }

      report.status = 'resolved';

      return NextResponse.json({
        success: true,
        message: 'Report has been resolved',
      });
    }

    if (action === 'dismissReport') {
      if (!reportId) {
        return NextResponse.json(
          { error: 'Report ID is required' },
          { status: 400 }
        );
      }

      const report = reports.find((r) => r.id === reportId);
      if (!report) {
        return NextResponse.json({ error: 'Report not found' }, { status: 404 });
      }

      report.status = 'dismissed';

      return NextResponse.json({
        success: true,
        message: 'Report has been dismissed',
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

// PUT - Update admin stats
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { stats } = body;

    if (stats) {
      adminStats = { ...adminStats, ...stats };
    }

    return NextResponse.json({
      success: true,
      stats: adminStats,
      message: 'Stats updated successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

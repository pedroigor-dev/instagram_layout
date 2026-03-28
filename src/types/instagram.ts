export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  isVerified: boolean;
  isFollowing: boolean;
  followersCount?: number;
  bio?: string;
}

export interface Comment {
  id: string;
  author: User;
  text: string;
  likeCount: number;
  timestamp: string;
}

export interface Post {
  id: string;
  author: User;
  images: string[];
  caption: string;
  music?: { artist: string; song: string };
  likeCount: number;
  commentCount: number;
  shareCount: number;
  sendCount: number;
  isLiked: boolean;
  isSaved: boolean;
  friendLikers: User[];
  likedByUsername?: string;
  timestamp: string;
}

export interface Story {
  id: string;
  user: User;
  hasUnread: boolean;
  isOwn?: boolean;
}

export interface Suggestion {
  user: User;
  reason: string;
}

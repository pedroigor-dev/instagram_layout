import type { Post, Story, Suggestion, User } from "@/types/instagram";

export const ME: User = {
  id: "me",
  username: "_pedroigorc",
  displayName: "Pedro Igor",
  avatar: "https://i.pravatar.cc/150?img=12",
  isVerified: false,
  isFollowing: false,
  bio: "pedrocmpss",
};

export const USERS: User[] = [
  {
    id: "u1",
    username: "travisscott",
    displayName: "travisscott",
    avatar: "https://i.pravatar.cc/150?img=3",
    isVerified: true,
    isFollowing: true,
  },
  {
    id: "u2",
    username: "ecbahia",
    displayName: "EC Bahia",
    avatar: "https://i.pravatar.cc/150?img=5",
    isVerified: true,
    isFollowing: true,
  },
  {
    id: "u3",
    username: "toguro",
    displayName: "toguro",
    avatar: "https://i.pravatar.cc/150?img=8",
    isVerified: true,
    isFollowing: true,
  },
  {
    id: "u4",
    username: "jaquilunu",
    displayName: "Jaqui Luna",
    avatar: "https://i.pravatar.cc/150?img=47",
    isVerified: false,
    isFollowing: true,
  },
  {
    id: "u5",
    username: "y.6.n_",
    displayName: "Y6N",
    avatar: "https://i.pravatar.cc/150?img=11",
    isVerified: false,
    isFollowing: true,
  },
  {
    id: "u6",
    username: "meneneto",
    displayName: "Meneneto",
    avatar: "https://i.pravatar.cc/150?img=15",
    isVerified: false,
    isFollowing: true,
  },
  {
    id: "u7",
    username: "well_sa",
    displayName: "Well SA",
    avatar: "https://i.pravatar.cc/150?img=20",
    isVerified: false,
    isFollowing: false,
  },
  {
    id: "u8",
    username: "nandalizad",
    displayName: "Nanda Lizad",
    avatar: "https://i.pravatar.cc/150?img=49",
    isVerified: false,
    isFollowing: true,
  },
  {
    id: "u9",
    username: "luis_zeus_",
    displayName: "Luis Zeus",
    avatar: "https://i.pravatar.cc/150?img=65",
    isVerified: false,
    isFollowing: true,
  },
  {
    id: "u10",
    username: "ramonded",
    displayName: "Ramon Dede",
    avatar: "https://i.pravatar.cc/150?img=33",
    isVerified: false,
    isFollowing: true,
  },
];

export const SUGGESTIONS: Suggestion[] = [
  {
    user: {
      id: "s1",
      username: "matheuscruz",
      displayName: "Matheus Cruz 🧡",
      avatar: "https://i.pravatar.cc/150?img=22",
      isVerified: false,
      isFollowing: false,
    },
    reason: "Seguido(a) por oandreyjanjos",
  },
  {
    user: {
      id: "s2",
      username: "arthurferreira",
      displayName: "Arthur Ferreira",
      avatar: "https://i.pravatar.cc/150?img=25",
      isVerified: false,
      isFollowing: false,
    },
    reason: "Seguido(a) por chikool e mai",
  },
  {
    user: {
      id: "s3",
      username: "marcelorefferson",
      displayName: "Marcelo Refferson",
      avatar: "https://i.pravatar.cc/150?img=30",
      isVerified: false,
      isFollowing: false,
    },
    reason: "Seguido(a) por micael_limah_",
  },
  {
    user: {
      id: "s4",
      username: "tonncom2ns",
      displayName: "Tonncom2ns",
      avatar: "https://i.pravatar.cc/150?img=40",
      isVerified: false,
      isFollowing: false,
    },
    reason: "Seguido(a) por paulooev e ou",
  },
  {
    user: {
      id: "s5",
      username: "ramonrayron",
      displayName: "ramon rayron",
      avatar: "https://i.pravatar.cc/150?img=60",
      isVerified: false,
      isFollowing: false,
    },
    reason: "Seguido(a) por oandreyjanjos",
  },
];

export const STORIES: Story[] = [
  { id: "s0", user: ME, hasUnread: false, isOwn: true },
  { id: "s1", user: USERS[4], hasUnread: true },
  { id: "s2", user: USERS[5], hasUnread: true },
  { id: "s3", user: USERS[6], hasUnread: false },
  { id: "s4", user: USERS[7], hasUnread: true },
  { id: "s5", user: USERS[8], hasUnread: true },
  { id: "s6", user: USERS[9], hasUnread: false },
  { id: "s7", user: USERS[1], hasUnread: true },
];

export const INITIAL_POSTS: Post[] = [
  {
    id: "p1",
    author: USERS[2], // toguro collab with ecbahia
    images: [
      "https://picsum.photos/seed/bahia1/800/800",
      "https://picsum.photos/seed/bahia2/800/800",
      "https://picsum.photos/seed/bahia3/800/800",
      "https://picsum.photos/seed/bahia4/800/800",
      "https://picsum.photos/seed/bahia5/800/800",
    ],
    caption:
      "novo preparador físico do esporte clube Bahia 🙏🏽",
    music: { artist: "Ogryzek", song: "AURA" },
    likeCount: 107000,
    commentCount: 2787,
    shareCount: 844,
    sendCount: 10300,
    isLiked: false,
    isSaved: false,
    friendLikers: [USERS[3], USERS[4], USERS[5]],
    likedByUsername: "jaquilunu",
    timestamp: "19 horas",
  },
  {
    id: "p2",
    author: USERS[0], // travisscott
    images: [
      "https://picsum.photos/seed/travis1/800/1000",
      "https://picsum.photos/seed/travis2/800/1000",
    ],
    caption: "🌵🌵🌵",
    likeCount: 2400000,
    commentCount: 18400,
    shareCount: 5200,
    sendCount: 92000,
    isLiked: false,
    isSaved: false,
    friendLikers: [USERS[5], USERS[8]],
    likedByUsername: "meneneto",
    timestamp: "2 h",
  },
  {
    id: "p3",
    author: USERS[7], // nandalizad
    images: ["https://picsum.photos/seed/nanda1/800/900"],
    caption: "sábado 🫶",
    likeCount: 3420,
    commentCount: 89,
    shareCount: 12,
    sendCount: 245,
    isLiked: true,
    isSaved: false,
    friendLikers: [USERS[4]],
    likedByUsername: "y.6.n_",
    timestamp: "4 h",
  },
];

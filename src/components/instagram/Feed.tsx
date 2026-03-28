import { Post } from "./Post";
import type { Post as PostType } from "@/types/instagram";

interface FeedProps {
  posts: PostType[];
}

export function Feed({ posts }: FeedProps) {
  return (
    <main className="w-full">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

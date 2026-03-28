import { Post } from "./Post";
import type { Post as PostType } from "@/types/instagram";
import type { FeedMode } from "./FeedFilterModal";

interface FeedProps {
  posts: PostType[];
  mode?: FeedMode;
}

export function Feed({ posts, mode = "all" }: FeedProps) {
  const filtered =
    mode === "all"
      ? posts
      : posts.filter((p) =>
          mode === "friends" ? p.feedType === "friend" : p.feedType === "recommended"
        );

  return (
    <main className="w-full">
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-neutral-400">
          <p className="text-sm">Nenhuma publicação aqui.</p>
        </div>
      ) : (
        filtered.map((post) => <Post key={post.id} post={post} />)
      )}
    </main>
  );
}

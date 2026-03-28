import { Feed } from "@/components/instagram/Feed";
import { Sidebar } from "@/components/instagram/Sidebar";
import { Stories } from "@/components/instagram/Stories";
import { RightPanel } from "@/components/instagram/RightPanel";
import { MobileNav } from "@/components/instagram/MobileNav";
import { INITIAL_POSTS, STORIES, SUGGESTIONS, ME } from "@/data/mock";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black sticky top-0 z-40">
          <span className="font-['Billabong',cursive] text-3xl tracking-tighter">Instagram</span>
        </header>

        <div className="max-w-117.5 mx-auto w-full">
          <Stories stories={STORIES} />
          <div className="pb-20 md:pb-6">
            <Feed posts={INITIAL_POSTS} />
          </div>
        </div>
      </div>

      <RightPanel currentUser={ME} suggestions={SUGGESTIONS} />
      <MobileNav />
    </div>
  );
}

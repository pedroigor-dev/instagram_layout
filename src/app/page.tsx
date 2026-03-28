import { Feed } from "@/components/instagram/Feed";
import { Sidebar } from "@/components/instagram/Sidebar";
import { Stories } from "@/components/instagram/Stories";
import { RightPanel } from "@/components/instagram/RightPanel";
import { MobileNav } from "@/components/instagram/MobileNav";
import { INITIAL_POSTS, STORIES, SUGGESTIONS, ME } from "@/data/mock";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-black font-sans">
      <Sidebar />

      <div className="flex flex-1 min-w-0 justify-center">
        <div className="flex items-start gap-8 w-full max-w-[880px]">
          <div className="flex-1 min-w-0 max-w-[550px]">
            <header className="md:hidden flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black sticky top-0 z-40">
              <span className="font-['Billabong',cursive] text-3xl tracking-tighter">Instagram</span>
            </header>
            <Stories stories={STORIES} />
            <div className="pb-20 md:pb-6">
              <Feed posts={INITIAL_POSTS} />
            </div>
          </div>
          <RightPanel currentUser={ME} suggestions={SUGGESTIONS} />
        </div>
      </div>

      <MobileNav />
    </div>
  );
}

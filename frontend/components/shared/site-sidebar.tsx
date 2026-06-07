import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/shared/icon";

type SiteSidebarProps = {
  currentPath: "/" | "/academic";
};

function navClass(active: boolean) {
  return `group flex items-center gap-4 py-2 transition-colors ${
    active ? "text-primary" : "text-on-surface-variant hover:text-primary"
  }`;
}

export function SiteSidebar({ currentPath }: SiteSidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-64 flex-col border-r border-white/5 bg-surface-glass py-margin-safe backdrop-blur-lg md:flex">
      <div className="flex h-full flex-col px-4 py-8">
        <div className="mb-12 flex flex-col items-start gap-4 px-4">
          <div className="mb-2 h-10 w-10 rounded border border-primary/30 bg-primary/5 p-1">
            <Image
              alt="JL Logo"
              className="h-full w-full object-contain"
              height={40}
              src="https://lh3.googleusercontent.com/aida/AP1WRLu3YSooyisvktCZ-Z5D8_nb4tQddMutMfJXTaJuUarRY5sM90V1vis71UVOQA_EuKhOFDQqD2QFyoZTpUVxzUzPkrJ3l6I7tAJ4RTFL0nLihmOXxtlOOgCaK0w_EsApWgTR1iDkhvbQQisQygWSvrovNF9B_CG49JM3uMaK_qAU55o9cZJwzkSjK2Mfg5cfkAsLPEwam8jJNZlFP4MkiwvrvIDDyTcX2NI7OwCWg_LFSVLGTY9JiwEjqeI"
              width={40}
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-lg text-lg tracking-tight text-primary">
              Jonathan Lyashko
            </h2>
            <span className="font-label-caps text-[9px] uppercase tracking-widest text-on-surface-variant">
              Computer Engineering Student
            </span>
            <p className="mt-2 border-l border-primary/20 pl-2 font-code-sm text-[9px] italic text-primary/70">
              Let&apos;s build something the world needs
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-8 px-4">
          <Link className={navClass(currentPath === "/")} href="/">
            <Icon className="h-6 w-6" name="home" />
            <span className="font-label-caps text-[10px] tracking-widest">HOME</span>
          </Link>
          <Link className={navClass(false)} href="/#about">
            <Icon className="h-6 w-6" name="person" />
            <span className="font-label-caps text-[10px] tracking-widest">ABOUT ME</span>
          </Link>
          <Link className={navClass(currentPath === "/academic")} href="/academic">
            <Icon className="h-6 w-6" name="school" />
            <span className="font-label-caps text-[10px] tracking-widest">ACADEMIC</span>
          </Link>
          <Link className={navClass(false)} href="/#experience">
            <Icon className="h-6 w-6" name="history_edu" />
            <span className="font-label-caps text-[10px] tracking-widest">EXPERIENCE</span>
          </Link>
          <Link className={navClass(false)} href="/#projects">
            <Icon className="h-6 w-6" name="dashboard" />
            <span className="font-label-caps text-[10px] tracking-widest">PROJECTS</span>
          </Link>
          <Link className={navClass(false)} href="/#contact">
            <Icon className="h-6 w-6" name="mail" />
            <span className="font-label-caps text-[10px] tracking-widest">CONTACT</span>
          </Link>
        </nav>

        <div className="mt-auto flex flex-col items-start gap-6 px-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded border border-primary/40 bg-analog-gray">
              <span className="text-[10px] font-bold text-primary">JL</span>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="group flex h-8 w-8 items-center justify-center rounded border border-primary/10 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <svg className="h-4 w-4 text-on-surface-variant transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="#"
              className="group flex h-8 w-8 items-center justify-center rounded border border-primary/10 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <svg className="h-4 w-4 text-on-surface-variant transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="group flex h-8 w-8 items-center justify-center rounded border border-primary/10 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <Icon className="h-[18px] w-[18px] text-on-surface-variant transition-colors group-hover:text-primary" name="mail" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

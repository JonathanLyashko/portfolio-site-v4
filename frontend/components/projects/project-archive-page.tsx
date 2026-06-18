import Link from "next/link";
import { Icon } from "@/components/shared/icon";
import { ProjectArchiveCard } from "@/components/projects/project-archive-card";
import { projectItems } from "@/lib/site-data";

export function ProjectArchivePage() {
  return (
    <main className="relative mx-auto max-w-7xl flex-grow overflow-visible px-4 pb-24 pt-32 md:ml-64 md:px-margin-safe">
      <div className="mx-auto max-w-6xl px-gutter py-12">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 border-l-4 border-primary pl-6 md:flex-row">
          <div>
            <h1 className="mb-2 font-headline-xl text-5xl tracking-tighter text-primary md:text-7xl">
              {"Things I've Built"}
            </h1>
            <p className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant">
              <br />
            </p>
          </div>
          <Link
            className="group flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-glass px-6 py-3 shadow-lg transition-all active:scale-95 hover:border-primary-fixed-dim"
            href="/"
          >
            <Icon className="h-5 w-5 text-primary group-hover:animate-pulse" name="home" />
            <span className="font-label-caps text-label-caps text-primary">
              RETURN TO HOME
            </span>
          </Link>
        </div>

        <section className="grid gap-6 lg:grid-cols-3">
          {projectItems.map((project) => (
            <ProjectArchiveCard key={project.slug} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}

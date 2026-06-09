import Link from "next/link";
import { ProjectArchiveCard } from "@/components/projects/project-archive-card";
import { projectItems } from "@/lib/site-data";

export function ProjectArchivePage() {
  return (
    <main className="relative mx-auto max-w-7xl flex-grow overflow-visible px-4 pb-24 pt-32 md:ml-64 md:px-margin-safe">
      <div className="mx-auto max-w-6xl px-gutter py-12">
        <section className="mb-12 flex flex-col gap-4 border-l-4 border-primary pl-6">
          <Link
            className="font-headline-lg text-xl text-on-surface underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary"
            href="/"
          >
            Project Archive
          </Link>
          <p className="font-label-caps text-[10px] uppercase tracking-[0.32em] text-primary/70">
            Core Data Extraction [0x7FF02]
          </p>
          <h1 className="font-headline-xl text-5xl tracking-tight text-primary md:text-7xl">
            Projects archive.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            A persistent grid of software, embedded, and systems builds. Each card
            opens into a dedicated project page with a fuller breakdown.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {projectItems.map((project) => (
            <ProjectArchiveCard key={project.slug} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}

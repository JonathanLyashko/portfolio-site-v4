import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/shared/icon";
import type { ProjectItem } from "@/lib/site-data";

type ProjectDetailPageProps = {
  project: ProjectItem;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main className="relative mx-auto max-w-7xl flex-grow overflow-visible px-4 pb-24 pt-32 md:ml-64 md:px-margin-safe">
      <div className="mx-auto max-w-6xl px-gutter py-12">
        <section className="mb-12 flex flex-col gap-6 border-l-4 border-primary pl-6">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="font-headline-lg text-xl text-on-surface underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary"
              href="/projects"
            >
              Project Archive
            </Link>
            <span className="rounded border border-primary/15 bg-primary/5 px-3 py-1 font-label-caps text-[10px] tracking-widest text-primary">
              {project.archiveCode}
            </span>
          </div>
          <p className="font-label-caps text-[10px] uppercase tracking-[0.32em] text-primary/70">
            {project.label}
          </p>
          <h1 className="font-headline-xl text-5xl tracking-tight text-primary md:text-7xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-on-surface-variant">
            {project.summary}
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_320px]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-primary/15 bg-surface-panel/45 p-3">
              <Image
                alt={project.title}
                className="aspect-[16/10] w-full rounded-xl object-cover"
                height={720}
                src={project.img}
                unoptimized
                width={1200}
              />
            </div>
            <div className="rounded-2xl border border-primary/12 bg-surface-panel/35 p-6">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                Problem
              </p>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-primary/12 bg-surface-panel/35 p-6">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                Solution
              </p>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{project.solution}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-primary/12 bg-surface-panel/35 p-6">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                Stack
              </p>
              <p className="mt-4 font-code-sm text-sm text-primary">{project.tech}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-primary/15 bg-primary/5 px-2 py-1 font-label-caps text-[9px] tracking-widest text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-primary/12 bg-surface-panel/35 p-6">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                Links
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.22em] text-primary transition-colors hover:text-primary-container"
                  href={project.links.repo ?? "/projects"}
                >
                  <Icon className="h-3.5 w-3.5" name="github" />
                  Source Code
                </a>
                <Link
                  className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.22em] text-primary transition-colors hover:text-primary-container"
                  href="/projects"
                >
                  <Icon className="h-3.5 w-3.5" name="arrow_forward" />
                  Back to all projects
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

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
      <div className="mx-auto max-w-6xl px-gutter py-8">
        <div className="mb-8 grid gap-6 border-l-2 border-primary/80 pl-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
          <div className="flex min-w-0 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.category ? (
                <span className="rounded border border-primary/15 bg-primary/5 px-3 py-1 font-label-caps text-[10px] tracking-widest text-primary">
                  {project.category}
                </span>
              ) : null}
              {project.year ? (
                <span className="font-code-sm text-[10px] uppercase tracking-[0.24em] text-on-surface-variant/55">
                  {project.year}
                </span>
              ) : null}
            </div>
            <p className="font-label-caps text-[10px] uppercase tracking-[0.32em] text-primary/70">
              {project.label}
            </p>
            <h1 className="max-w-4xl font-headline-xl text-4xl tracking-tight text-primary md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-4xl text-[15px] leading-relaxed text-on-surface-variant">
              {project.summary}
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Link
              className="group inline-flex items-center gap-2 rounded border border-outline-variant bg-surface-glass px-5 py-3 transition-all active:scale-95 hover:border-primary/40"
              href="/projects"
            >
              <Icon
                className="h-4 w-4 -scale-x-100 text-primary"
                name="arrow_forward"
              />
              <span className="font-label-caps text-[10px] tracking-[0.22em] text-primary">
                BACK TO PROJECTS
              </span>
            </Link>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.32fr)_320px]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-primary/14 bg-surface-panel/45 p-2">
              <Image
                alt={project.title}
                className="aspect-[16/9] w-full rounded-lg object-cover"
                height={720}
                src={project.img}
                unoptimized
                width={1200}
              />
            </div>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="rounded-xl border border-primary/12 bg-surface-panel/35 p-5">
                <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                  What it does
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {project.whatItDoes}
                </p>
              </div>
              <div className="rounded-xl border border-primary/12 bg-surface-panel/35 p-5">
                <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                  How it works
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {project.howItWorks}
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
            <div className="rounded-xl border border-primary/12 bg-surface-panel/35">
              <div className="border-b border-primary/10 px-5 py-4">
                <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                  Project spec
                </p>
              </div>
              <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-x-4 gap-y-4 px-5 py-4 text-sm">
                <span className="font-label-caps text-[9px] tracking-[0.2em] text-primary/48">
                  Year
                </span>
                <span className="font-code-sm text-on-surface">{project.year ?? "N/A"}</span>

                <span className="font-label-caps text-[9px] tracking-[0.2em] text-primary/48">
                  Category
                </span>
                <span className="font-code-sm text-on-surface">{project.category ?? "N/A"}</span>

                <span className="font-label-caps text-[9px] tracking-[0.2em] text-primary/48">
                  Stack
                </span>
                <span className="font-code-sm leading-relaxed text-primary">{project.tech}</span>
              </div>
            </div>

            <div className="rounded-xl border border-primary/12 bg-surface-panel/35 p-5">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                Stack tags
              </p>
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

            <div className="rounded-xl border border-primary/12 bg-surface-panel/35 p-5">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                Key technical challenges
              </p>
              <div className="mt-4 space-y-3">
                {project.challenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <p className="text-sm leading-relaxed text-on-surface-variant">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/12 bg-surface-panel/35 p-5">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.28em] text-primary/60">
                Links
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {project.links.live ? (
                  <a
                    className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.22em] text-primary transition-colors hover:text-primary-container"
                    href={project.links.live}
                  >
                    <Icon className="h-3.5 w-3.5" name="open_in_new" />
                    Live Site
                  </a>
                ) : null}
                {project.links.repo ? (
                  <a
                    className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.22em] text-primary transition-colors hover:text-primary-container"
                    href={project.links.repo}
                  >
                    <Icon className="h-3.5 w-3.5" name="github" />
                    GitHub
                  </a>
                ) : null}
                <Link
                  className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.22em] text-primary transition-colors hover:text-primary-container"
                  href="/projects"
                >
                  <Icon className="h-3.5 w-3.5 -scale-x-100" name="arrow_forward" />
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

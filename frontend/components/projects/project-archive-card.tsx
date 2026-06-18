import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/shared/icon";
import type { ProjectItem } from "@/lib/site-data";

type ProjectArchiveCardProps = {
  project: ProjectItem;
};

export function ProjectArchiveCard({ project }: ProjectArchiveCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-surface-panel/55 p-4">
      <Link className="absolute inset-0 z-10" href={`/projects/${project.slug}`}>
        <span className="sr-only">Open {project.title}</span>
      </Link>
      <div className="relative mb-4 overflow-hidden rounded-xl border border-primary/15 bg-background/80">
        <Image
          alt={project.title}
          className="aspect-[16/10] w-full object-cover"
          height={320}
          src={project.img}
          unoptimized
          width={520}
        />
      </div>
      <div className="relative z-20 flex min-h-[180px] flex-col">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {project.category ? (
            <span className="rounded border border-primary/15 bg-primary/5 px-2 py-1 font-label-caps text-[9px] tracking-widest text-primary">
              {project.category}
            </span>
          ) : null}
          {project.year ? (
            <span className="font-code-sm text-[10px] uppercase tracking-[0.24em] text-on-surface-variant/55">
              {project.year}
            </span>
          ) : null}
        </div>
        <h3 className="font-headline-lg text-2xl text-on-surface">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{project.desc}</p>
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
        <div className="mt-auto flex items-center justify-between border-t border-primary/10 pt-4">
          <Link
            className="relative z-20 flex items-center gap-2 font-label-caps text-[10px] tracking-widest text-primary transition-colors hover:text-primary-container"
            href={`/projects/${project.slug}`}
          >
            <Icon className="h-3.5 w-3.5" name="arrow_forward" />
            VIEW DETAILS
          </Link>
          <span className="font-code-sm text-[10px] uppercase tracking-widest text-on-surface-variant/45">
            {project.tech}
          </span>
        </div>
      </div>
    </article>
  );
}

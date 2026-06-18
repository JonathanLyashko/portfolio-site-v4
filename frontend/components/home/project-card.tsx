import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/shared/icon";
import type { ProjectItem } from "@/lib/site-data";

type ProjectCardProps = ProjectItem;

export function ProjectCard({
  slug,
  label,
  title,
  tech,
  desc,
  tags,
  img,
  links,
}: ProjectCardProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-surface-panel/40 p-6">
      <Link className="absolute inset-0 z-10" href={`/projects/${slug}`}>
        <span className="sr-only">Open {title}</span>
      </Link>
      <div className="scanline opacity-5"></div>
      <div className="relative mb-6">
        <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-background p-1 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
          <Image
            alt={title}
            className="aspect-video w-full rounded-lg object-cover"
            height={270}
            src={img}
            unoptimized
            width={480}
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-grow flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-label-caps text-[10px] uppercase tracking-widest text-primary">
            {label}
          </span>
          <h3 className="font-headline-lg text-2xl text-on-surface">{title}</h3>
          <p className="font-code-sm text-xs text-primary-container">{tech}</p>
        </div>
        <p className="text-sm leading-relaxed text-on-surface-variant font-body-md">{desc}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 font-label-caps text-[9px] text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-primary/10 pt-4">
          <div className="flex gap-3">
            <a
              className="relative z-20 flex items-center gap-1 font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
              href={links.repo ?? `/projects/${slug}`}
            >
              <Icon className="h-4 w-4" name="code" />
              Code
            </a>
            <a
              className="relative z-20 flex items-center gap-1 font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
              href={links.live ?? `/projects/${slug}`}
            >
              <Icon className="h-4 w-4" name="open_in_new" />
              Demo
            </a>
          </div>
          <Link
            className="relative z-20 group flex items-center gap-1 font-label-caps text-[9px] text-primary transition-colors hover:text-primary-container"
            href={`/projects/${slug}`}
          >
            Details
            <Icon
              className="h-3 w-3 transition-transform group-hover:translate-x-1"
              name="arrow_forward"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

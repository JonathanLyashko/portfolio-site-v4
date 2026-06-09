import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/projects/project-detail-page";
import { SiteShell } from "@/components/shared/site-shell";
import { getProjectBySlug, projectItems } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectItems.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell currentPath="/projects">
      <ProjectDetailPage project={project} />
    </SiteShell>
  );
}

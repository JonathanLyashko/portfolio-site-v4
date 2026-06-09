import { ProjectArchivePage } from "@/components/projects/project-archive-page";
import { SiteShell } from "@/components/shared/site-shell";

export default function Page() {
  return (
    <SiteShell currentPath="/projects">
      <ProjectArchivePage />
    </SiteShell>
  );
}

import { AcademicPage } from "@/components/academic/academic-page";
import { SiteShell } from "@/components/shared/site-shell";

export default function Page() {
  return (
    <SiteShell currentPath="/academic">
      <AcademicPage />
    </SiteShell>
  );
}

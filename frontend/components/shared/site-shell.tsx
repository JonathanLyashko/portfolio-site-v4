import { GrainOverlay } from "@/components/shared/grain-overlay";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteSidebar } from "@/components/shared/site-sidebar";

type SiteShellProps = {
  children: React.ReactNode;
  currentPath: "/" | "/academic";
};

export function SiteShell({ children, currentPath }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <GrainOverlay />
      <SiteSidebar currentPath={currentPath} />
      {children}
      <SiteFooter />
    </div>
  );
}

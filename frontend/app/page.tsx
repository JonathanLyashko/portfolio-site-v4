import { HomePage } from "@/components/home/home-page";
import { SiteShell } from "@/components/shared/site-shell";

export default function Page() {
  return (
    <SiteShell currentPath="/">
      <HomePage />
    </SiteShell>
  );
}

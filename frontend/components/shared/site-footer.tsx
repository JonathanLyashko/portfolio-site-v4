export function SiteFooter() {
  return (
    <footer className="relative mt-auto w-full overflow-hidden border-t border-analog-gray/30 bg-surface-container-lowest md:ml-64">
      <div className="relative z-10 grid grid-cols-1 items-center gap-gutter px-margin-safe py-panel-padding md:grid-cols-3">
        <div>
          <p className="font-code-sm text-code-sm text-outline-variant">
            © 2026 Jonathan Lyashko // Computer Engineering Student
          </p>
        </div>
        <div className="flex justify-center gap-8">
          <a className="font-label-caps text-label-caps text-outline-variant transition-all hover:text-secondary-container" href="#">
            GitHub
          </a>
          <a className="font-label-caps text-label-caps text-outline-variant transition-all hover:text-secondary-container" href="#">
            LinkedIn
          </a>
        </div>
        <div className="flex md:justify-end">
          <span className="flex items-center gap-2 font-label-caps text-label-caps text-secondary">
            <span className="h-1 w-1 rounded-full bg-secondary"></span>
            Term Status: STUDY
          </span>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
      />
    </footer>
  );
}

import Image from "next/image";

type ExperienceEntryProps = {
  title: string;
  company: string;
  period: string;
  points: string[];
  logo?: string;
  initials?: string;
};

export function ExperienceEntry({
  title,
  company,
  period,
  points,
  logo,
  initials,
}: ExperienceEntryProps) {
  return (
    <div className="relative">
      <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(0,229,255,0.6)] md:-left-[57px]"></div>
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-on-surface">{title}</h3>
          <div className="mt-1 flex items-center gap-2 font-label-caps text-label-caps text-primary">
            {logo ? (
              <Image
                alt={company}
                className="h-8 w-8 rounded-sm object-contain grayscale opacity-70"
                height={32}
                src={logo}
                unoptimized
                width={32}
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary/20 text-xs">
                {initials}
              </div>
            )}
            <span>{company}</span>
          </div>
        </div>
        <span className="rounded border border-white/5 bg-surface-container px-3 py-1 font-code-sm text-code-sm text-on-surface-variant">
          {period}
        </span>
      </div>
      <ul className="space-y-2 font-body-md text-on-surface-variant">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="text-primary">{"//"}</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

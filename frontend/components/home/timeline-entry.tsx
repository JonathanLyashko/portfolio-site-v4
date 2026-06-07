function renderTextWithEmphasis(text: string) {
  return text.split(/(\[\[.*?\]\])/g).filter(Boolean).map((segment, index) => {
    const isEmphasized = segment.startsWith("[[") && segment.endsWith("]]");

    if (!isEmphasized) {
      return <span key={`${segment}-${index}`}>{segment}</span>;
    }

    return (
      <span
        key={`${segment}-${index}`}
        className="italic text-primary-container"
        style={{ fontFamily: "serif" }}
      >
        {segment.slice(2, -2)}
      </span>
    );
  });
}

type TimelineEntryProps = {
  number: string;
  title: string;
  subtitle: string;
  text: string;
};

export function TimelineEntry({
  number,
  title,
  subtitle,
  text,
}: TimelineEntryProps) {
  return (
    <div className="group relative">
      <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(0,229,255,0.6)] transition-transform group-hover:scale-125 md:-left-[57px]"></div>
      <div className="flex flex-col gap-2">
        <span className="font-label-caps text-[10px] tracking-widest text-secondary">
          <span className="mr-2 text-2xl font-bold">{number}.</span> {title}
        </span>
        <h3 className="text-xl font-bold text-on-surface">{subtitle}</h3>
        <p className="max-w-2xl font-body-md text-on-surface-variant">
          {renderTextWithEmphasis(text)}
        </p>
      </div>
    </div>
  );
}

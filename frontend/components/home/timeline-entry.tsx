import { Fragment } from "react";

const emphasizedWords = new Set([
  "infrastructure",
  "workflows.",
  "architecture.",
  "engineering",
  "protocols",
  "models.",
  "design",
  "computing",
  "silicon",
  "electrons.",
]);

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
          {text.split(" ").map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              {emphasizedWords.has(word) ? (
                <span
                  className="italic text-primary-container"
                  style={{ fontFamily: "serif" }}
                >
                  {word}{" "}
                </span>
              ) : (
                `${word} `
              )}
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

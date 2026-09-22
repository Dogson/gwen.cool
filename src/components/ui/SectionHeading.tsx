import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
};

export function SectionHeading({ index, kicker, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="font-display text-sm text-clay">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-faint">
          {kicker}
        </span>
      </div>
      <h2 className="mt-6 max-w-2xl text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}

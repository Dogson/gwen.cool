import { profileParagraphs, pullQuote } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Profile() {
  return (
    <section id="profil" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          kicker="Profil"
          title="Du schéma de données jusqu'à l'écran."
        />

        <Reveal delay={0.08} className="mt-14 max-w-3xl">
          <blockquote className="relative">
            <span
              aria-hidden
              className="absolute -top-8 -left-1 font-display text-7xl leading-none text-sage/50"
            >
              “
            </span>
            <p className="font-display text-2xl leading-snug text-forest text-balance sm:text-3xl md:text-4xl">
              {pullQuote}
            </p>
          </blockquote>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-line pt-10 md:grid-cols-2 md:gap-14">
          {profileParagraphs.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="text-base leading-relaxed text-muted text-pretty sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

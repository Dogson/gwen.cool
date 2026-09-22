import type { CSSProperties } from "react";
import { projects } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
  return (
    <section id="projets" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="03"
            kicker="Projets persos"
            title="Ce que je bricole pour moi."
          />
          <Reveal delay={0.15}>
            <p className="hidden pb-2 text-sm text-faint md:block">
              Survolez un projet pour l'ouvrir
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-b border-line">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                style={{ "--accent": project.accent } as CSSProperties}
                className="group relative block overflow-hidden border-t border-line"
              >
                <span
                  aria-hidden
                  style={{ backgroundColor: project.accent }}
                  className="absolute inset-0 origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-[0.08]"
                />

                <div className="relative flex flex-col gap-4 px-1 py-7 md:flex-row md:items-center md:gap-8 md:px-4 md:py-8">
                  <span className="font-display text-sm text-faint transition-colors duration-300 group-hover:text-[var(--accent)] md:w-12">
                    {project.index}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="text-3xl text-ink sm:text-4xl md:text-[2.75rem] md:leading-none">
                        {project.name}
                      </h3>
                      <span className="text-xs text-faint">
                        {project.domain}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{project.tagline}</p>

                    <div className="grid grid-rows-[1fr] transition-all duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="max-w-xl pt-4 text-sm leading-relaxed text-muted text-pretty">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-line bg-paper-soft/70 px-3 py-1 text-[0.72rem] text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 md:w-32 md:flex-col md:items-end md:justify-center md:gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-faint">
                      {project.year}
                    </span>
                    <span
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-lg text-ink transition-all duration-500 group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-paper"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

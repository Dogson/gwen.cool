import { motion } from "motion/react";
import gwenael from "../assets/gwenael.webp";
import { intro, profile } from "../data/content";
import { SocialLinks } from "./SocialLinks";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 md:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -left-40 h-[34rem] w-[34rem] rounded-full bg-sage/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-24 h-[28rem] w-[28rem] rounded-full bg-clay/10 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-7">
          <motion.div
            variants={item}
            className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-faint"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
            <span className="whitespace-nowrap">
              {profile.role}
              <span className="hidden sm:inline"> · {profile.subtitle}</span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.9] text-ink"
          >
            <span className="block">Gwenaël</span>
            <span className="block italic text-forest">Girod</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted text-pretty"
          >
            {intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-faint">
                Basé à
              </p>
              <p className="mt-1 text-sm text-ink">{profile.location}</p>
            </div>
            <span className="hidden h-8 w-px bg-line sm:block" />
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-faint">
                Expérience
              </p>
              <p className="mt-1 text-sm text-ink">{profile.experience}</p>
            </div>
            <span className="hidden h-8 w-px bg-line sm:block" />
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-faint">
                Statut
              </p>
              <p className="mt-1 text-sm text-ink">Freelance</p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors duration-300 hover:bg-forest"
            >
              Écrire un message
              <span aria-hidden>↗</span>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4"
          >
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-faint">
              Retrouvez-moi
            </span>
            <SocialLinks variant="hero" />
          </motion.div>
        </div>

        <motion.div variants={item} className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 rotate-2 rounded-[2rem] border border-line"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgba(27,26,23,0.45)]">
              <img
                src={gwenael}
                alt="Portrait de Gwenaël Girod en forêt"
                className="h-full w-full object-cover"
                width={1400}
                height={1507}
                loading="eager"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-line bg-paper-soft/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:-left-8">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-faint">
                Ingénieur fullstack
              </p>
              <p className="font-display text-base text-ink">
                React · Node · IA
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

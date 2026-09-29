import type { ComponentType } from "react";
import { profile } from "../data/content";
import { Reveal } from "./ui/Reveal";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MaltIcon,
  type IconProps,
} from "./ui/icons";

const links: {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<IconProps>;
}[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ggirod",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/dogson",
    href: profile.github,
    Icon: GithubIcon,
  },
  {
    label: "Malt",
    value: "malt.fr/profile/gwenaelgirod",
    href: profile.malt,
    Icon: MaltIcon,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 overflow-hidden bg-forest text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-sage/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-paper/70">
              Contact
            </p>
            <h2 className="mt-6 text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
              On travaille ensemble&nbsp;?
            </h2>
            <p className="mt-6 max-w-md text-paper/70 text-pretty">
              Ouvert aux missions freelance et aux collaborations, sur du code
              existant à reprendre comme sur des projets à concevoir de zéro.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-3 text-sm text-forest transition-colors duration-300 hover:bg-sand"
            >
              <MailIcon className="h-4 w-4 shrink-0" />
              {profile.email}
              <span aria-hidden>↗</span>
            </a>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5 lg:justify-self-end">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-paper/70">
              Ailleurs
            </p>
            <ul className="mt-6 space-y-1">
              {links.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                    className="group flex items-center justify-between gap-6 border-b border-paper/15 py-3.5 transition-colors duration-300 hover:border-paper/40"
                  >
                    <span className="flex items-center gap-3 text-paper/70 transition-colors group-hover:text-paper">
                      <Icon className="h-4 w-4 shrink-0" />
                      {label}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-paper/90">
                      {value}
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-xs text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Gwenaël Girod</p>
          <p>Conçu avec React, Vite &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
}

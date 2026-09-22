import type { CSSProperties } from "react";
import { socials } from "../data/content";
import { socialIcons } from "./ui/icons";

type Variant = "hero" | "nav" | "menu";

const sizes: Record<Variant, { link: string; icon: string }> = {
  hero: { link: "h-11 w-11", icon: "h-[1.15rem] w-[1.15rem]" },
  nav: { link: "h-9 w-9", icon: "h-[1.05rem] w-[1.05rem]" },
  menu: { link: "h-12 w-12", icon: "h-5 w-5" },
};

type SocialLinksProps = {
  variant?: Variant;
  className?: string;
};

export function SocialLinks({ variant = "hero", className }: SocialLinksProps) {
  const size = sizes[variant];

  return (
    <ul className={["flex items-center gap-2.5", className].filter(Boolean).join(" ")}>
      {socials.map((social) => {
        const Icon = socialIcons[social.id];
        return (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
              style={{ "--brand": social.brand } as CSSProperties}
              className={[
                "group flex items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:[border-color:var(--brand)] hover:[color:var(--brand)]",
                size.link,
              ].join(" ")}
            >
              <Icon className={size.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, profile } from "../data/content";
import { SocialLinks } from "./SocialLinks";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerBg = open
    ? "border-b border-line bg-paper"
    : scrolled
      ? "border-b border-line/80 bg-paper/80 backdrop-blur-md"
      : "border-b border-transparent";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        headerBg,
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest font-display text-[0.7rem] text-paper">
            GG
          </span>
          <span className="font-display text-[0.95rem] tracking-tight">
            Gwenaël Girod
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-forest transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <SocialLinks variant="nav" />
          <span className="h-6 w-px bg-line" />
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-forest px-4 py-2 text-sm text-paper transition-colors duration-300 hover:bg-forest-deep"
          >
            Me contacter
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={[
              "h-px w-5 bg-ink transition-transform duration-300",
              open ? "translate-y-[3.5px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-px w-5 bg-ink transition-transform duration-300",
              open ? "-translate-y-[3.5px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-paper md:hidden"
          >
            <nav className="flex flex-col gap-2 px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="border-b border-line py-4 font-display text-3xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-6 inline-flex w-fit rounded-full bg-forest px-5 py-3 text-paper"
              >
                Me contacter
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.4 }}
                className="mt-10"
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-faint">
                  Retrouvez-moi
                </p>
                <SocialLinks variant="menu" className="mt-4" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { motion } from "motion/react";
import { skillGroups } from "../data/content";
import { staggerChild, staggerParent } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Tag } from "./ui/Tag";

const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Skills() {
  return (
    <section id="competences" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          kicker="Compétences"
          title="Les techniques et les outils."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.title}
              variants={staggerChild}
              className={[
                "group flex flex-col rounded-soft border border-line bg-paper-soft/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-forest/30 hover:bg-paper-soft hover:shadow-[0_24px_50px_-32px_rgba(27,26,23,0.4)]",
                spans[i] ?? "",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-sm text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-paper"
                >
                  {group.icon}
                </span>
                <h3 className="font-display text-lg text-ink">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

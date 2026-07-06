import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { TESTIMONIALS } from "@/constants/siteData";
import { getIcon } from "@/constants/iconMap";

const ChevronLeftIcon = getIcon("chevronLeft");
const ChevronRightIcon = getIcon("chevronRight");
const StarIcon = getIcon("star");

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const perView = typeof window !== "undefined" && window.innerWidth >= 900 ? 3 : 1;
  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What students say"
          subtitle="Sample content shown below — will be replaced with real student reviews."
        />

        <Reveal className="relative mt-14 max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${index * (100 / perView)}%` }}
              transition={{ duration: 0.6, ease: [0.2, 0.9, 0.25, 1] }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="shrink-0 w-full sm:w-1/3 px-0 sm:px-3">
                  <div className="card p-8 h-full">
                    <div className="flex gap-1 text-[var(--orange)] mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <StarIcon key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-[14.5px] text-[var(--ink-soft)] leading-relaxed">"{t.quote}"</p>
                    <p className="font-display font-semibold text-[14px] mt-5">{t.name}</p>
                    <p className="text-[12px] text-[var(--ink-soft)]">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center hover:bg-[var(--bg-soft)] transition"
            >
              <ChevronLeftIcon size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center hover:bg-[var(--bg-soft)] transition"
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;

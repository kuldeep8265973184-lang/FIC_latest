import { useEffect, useState } from "react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { getIcon } from "@/constants/iconMap";
import { fetchCourses } from "@/services/api/courses.service";
import { COURSES_FALLBACK } from "@/constants/siteData";
import type { Course } from "@/types";

const ArrowRightIcon = getIcon("arrowRight");

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>(COURSES_FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchCourses().then((data) => {
      if (mounted) {
        setCourses(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="courses" className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Popular Courses"
          title="Courses built for every learner"
          subtitle="From foundational computer literacy to professional programming and design software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {(loading ? Array.from({ length: 6 }) : courses).map((course, i) => {
            if (loading) {
              return <div key={i} className="card p-7 h-56 ph rounded-[var(--radius-md)]" />;
            }
            const c = course as Course;
            const Icon = getIcon(c.icon);
            return (
              <Reveal key={c.title} delay={(i % 6) * 0.06}>
                <div className="card p-7 h-full">
                  <div className="flex items-start justify-between">
                    <div className="icon-wrap">
                      <Icon size={24} />
                    </div>
                    {c.badge && <span className="badge-new">{c.badge}</span>}
                  </div>
                  <h3 className="font-display font-semibold text-lg mt-5">{c.title}</h3>
                  <p className="text-[13.5px] text-[var(--ink-soft)] mt-2 leading-relaxed">{c.description}</p>
                  <a
                    href="#admission"
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--royal)] mt-5 hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ArrowRightIcon size={14} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;

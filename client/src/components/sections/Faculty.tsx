import { useEffect, useState } from "react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { fetchFaculty } from "@/services/api/faculty.service";
import { resolveImageUrl } from "@/services/api/axiosInstance";
import type { FacultyMember } from "@/types";

import directorFallback from "@/assets/images/director.jpg";
import facultyFallback from "@/assets/images/faculty.jpg";

const FALLBACK: FacultyMember[] = [
  {
    name: "Mr. Dinesh Kumar",
    designation: "Founder & Director",
    qualification: "M.Sc. (Chemistry)",
    bio: "Leads Future IT College with a focus on discipline, experience and genuine student development, guiding the institute's growth since 2016.",
    image: directorFallback,
  },
  {
    name: "Shivani Singh",
    designation: "Faculty",
    qualification: "BCA / B.Sc. (Computer Science)",
    bio: "A passionate instructor focused on practical computer education and building strong programming fundamentals.",
    image: facultyFallback,
  },
];

const Faculty = () => {
  const [faculty, setFaculty] = useState<FacultyMember[]>(FALLBACK);

  useEffect(() => {
    let mounted = true;
    fetchFaculty()
      .then((data) => {
        if (mounted && data.length) setFaculty(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="faculty" className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Meet The Team" title="Guided by people who care" />

        <div className="grid sm:grid-cols-2 gap-8 mt-14 max-w-3xl mx-auto">
          {faculty.map((member, i) => {
            const imgSrc = member.image?.startsWith("/uploads")
              ? resolveImageUrl(member.image)
              : member.image;
            return (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="card overflow-hidden rounded-[var(--radius-lg)]">
                  <div className="aspect-[4/5]">
                    <img
                      src={imgSrc}
                      alt={`${member.name}, ${member.designation}, Future IT College`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: i === 1 ? "50% 15%" : "50% 50%" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg">{member.name}</h3>
                    <p className="text-[var(--royal)] text-[13.5px] font-medium mt-0.5">{member.designation}</p>
                    <p className="text-[12.5px] text-[var(--ink-soft)] mt-1">{member.qualification}</p>
                    {member.bio && (
                      <p className="text-[13.5px] text-[var(--ink-soft)] mt-3 leading-relaxed">{member.bio}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faculty;

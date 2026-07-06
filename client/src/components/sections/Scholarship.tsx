import Reveal from "@/components/common/Reveal";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const Scholarship = () => (
  <section className="py-16 lg:py-20">
    <div className="container-x">
      <Reveal>
        <div
          className="card p-10 lg:p-14 rounded-[var(--radius-lg)] grid lg:grid-cols-[1fr_auto] gap-8 items-center"
          style={{ background: "linear-gradient(120deg,#fff 55%,var(--bg-soft) 100%)" }}
        >
          <div>
            <SectionEyebrow>Merit Scholarship Program</SectionEyebrow>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mt-4">Rewarding academic excellence</h2>
            <p className="text-[var(--ink-soft)] mt-4 leading-relaxed max-w-xl">
              Students with excellent performance in Class 10 or Class 12 may receive special fee concessions
              according to institute policies. Contact us directly to learn about eligibility for your specific
              situation.
            </p>
          </div>
          <a href="#contact" className="btn btn-navy shrink-0">
            Contact Institute
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Scholarship;

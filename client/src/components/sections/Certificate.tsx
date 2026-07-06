import Reveal from "@/components/common/Reveal";
import SectionEyebrow from "@/components/common/SectionEyebrow";
import certificate from "@/assets/images/certificate.jpg";

const Certificate = () => (
  <section className="py-16 lg:py-20 bg-[var(--bg-soft)]">
    <div className="container-x">
      <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <SectionEyebrow>Certification</SectionEyebrow>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mt-3">
              Government Certified Course Completion Certificates
            </h2>
            <p className="text-[var(--ink-soft)] mt-4 leading-relaxed max-w-2xl">
              Eligible students receive recognized course completion certificates after successfully completing
              their programs — a credential that reflects real, verified learning.
            </p>
          </div>
          <div className="w-40 rounded-[var(--radius-md)] overflow-hidden shadow-[var(--shadow-card)] shrink-0 mx-auto border border-[var(--line)]">
            <img
              src={certificate}
              alt="Sample Future IT College course completion certificate"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Certificate;

import Reveal from "@/components/common/Reveal";
import SectionEyebrow from "@/components/common/SectionEyebrow";
import { getIcon } from "@/constants/iconMap";

const CheckIcon = getIcon("checkCircle");
const DraftingIcon = getIcon("drafting");
const CubeIcon = getIcon("cube");

const HIGHLIGHTS = ["Industry-Level Projects", "Job Assistance", "Professional Guidance", "Modern Labs"];

const IndustryCourses = () => (
  <section className="py-16 lg:py-24 grad-navy relative overflow-hidden">
    <div className="absolute w-96 h-96 bg-[var(--orange)]/20 blur-[110px] rounded-full -top-20 -right-20" />
    <div className="container-x relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <SectionEyebrow variant="orange">New in 2026</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl lg:text-[40px] text-white mt-5 leading-tight">
            Professional Industry Training
          </h2>
          <p className="text-[#C6CEEF] mt-5 leading-relaxed">
            Designed for students who want to build careers in engineering design, manufacturing, CAD and
            industrial software — taught with the same practical, hands-on approach as every course at Future IT
            College.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-3 text-white">
                <CheckIcon size={18} color="var(--orange-soft)" />
                <span className="text-[14.5px] font-medium">{item}</span>
              </div>
            ))}
          </div>
          <a href="#admission" className="btn btn-primary mt-9">
            Enquire About Industry Courses
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          <Reveal delay={0.1}>
            <div className="glass rounded-[var(--radius-lg)] p-8 !bg-white/8 !border-white/15">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--orange)] to-[var(--orange-soft)] flex items-center justify-center mb-6">
                <DraftingIcon size={26} color="#fff" />
              </div>
              <span className="badge-new mb-3 inline-block">New in 2026</span>
              <h3 className="font-display font-semibold text-xl text-white">AutoCAD</h3>
              <p className="text-[13.5px] text-[#B9C1E8] mt-2 leading-relaxed">
                Professional 2D/3D drafting and design software used across engineering fields.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass rounded-[var(--radius-lg)] p-8 !bg-white/8 !border-white/15 sm:mt-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--royal)] to-[#5A7BFF] flex items-center justify-center mb-6">
                <CubeIcon size={26} color="#fff" />
              </div>
              <span className="badge-new mb-3 inline-block">New in 2026</span>
              <h3 className="font-display font-semibold text-xl text-white">Siemens NX</h3>
              <p className="text-[13.5px] text-[#B9C1E8] mt-2 leading-relaxed">
                Industry-grade CAD/CAM/CAE software for advanced product design and manufacturing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default IndustryCourses;

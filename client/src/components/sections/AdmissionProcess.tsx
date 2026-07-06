import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { ADMISSION_PROCESS } from "@/constants/siteData";

const AdmissionProcess = () => (
  <div className="mt-16 relative">
    <SectionHeading eyebrow="Admission Process" title="Six simple steps to get started" />
    <div className="mt-16 relative">
      <div className="roadmap-line lg:hidden" />
      <div className="hidden lg:block roadmap-line-h" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-10">
        {ADMISSION_PROCESS.map((item) => (
          <Reveal key={item.step} delay={(item.step % 6) * 0.06}>
            <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:text-center">
              <div className="rm-dot active">{item.step}</div>
              <h3 className="font-display font-semibold text-[14px]">{item.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

export default AdmissionProcess;

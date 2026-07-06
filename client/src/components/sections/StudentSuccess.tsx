import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { STUDENT_SUCCESS } from "@/constants/siteData";
import { getIcon } from "@/constants/iconMap";

const StudentSuccess = () => (
  <section className="py-16 lg:py-20 bg-[var(--bg-soft)]">
    <div className="container-x">
      <SectionHeading eyebrow="Student Success" title="Built on consistency, not claims" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {STUDENT_SUCCESS.map((item, i) => {
          const Icon = getIcon(item.icon);
          return (
            <Reveal key={item.label} delay={(i % 3) * 0.08}>
              <div className="card p-7 flex items-center gap-4">
                <div className="icon-wrap shrink-0">
                  <Icon size={22} />
                </div>
                <p className="font-medium text-[14.5px]">{item.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default StudentSuccess;

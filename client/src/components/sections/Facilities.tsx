import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { FACILITIES } from "@/constants/siteData";
import { getIcon } from "@/constants/iconMap";

const Facilities = () => (
  <section id="facilities" className="py-16 lg:py-24 bg-[var(--bg-soft)]">
    <div className="container-x">
      <SectionHeading eyebrow="Campus & Facilities" title="A campus built for focused learning" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-14">
        {FACILITIES.map((item, i) => {
          const Icon = getIcon(item.icon);
          return (
            <Reveal key={item.title} delay={(i % 5) * 0.06}>
              <div className="card p-6 facility-card h-full">
                <div className="icon-wrap mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-[15px]">{item.title}</h3>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Facilities;

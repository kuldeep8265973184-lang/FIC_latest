import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { WHY_CHOOSE_US } from "@/constants/siteData";
import { getIcon } from "@/constants/iconMap";

const WhyChooseUs = () => (
  <section className="py-16 lg:py-24 bg-[var(--bg-soft)]">
    <div className="container-x">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Everything you need for a strong start"
        subtitle="A learning environment built around students — practical, affordable and genuinely supportive."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {WHY_CHOOSE_US.map((item, i) => {
          const Icon = getIcon(item.icon);
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="card p-7 facility-card h-full">
                <div className="icon-wrap mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                <p className="text-[13.5px] text-[var(--ink-soft)] mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

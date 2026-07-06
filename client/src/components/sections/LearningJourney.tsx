import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { LEARNING_JOURNEY } from "@/constants/siteData";

const LearningJourney = () => {
  const firstRow = LEARNING_JOURNEY.slice(0, 4);
  const secondRow = LEARNING_JOURNEY.slice(4);

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-soft)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Learning Journey"
          title="Your path, step by step"
          subtitle="A clear, guided sequence from your first visit to career support."
        />

        <div className="mt-16 relative">
          <div className="roadmap-line lg:hidden" />
          <div className="hidden lg:block roadmap-line-h" />
          {[firstRow, secondRow].map((row, rowIdx) => (
            <div key={rowIdx} className={`grid lg:grid-cols-4 gap-x-6 gap-y-10 ${rowIdx === 1 ? "mt-10" : ""}`}>
              {row.map((item) => (
                <Reveal key={item.step} delay={(item.step % 4) * 0.08}>
                  <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:text-center">
                    <div className="rm-dot active">{item.step}</div>
                    <div>
                      <h3 className="font-display font-semibold text-[15px]">{item.title}</h3>
                      <p className="text-[13px] text-[var(--ink-soft)] mt-1">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;

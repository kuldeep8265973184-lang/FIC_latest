import Counter from "@/components/common/Counter";
import { HERO_STATS } from "@/constants/siteData";

const HeroStats = () => (
  <section className="relative -mt-1">
    <div className="container-x">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 -translate-y-16 relative z-20">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="card p-6 lg:p-8 text-center rounded-[var(--radius-md)]">
            <p className="text-3xl lg:text-4xl text-[var(--royal)]">
              <Counter target={stat.target} suffix={stat.suffix} />
            </p>
            <p className="text-[13px] text-[var(--ink-soft)] mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroStats;

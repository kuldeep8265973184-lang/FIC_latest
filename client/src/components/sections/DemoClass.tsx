import Reveal from "@/components/common/Reveal";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const DemoClass = () => (
  <section className="py-16 lg:py-20">
    <div className="container-x">
      <Reveal>
        <div
          className="grid lg:grid-cols-2 gap-10 items-center card p-10 lg:p-14 rounded-[var(--radius-lg)] overflow-hidden"
          style={{ background: "linear-gradient(120deg,var(--navy-soft),var(--navy))" }}
        >
          <div>
            <SectionEyebrow variant="dark">Try Before You Commit</SectionEyebrow>
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mt-4">
              Experience Before You Decide
            </h2>
            <p className="text-[#C6CEEF] mt-4 leading-relaxed">
              Students are welcome to attend demo classes for approximately 5–7 days before taking admission —
              helping them understand the teaching style, classroom environment and learning experience
              firsthand.
            </p>
            <a href="#admission" className="btn btn-primary mt-7">
              Book a Demo
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 max-w-xs">
              <div className="glass !bg-white/8 !border-white/15 rounded-2xl p-5 text-center float-el">
                <p className="text-2xl text-white font-num font-extrabold">5–7</p>
                <p className="text-[11.5px] text-[#B9C1E8] mt-1">Demo Days</p>
              </div>
              <div className="glass !bg-white/8 !border-white/15 rounded-2xl p-5 text-center float-el delay1 mt-6">
                <p className="text-2xl text-white font-num font-extrabold">0</p>
                <p className="text-[11.5px] text-[#B9C1E8] mt-1">Obligation</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default DemoClass;

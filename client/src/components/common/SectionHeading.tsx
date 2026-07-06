import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "default" | "dark" | "orange";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "default",
  className = "",
}: SectionHeadingProps) => (
  <Reveal className={`${align === "center" ? "max-w-2xl mx-auto text-center" : ""} ${className}`}>
    <SectionEyebrow variant={variant}>{eyebrow}</SectionEyebrow>
    <h2
      className={`font-display font-bold text-3xl lg:text-[40px] mt-5 leading-tight ${
        variant === "dark" ? "text-white" : ""
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 ${variant === "dark" ? "text-[#C6CEEF]" : "text-[var(--ink-soft)]"}`}>
        {subtitle}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;

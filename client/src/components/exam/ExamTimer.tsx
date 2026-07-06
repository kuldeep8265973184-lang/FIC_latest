import { getIcon } from "@/constants/iconMap";

const ClockIcon = getIcon("clock");

const ExamTimer = ({ formatted, isLow }: { formatted: string; isLow: boolean }) => (
  <div
    className={`flex items-center gap-2 px-4 py-2 rounded-full font-num font-bold text-lg ${
      isLow ? "bg-red-50 text-red-600 animate-pulse" : "bg-[var(--royal)]/10 text-[var(--royal)]"
    }`}
  >
    <ClockIcon size={18} />
    {formatted}
  </div>
);

export default ExamTimer;

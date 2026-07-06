import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/constants/siteData";
import { getIcon } from "@/constants/iconMap";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const WhatsappIcon = getIcon("whatsapp");
const PhoneIcon = getIcon("phone");
const ChevronUpIcon = getIcon("chevronUp");

const FloatingButtons = () => {
  const showScrollTop = useScrollPosition(600);

  return (
    <div className="fixed bottom-24 lg:bottom-8 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/91${SITE.phones[0]}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-[52px] h-[52px] rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <WhatsappIcon size={24} color="#fff" />
      </a>
      <a
        href={`tel:+91${SITE.phones[0]}`}
        aria-label="Call Future IT College"
        className="w-[52px] h-[52px] rounded-full bg-[var(--royal)] shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <PhoneIcon size={22} color="#fff" />
      </a>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-[52px] h-[52px] rounded-full bg-white shadow-lg border border-[var(--line)] flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronUpIcon size={20} color="var(--navy)" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;

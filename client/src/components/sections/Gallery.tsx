import { useEffect, useState } from "react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import Lightbox from "@/components/common/Lightbox";
import { fetchGallery } from "@/services/api/gallery.service";
import { resolveImageUrl } from "@/services/api/axiosInstance";
import type { GalleryItem } from "@/types";

import lab from "@/assets/images/lab.jpg";
import classroom from "@/assets/images/classroom.jpg";
import practical from "@/assets/images/practical.jpg";
import building from "@/assets/images/building.jpg";
import office from "@/assets/images/office.jpg";

const FALLBACK: GalleryItem[] = [
  { title: "Computer Lab", category: "Computer Lab", image: lab },
  { title: "Smart Classroom", category: "Smart Classroom", image: classroom },
  { title: "Practical Sessions", category: "Practical Sessions", image: practical },
  { title: "Institute Building", category: "Institute Building", image: building },
  { title: "Students Learning", category: "Students Learning", image: office },
];

const Gallery = () => {
  const [items, setItems] = useState<GalleryItem[]>(FALLBACK);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  useEffect(() => {
    let mounted = true;
    fetchGallery()
      .then((data) => {
        if (mounted && data.length) setItems(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[var(--bg-soft)]">
      <div className="container-x">
        <SectionHeading eyebrow="Gallery" title="A glimpse inside the campus" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((item, i) => {
            const imgSrc = item.image?.startsWith("/uploads") ? resolveImageUrl(item.image) : item.image;
            return (
              <Reveal key={`${item.category}-${i}`} delay={(i % 6) * 0.06}>
                <div
                  className="gal-item aspect-square"
                  onClick={() => openLightbox(imgSrc, `${item.category} at Future IT College`)}
                >
                  <img src={imgSrc} alt={`${item.category} at Future IT College`} loading="lazy" />
                  <div className="gal-overlay">
                    <span className="text-white text-[12.5px] font-medium">{item.category}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.3}>
            <div className="gal-item aspect-square ph">
              <img
                src="https://placehold.co/500x500/EEF1FB/2547E0?text=Events+Photo+Coming+Soon"
                alt="Institute events — photo coming soon"
                loading="lazy"
              />
              <div className="gal-overlay">
                <span className="text-white text-[12.5px] font-medium">Events</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={() => setLightboxSrc(null)} />
    </section>
  );
};

export default Gallery;

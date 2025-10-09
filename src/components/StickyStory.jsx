import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import HeadlineFace from "./HeadlineFace";
import img1 from "../assets/Apu.jpeg";
import img2 from "../assets/durga.jpeg";
import img3 from "../assets/writer.jpeg";

const slides = [
  {
    id: 0,
    image: img1,
    title: "Apu",
    body: "Curious and dream-filled, he represents innocence and growth.",
  },
  {
    id: 1,
    image: img2,
    title: "Durga",
    body: "Spirited, mischievous, and deeply connected to Apu.",
  },
  {
    id: 2,
    image: img3,
    title: "Chapter Three",
    body: "An old writer keeps the memory of the town in ink and paper.",
  },
];

export default function StickyStory() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, slides.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActive(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#FEFFFC] mt-5 border-b-2 border-[#DDE3DD]">
      <HeadlineFace />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left: sticky image (50%) */}
          <div className="hidden lg:block lg:w-1/2 pr-8">
            <div className="sticky top-12 h-[80vh] flex items-center">
              <div className="relative w-100 h-80 rounded-lg overflow-hidden mask-y-from-95% mask-x-from-95% opacity-70">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slides[active].id}
                    src={slides[active].image}
                    alt={slides[active].title}
                    className="absolute inset-0 w-full h-full object-cover "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right: scrolling text (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              {slides.map((s, idx) => (
                <article
                  key={s.id}
                  data-index={idx}
                  ref={(el) => (sectionRefs.current[idx] = el)}
                  className="min-h-screen flex flex-col justify-center py-12 lg:py-36"
                >
                  {/* Mobile: show image above text (stacked) */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="block lg:hidden w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                      {s.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                      {s.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

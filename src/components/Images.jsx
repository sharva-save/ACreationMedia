// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";

// // Import images directly from your assets
// import {
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
//   img7,
//   img8,
//   img10,
//   img11,
//   img9,
// } from "../assets";

// const Images = () => {
//   const sliderRef = useRef(null);

//   // Array of your project images
//   const images = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img10,
//     img11,
//     img9,
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     arrows: true,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <div className="flex justify-around">
//       <h2 className={styles.sectionHeadText}>My Works</h2>
//       </div>
//       <Slider ref={sliderRef} {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="px-2">
//             <img
//               src={image}
//               alt={`Project ${index + 1}`}
//               className="w-full h-auto rounded-lg shadow-lg object-contain"
//               style={{ height: "500px" }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// // export default Images;


// export default SectionWrapper(Images, "image");

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import {
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11,
} from "../assets";

// ─── Data ──────────────────────────────────────────────────────────────────────
// Add a tag per image — customise these to match your actual work
const images = [
  { src: img1,  tag: "Branding" },
  { src: img2,  tag: "Social Media" },
  { src: img3,  tag: "Print Design" },
  { src: img4,  tag: "Identity" },
  { src: img5,  tag: "Motion" },
  { src: img6,  tag: "Photography" },
  { src: img7,  tag: "Branding" },
  { src: img8,  tag: "Digital" },
  { src: img9,  tag: "Social Media" },
  { src: img10, tag: "Print Design" },
  { src: img11, tag: "Identity" },
];

const AUTOPLAY_DELAY = 3500; // ms — was 1000 (way too fast)

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 px-6
                 bg-[#050816]/97 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-6 w-10 h-10 rounded-full bg-white/[0.08] border border-white/15
                   flex items-center justify-center text-white hover:bg-[#E78B48]/20 hover:border-[#E78B48]
                   transition-all duration-200 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Image */}
      <motion.img
        key={index}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={images[index].src}
        alt={`Work ${index + 1}`}
        className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Nav */}
      <div
        className="flex items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onPrev} className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white text-lg hover:bg-[#E78B48]/20 hover:border-[#E78B48] transition-all duration-200">
          ‹
        </button>
        <span className="text-white/40 text-sm tracking-widest">
          {index + 1} <span className="text-white/20">/</span> {images.length}
        </span>
        <button onClick={onNext} className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white text-lg hover:bg-[#E78B48]/20 hover:border-[#E78B48] transition-all duration-200">
          ›
        </button>
      </div>
    </motion.div>
  );
};

// ─── Works Section ────────────────────────────────────────────────────────────
const Works = () => {
  const [current, setCurrent]       = useState(0);
  const [lightbox, setLightbox]     = useState(false);
  const [isHovered, setIsHovered]   = useState(false);
  const timerRef                    = useRef(null);
  const thumbsRef                   = useRef(null);

  const goTo = useCallback((i) => {
    setCurrent(i);
    // Keep active thumb scrolled into view
    const thumbEl = thumbsRef.current?.children[i];
    thumbEl?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  const prev = useCallback(() => goTo((current - 1 + images.length) % images.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % images.length),                 [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timerRef.current);
  }, [isHovered, next]);

  const progress = ((current + 1) / images.length) * 100;

  return (
    <>
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[0.78rem] font-medium tracking-[0.18em] uppercase text-[#E78B48] flex items-center gap-2 mb-3">
          <span className="inline-block w-7 h-px bg-gradient-to-r from-[#E78B48] to-transparent" />
          Portfolio
        </p>
        <h2 className={styles.sectionHeadText}>
          Our <span className="text-[#E78B48]">Works</span>
        </h2>
        <p className="mt-2 text-white/40 text-[0.9rem] font-light">
          A glimpse into what we've created for our clients.
        </p>
      </motion.div>

      {/* ── Main Slider ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-10 relative"
      >
        {/* Main image */}
        <div
          className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden
                     bg-[#0d0f20] border border-white/[0.07] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current].src}
              alt={`Work ${current + 1}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

          {/* Bottom info row */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
            <span className="text-white/40 text-xs tracking-widest uppercase">
              {current + 1} / {images.length}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E78B48]/15 border border-[#E78B48]/30 text-[#E78B48]">
              {images[current].tag}
            </span>
          </div>

          {/* Expand button */}
          <button
            onClick={() => setLightbox(true)}
            className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#050816]/70 backdrop-blur-md
                       border border-white/12 flex items-center justify-center text-white/60
                       hover:bg-[#E78B48]/20 hover:border-[#E78B48]/50 hover:text-[#E78B48]
                       transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="View full size"
            title="View full size"
          >
            ⤢
          </button>
        </div>

        {/* Prev / Next arrows */}
        {[{ label: "‹", fn: prev, side: "-left-4 sm:-left-5" }, { label: "›", fn: next, side: "-right-4 sm:-right-5" }].map(({ label, fn, side }) => (
          <button
            key={label}
            onClick={fn}
            className={`absolute top-1/2 -translate-y-1/2 ${side} z-10
                        w-10 h-10 rounded-full bg-[#050816]/80 backdrop-blur-md
                        border border-white/12 flex items-center justify-center
                        text-white text-xl
                        hover:bg-[#E78B48]/25 hover:border-[#E78B48]
                        hover:shadow-[0_0_18px_rgba(231,139,72,0.3)]
                        transition-all duration-250`}
            aria-label={label === "‹" ? "Previous" : "Next"}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {/* ── Progress bar ── */}
      <div className="mt-4 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#E78B48] to-[#fff005]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* ── Thumbnails ── */}
      <div
        ref={thumbsRef}
        className="mt-4 flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`flex-shrink-0 w-[80px] h-[54px] sm:w-[96px] sm:h-[64px] rounded-lg overflow-hidden
                        border-2 transition-all duration-200
                        ${i === current
                          ? "border-[#E78B48] shadow-[0_0_12px_rgba(231,139,72,0.4)] opacity-100"
                          : "border-transparent opacity-50 hover:opacity-75 hover:border-[#E78B48]/40"
                        }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={images}
            index={current}
            onClose={() => setLightbox(false)}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "works");
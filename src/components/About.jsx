
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// ─── Service Card ──────────────────────────────────────────────────────────────
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full sm:w-[240px]"
    options={{ max: 18, scale: 1.02, speed: 400 }}
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="relative group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 flex flex-col items-center gap-5 overflow-hidden cursor-default
                 hover:border-[#E78B48]/30 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]
                 transition-all duration-300"
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E78B48]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Card number */}
      <span className="absolute top-3.5 right-4 text-[0.68rem] font-bold tracking-wider text-[#E78B48]/35 font-mono">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="w-[68px] h-[68px] rounded-[14px] bg-[#E78B48]/10 border border-[#E78B48]/20 flex items-center justify-center
                      group-hover:bg-[#E78B48]/18 group-hover:shadow-[0_0_24px_rgba(231,139,72,0.25)] transition-all duration-300">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-white text-[1rem] font-bold text-center leading-tight relative z-[1]">
        {title}
      </h3>

      {/* Animated underline */}
      <div className="h-[2px] w-7 rounded-full bg-gradient-to-r from-[#E78B48] to-[#fff005] group-hover:w-12 transition-all duration-300" />
    </motion.div>
  </Tilt>
);

// ─── About Section ─────────────────────────────────────────────────────────────
const About = () => {
  const stats = [
    { number: "50+", label: "Projects" },
    { number: "3+",  label: "Years Active" },
    { number: "100%", label: "Client Focus" },
  ];

  return (
    <>
      {/* ── Section heading ── */}
      <motion.div variants={textVariant()}>
        <p className="text-[0.78rem] font-medium tracking-[0.18em] uppercase text-[#E78B48] flex items-center gap-2 mb-3">
          <span className="inline-block w-7 h-px bg-gradient-to-r from-[#E78B48] to-transparent" />
          Who We Are
        </p>
        <h2 className={styles.sectionHeadText}>
          Creative{" "}
          <span className="text-[#E78B48]">Overview</span>
        </h2>
      </motion.div>

      {/* ── Two-column intro ── */}
      <div className="mt-10 flex flex-col lg:flex-row gap-12 items-center">

        {/* Text */}
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.8)}
          className="flex-1"
        >
          <p className="text-white/60 text-[1rem] leading-[1.85] font-light mb-5 p-1">
            We are a{" "}
            <span className="text-[#E78B48] font-medium">full-service graphic design studio</span>{" "}
            and media agency dedicated to helping brands tell their stories with impact and clarity.
          </p>
          <p className="text-white/60 text-[1.2rem] leading-[1.85] font-light p-1">
            Blending creativity with strategy, we specialise in{" "}
            <span className="text-[#E78B48] font-medium">visual identity, branding, digital content creation</span>,
            marketing campaigns, and media consulting for businesses ready to elevate their presence.
          </p>

          <p className="text-white/60 text-[1.2rem] leading-[1.85] font-light p-1">
           Beyond design, the studio is fully optimised with <span className="text-[#E78B48] font-medium">AI-powered tools and specialises in mobile editing, scripting, and vlogging — </span>, bridging creative storytelling with modern digital workflows.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-8 flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[#E78B48] pl-4">
                <p className="text-white font-black text-2xl leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {s.number}
                </p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Decorative visual */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.8)}
          className="hidden lg:flex items-center justify-center"
        >
          <div
            className="w-[230px] h-[230px] rounded-full border border-[#E78B48]/20 flex items-center justify-center relative"
            style={{ animation: "spin 18s linear infinite" }}
          >
            {/* Orbit dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#E78B48] shadow-[0_0_12px_#E78B48]" />
            {/* Outer dashed ring */}
            <div className="absolute -inset-5 rounded-full border border-dashed border-[#E78B48]/10" />
            {/* Inner circle */}
            <div
              className="w-[155px] h-[155px] rounded-full bg-gradient-to-br from-[#E78B48]/15 to-purple-700/10 border border-[#E78B48]/25 flex items-center justify-center"
              style={{ animation: "spin 18s linear infinite reverse" }}
            >
              <span
                className="text-4xl font-black"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: "linear-gradient(135deg, #E78B48, #fff005)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AC
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 my-14">
        <div className="flex-1 h-px bg-gradient-to-r from-[#E78B48]/30 to-transparent" />
        <span className="text-[0.7rem] text-white/30 tracking-[0.2em] uppercase whitespace-nowrap">
          What We Do
        </span>
        <div className="flex-1 h-px bg-gradient-to-l from-[#E78B48]/30 to-transparent" />
      </div>

      {/* ── Service Cards ── */}
      <div className="flex flex-wrap gap-5 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
};

export default SectionWrapper(About, "about");
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import creativeMedia from "../assets/creative-media.png";

// const Hero = () => {
//   const [bubbles, setBubbles] = useState([]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // Random bubble properties for realism
//     const size = Math.random() * 20 + 10; // 10-30px
//     const lifetime = Math.random() * 1000 + 500; // 500-1500ms
//     const driftX = (Math.random() - 0.5) * 40; // Horizontal drift (-20 to 20px)
//     const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6 opacity

//     const newBubble = {
//       id: Date.now() + Math.random(), // Ensure unique IDs
//       x,
//       y,
//       size,
//       opacity,
//       driftX,
//       lifetime,
//     };

//     setBubbles((prev) => [...prev, newBubble]);

//     // Remove bubble after its lifetime
//     setTimeout(() => {
//       setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
//     }, lifetime);
//   };

//   return (
//     <section
//       className="relative w-full mx-auto overflow-hidden h-[70vh] lg:h-screen
// "
//       onMouseMove={handleMouseMove}
//     >
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-3 rounded-full bg-[#E78B48]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className="font-black  text-[#ffffff] text-center lg:text-[45px]  text-[20px] lg:leading-[98px]  mt-[-20px]">
//             {/* Welcome To{" "} */}
//             <br></br>
//             <span className="text-[#fff005] sm:text-center text-[30px] lg:text-7xl">
//               {" "}
//               A.Creative Media
//             </span>
//           </h1>
//           <p
//             className={`${styles.heroSubText} text-center lg:text-right lg:pr-[100px] lg:mt-[-10px] text-white`}
//           >
//             Think Creative Be Creative
            
//           </p>
//           <div className="hidden md:block text-center ml-[-40px]">
//   <img
//     src={creativeMedia}
//     alt="Creative Media"
//     className="mx-auto w-[70%] pt-[40px]"
//   />
// </div>

//          <div className="block md:hidden text-center ml-[-40px]">
//   <img
//     src={creativeMedia}
//     alt="Creative Media"
//     className="mx-auto pt-[30px]"
//   />
// </div>

         
//         </div>
//       </div>

//       {/* Enhanced Bubble Effect */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
//         {bubbles.map((bubble) => {
//           // Generate random pastel colors
//           const hue = Math.floor(Math.random() * 360);
//           const color = `hsla(${hue}, 80%, 70%, ${bubble.opacity})`;
//           const glowColor = `hsla(${hue}, 100%, 80%, ${bubble.opacity * 1})`;

//           return (
//             <motion.div
//               key={bubble.id}
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//                 x: bubble.x,
//                 y: bubble.y,
//                 filter: "blur(0px)",
//               }}
//               animate={{
//                 opacity: [bubble.opacity, 0],
//                 scale: [0, 1, 0.8], // Slightly shrink at end
//                 y: bubble.y - 100 - Math.random() * 50,
//                 x: bubble.x + bubble.driftX,
//                 filter: ["blur(0px)", "blur(2px)", "blur(4px)"],
//               }}
//               transition={{
//                 duration: bubble.lifetime / 1000,
//                 ease: [0.2, 0.8, 0.4, 1],
//                 opacity: {
//                   duration: (bubble.lifetime / 1000) * 0.7,
//                   ease: "circOut",
//                 },
//               }}
//               style={{
//                 position: "absolute",
//                 width: bubble.size,
//                 height: bubble.size,
//                 borderRadius: "50%",
//                 background: color,
//                 boxShadow: `
//           0 0 10px ${glowColor},
//           inset 0 0 15px rgba(0, 0, 0, 0.1)
//         `,
//                 transform: "translate(-50%, -50%)",
//                 mixBlendMode: "screen", // Creates nice color blending
//               }}
//             >
//               {/* Inner bubble highlight */}
//               <div
//                 style={{
//                   position: "absolute",
//                   width: "40%",
//                   height: "40%",
//                   borderRadius: "50%",
//                   background: "rgba(255, 255, 255, 0.4)",
//                   top: "15%",
//                   left: "15%",
//                   transform: "rotate(45deg)",
//                 }}
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { styles } from "../styles";

// ─── Animation variants ───────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
});

const Hero = () => {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const rafRef = useRef(null);

  // ─── Canvas bubble system (performant — no React state churn) ────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubblesRef.current = bubblesRef.current.filter((b) => b.life > 0);
      for (const b of bubblesRef.current) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * b.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${b.hue}, 90%, 65%, ${b.life * 0.45})`;
        ctx.fill();
        b.x += b.dx;
        b.y += b.dy;
        b.life -= b.decay;
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    for (let i = 0; i < 2; i++) {
      bubblesRef.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        r: Math.random() * 14 + 5,
        dx: (Math.random() - 0.5) * 1.2,
        dy: -(Math.random() * 2 + 1),
        life: 1,
        decay: Math.random() * 0.015 + 0.008,
        hue: Math.random() * 60 + 20, // warm orange-yellow range
      });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Canvas bubbles ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* ── Ambient gradient orbs ── */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E78B48]/10 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full bg-purple-700/10 blur-[90px] animate-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-[#fff005]/5 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(231,139,72,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(231,139,72,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* ── Floating stat cards ── */}
      <motion.div
        variants={fadeUp(0.8)}
        initial="hidden"
        animate="show"
        className="absolute left-[3%] top-[35%] hidden lg:block"
      >
        <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-xl px-5 py-3 animate-[float_5s_ease-in-out_infinite]">
          <p className="text-white font-black text-2xl leading-tight">50+</p>
          <p className="text-white/40 text-xs tracking-wider mt-1">Projects Done</p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp(0.9)}
        initial="hidden"
        animate="show"
        className="absolute right-[3%] top-[42%] hidden lg:block"
      >
        <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-xl px-5 py-3 animate-[float_5s_ease-in-out_infinite_2.5s]">
          <p className="text-white font-black text-2xl leading-tight">5★</p>
          <p className="text-white/40 text-xs tracking-wider mt-1">Client Rating</p>
        </div>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-[2] flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E78B48]/30 bg-[#E78B48]/08 text-[#E78B48] text-xs font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E78B48] animate-pulse shadow-[0_0_8px_#E78B48]" />
            Creative Media Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          className="font-black text-white leading-[0.92] tracking-tight mb-6"
          style={{ fontSize: "clamp(3.2rem, 9vw, 7rem)", fontFamily: "'Syne', sans-serif" }}
        >
          A.Creative
          <br />
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #E78B48 0%, #fff005 60%, #E78B48 100%)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}
          >
            Media
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="show"
          className="text-white/50 text-sm sm:text-base font-light tracking-[0.25em] uppercase italic mb-12"
        >
          Think Creative · Be Creative
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#work"
            className="
              px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold text-white
              bg-gradient-to-r from-[#E78B48] to-[#d4720c]
              shadow-[0_0_30px_rgba(231,139,72,0.35)]
              hover:shadow-[0_8px_40px_rgba(231,139,72,0.6)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            See Our Work →
          </a>
          <a
            href="#contact"
            className="
              px-8 py-3.5 rounded-lg text-[0.95rem] font-medium text-white
              border border-white/20
              hover:border-white/50 hover:bg-white/5
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        variants={fadeUp(0.7)}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <div className="w-[22px] h-[34px] border border-white/20 rounded-xl flex justify-center pt-1.5">
          <div
            className="w-[3px] h-[6px] bg-[#E78B48] rounded-full"
            style={{ animation: "scrollWheel 1.8s ease-in-out infinite" }}
          />
        </div>
        <span className="text-[0.65rem] tracking-widest uppercase">Scroll</span>
      </motion.div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@900&display=swap');

        @keyframes shimmer {
          0%   { background-position: 0% }
          100% { background-position: 200% }
        }
        @keyframes scrollWheel {
          0%   { transform: translateY(0);    opacity: 1 }
          100% { transform: translateY(10px); opacity: 0 }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50%       { transform: translateY(-10px) }
        }
      `}</style>
    </section>
  );
};

export default Hero;
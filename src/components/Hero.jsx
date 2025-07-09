import { motion } from "framer-motion";
import React, { useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import creativeMedia from "../assets/creative-media.png";

const Hero = () => {
  const [bubbles, setBubbles] = useState([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Random bubble properties for realism
    const size = Math.random() * 20 + 10; // 10-30px
    const lifetime = Math.random() * 1000 + 500; // 500-1500ms
    const driftX = (Math.random() - 0.5) * 40; // Horizontal drift (-20 to 20px)
    const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6 opacity

    const newBubble = {
      id: Date.now() + Math.random(), // Ensure unique IDs
      x,
      y,
      size,
      opacity,
      driftX,
      lifetime,
    };

    setBubbles((prev) => [...prev, newBubble]);

    // Remove bubble after its lifetime
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, lifetime);
  };

  return (
    <section
      className="relative w-full mx-auto overflow-hidden h-[50vh] lg:h-screen
"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-3 rounded-full bg-[#E78B48]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-[-20px] text-white`}>
            Welcome To{" "}
            <span className="text-[#fff005] sm:text-center sm:text-[31px] lg:text-7xl">
              {" "}
              A.Creative Media
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} text-center lg:text-right lg:pr-[100px] lg:mt-[-10px] text-white`}
          >
            Think Creative Be Creative
          </p>
          <div className="text-center ml-[-40px]">
            <motion.img
              className="text-center"
              src={creativeMedia}
              alt="Creative Media"
              initial={{ opacity: 0, y: 10, scale: 0.5 }} // Explicit normal scale
              animate={{ opacity: 1, y: 0, scale: 0.5 }} // Explicit normal scale
              transition={{ duration: 0.3, ease: "easeIn" }}
              whileHover={{
                y: -10,
                scale: 0.7, // Hover scale
                transition: {
                  duration: 0.3,
                  ease: "easeIn",
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Bubble Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {bubbles.map((bubble) => {
          // Generate random pastel colors
          const hue = Math.floor(Math.random() * 360);
          const color = `hsla(${hue}, 80%, 70%, ${bubble.opacity})`;
          const glowColor = `hsla(${hue}, 100%, 80%, ${bubble.opacity * 1})`;

          return (
            <motion.div
              key={bubble.id}
              initial={{
                opacity: 0,
                scale: 0,
                x: bubble.x,
                y: bubble.y,
                filter: "blur(0px)",
              }}
              animate={{
                opacity: [bubble.opacity, 0],
                scale: [0, 1, 0.8], // Slightly shrink at end
                y: bubble.y - 100 - Math.random() * 50,
                x: bubble.x + bubble.driftX,
                filter: ["blur(0px)", "blur(2px)", "blur(4px)"],
              }}
              transition={{
                duration: bubble.lifetime / 1000,
                ease: [0.2, 0.8, 0.4, 1],
                opacity: {
                  duration: (bubble.lifetime / 1000) * 0.7,
                  ease: "circOut",
                },
              }}
              style={{
                position: "absolute",
                width: bubble.size,
                height: bubble.size,
                borderRadius: "50%",
                background: color,
                boxShadow: `
          0 0 10px ${glowColor},
          inset 0 0 15px rgba(0, 0, 0, 0.1)
        `,
                transform: "translate(-50%, -50%)",
                mixBlendMode: "screen", // Creates nice color blending
              }}
            >
              {/* Inner bubble highlight */}
              <div
                style={{
                  position: "absolute",
                  width: "40%",
                  height: "40%",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.4)",
                  top: "15%",
                  left: "15%",
                  transform: "rotate(45deg)",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

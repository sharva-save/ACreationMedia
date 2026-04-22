// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary opacity-80" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
//           <p className="text-white text-[18px] font-bold cursor-pointer flex ">
//             Saurabh &nbsp; Sawant
//             {/* <span className='sm:block hidden'>Sawant &nbsp; &nbsp;</span> */}
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Scroll: glass effect ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Auto-active section via IntersectionObserver ---
  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = navLinks.find((n) => n.id === entry.target.id);
            if (matched) setActive(matched.title);
          }
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // --- Mobile menu: close on outside click ---
  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setToggle(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav
        className={`
          ${styles.paddingX}
          w-full fixed top-0 z-20 transition-all duration-400
          ${
            scrolled
              ? "bg-[#050816]/70 backdrop-blur-xl border-b border-[#E78B48]/10 shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
              : "bg-transparent"
          }
        `}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto h-[70px]">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          >
            {/* Animated accent dot */}
            <span className="w-2 h-2 rounded-full bg-[#E78B48] shadow-[0_0_10px_#E78B48] animate-pulse" />
            <p className="text-white text-[18px] font-black tracking-tight leading-none">
              Saurabh&nbsp;
              <span className="text-[#E78B48]">Sawant</span>
            </p>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
            {navLinks.map((nav) => (
              <li key={nav.id} className="relative group">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`
                    text-[15px] font-medium transition-colors duration-200
                    ${active === nav.title ? "text-white" : "text-[#aaa8c0] hover:text-white"}
                  `}
                >
                  {nav.title}
                </a>
                {/* Animated underline */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px] rounded-full
                    bg-gradient-to-r from-[#E78B48] to-[#fff005]
                    transition-all duration-300
                    ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </li>
            ))}

            {/* CTA Button */}
            <li>
              <a
                href="#contact"
                onClick={() => setActive("Contact")}
                className="
                  ml-2 px-5 py-2 rounded-lg text-[14px] font-semibold text-white
                  bg-gradient-to-r from-[#E78B48] to-[#d4720c]
                  shadow-[0_0_20px_rgba(231,139,72,0.3)]
                  hover:shadow-[0_4px_24px_rgba(231,139,72,0.55)]
                  hover:-translate-y-[2px]
                  transition-all duration-300
                "
              >
                Let's Talk →
              </a>
            </li>
          </ul>

          {/* ── Mobile Hamburger ── */}
          <div className="sm:hidden flex items-center" ref={menuRef}>
            <button
              className="flex flex-col gap-[5px] p-1 cursor-pointer"
              onClick={() => setToggle((p) => !p)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center
                  ${toggle ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded transition-all duration-300
                  ${toggle ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center
                  ${toggle ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>

            {/* ── Mobile Dropdown ── */}
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="
                    absolute top-[72px] right-4
                    w-[200px] rounded-xl overflow-hidden
                    bg-[#050816]/95 backdrop-blur-xl
                    border border-[#E78B48]/15
                    shadow-[0_8px_40px_rgba(0,0,0,0.6)]
                  "
                >
                  <ul className="flex flex-col">
                    {navLinks.map((nav, index) => (
                      <motion.li
                        key={nav.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                        className={`
                          border-b border-white/[0.05] last:border-none
                          ${active === nav.title ? "bg-[#E78B48]/10" : ""}
                        `}
                      >
                        <a
                          href={`#${nav.id}`}
                          className="
                            flex items-center gap-3 px-5 py-4
                            text-[15px] font-medium text-[#aaa8c0] hover:text-white
                            hover:pl-7 transition-all duration-200
                          "
                          onClick={() => { setToggle(false); setActive(nav.title); }}
                        >
                          <span className="text-[10px] text-[#E78B48] font-bold">
                            0{index + 1}
                          </span>
                          {nav.title}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
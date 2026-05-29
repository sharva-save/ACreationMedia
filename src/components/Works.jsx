import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const portfolioData = [
  {
    id: "wedding",
    label: "digital-wedding-invitations",
    icon: "💍",
    color: "#f5c518",
    glow: "rgba(245,197,24,0.18)",
    accent: "#ff6b00",
    count: 6,
    items: [
      { id: 1,         img: "/images/digital-wedding-invitation/chaitanya-wife.jpg" },
      { id: 3, name: "Druvis & Prashant",      file: "druvis-frd.jpg",        img: '/images/digital-wedding-invitation/mukunda.jpg' },
      { id: 4, name: "Mukunda & Soniya",       file: "mukunda.jpg",           img: '/images/digital-wedding-invitation/shubham-&-sakshi-wedding-card.jpg' },
      { id: 5, name: "Shubham & Sakshi",       file: "shubham-&-sakshi.jpg",  img: '/images/digital-wedding-invitation/wedding-card.png' },
      { id: 6, name: "Pajkta & Chaitanya",     file: "84128-80027-.jpg",      img: '/images/digital-wedding-invitation/chaitanya-wife.jpg' },
    ],
  },
  {
    id: "invitation",
    label: "Digital Invitation Card",
    icon: "✉️",
    color: "#ff6b00",
    glow: "rgba(255,107,0,0.18)",
    accent: "#f5c518",
    count: 8,
    items: [
      { id: 1, name: "Gajendra Boisar",       file: "gajendra-boisar.jpg",         img: "/images/digital-wedding-invitation-card/1.png" },
      { id: 2, name: "Altitude Fitness Gym",  file: "gym-social-media-.jpg",       img: "/images/digital-wedding-invitation-card/2.jpg" },
      { id: 3, name: "Hanuman Jayanti",        file: "hanuman-jayanti.jpg",         img: "/images/digital-wedding-invitation-card/3.jpg" },
      { id: 4, name: "Pranay Kadu",            file: "pranay-kadu.png",             img: "/images/digital-wedding-invitation-card/4.jpg" },
      { id: 5, name: "Wastu Shanti",           file: "wastu-shanti.jpg",            img: "/images/digital-wedding-invitation-card/5.jpg" },
      { id: 6, name: "Wastushanti 2",          file: "wastushanti-98346.jpg",       img: "/images/digital-wedding-invitation-card/6.jpg" },
     
    ],
  },
  {
    id: "logos",
    label: "Logos",
    icon: "◈",
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.18)",
    accent: "#ff6b00",
    count: 3,
    items: [
  { id: 1, name: "Logo Design 1", file: "logo-1.jpg", img: "/images/Logos/1.webp" },
  { id: 2, name: "Logo Design 2", file: "logo-2.jpg", img: "/images/Logos/2.webp" },
  { id: 3, name: "Logo Design 3", file: "logo-3.jpg", img: "/images/Logos/3.webp" },
  { id: 4, name: "Logo Design 4", file: "logo-4.jpg", img: "/images/Logos/4.webp" },
  { id: 5, name: "Logo Design 5", file: "logo-5.jpg", img: "/images/Logos/5.webp" },
  { id: 6, name: "Logo Design 6", file: "logo-6.jpg", img: "/images/Logos/6.webp" },
  { id: 7, name: "Logo Design 7", file: "logo-7.jpg", img: "/images/Logos/7.webp" },
  { id: 8, name: "Logo Design 8", file: "logo-8.jpg", img: "/images/Logos/8.webp" },
  { id: 9, name: "Logo Design 9", file: "logo-9.jpg", img: "/images/Logos/9.webp" },
  { id: 10, name: "Logo Design 10", file: "logo-10.jpg", img: "/images/Logos/10.webp" },
]
  },
  {
    id: "print",
    label: "Print Media",
    icon: "🖨",
    color: "#ff3cac",
    glow: "rgba(255,60,172,0.18)",
    accent: "#f5c518",
    count: 2,
    items: [
  { id: 1, name: "Print Design 1", file: "print-1.jpg", img: "/images/Print-media/1.webp" },
  { id: 2, name: "Print Design 2", file: "print-2.jpg", img: "/images/Print-media/2.webp" },
  { id: 3, name: "Print Design 3", file: "print-3.jpg", img: "/images/Print-media/3.webp" },
  { id: 4, name: "Print Design 4", file: "print-4.jpg", img: "/images/Print-media/4.webp" },
  { id: 5, name: "Print Design 5", file: "print-5.jpg", img: "/images/Print-media/5.webp" },
],
  },
  {
    id: "product",
    label: "Product Design",
    icon: "📦",
    color: "#f5c518",
    glow: "rgba(245,197,24,0.18)",
    accent: "#00d4ff",
    count: 2,
    items: [
      { id: 1, name: "Product Design 1",  img: "/images/product-design/1.webp" },
      { id: 2, name: "Product Design 1",  img: "/images/product-design/2.webp" },
      { id: 3, name: "Product Design 1",  img: "/images/product-design/3.webp" },
    ],
  },
  {
    id: "social",
    label: "Social Media Posts",
    icon: "📲",
    color: "#ff6b00",
    glow: "rgba(255,107,0,0.18)",
    accent: "#ff3cac",
    count: 3,
    items: [
  { id: 1, name: "Social Post 1", file: "social-1.jpg", img: "/images/social-media-post/1.webp" },
  { id: 2, name: "Social Post 2", file: "social-2.jpg", img: "/images/social-media-post/2.webp" },
  { id: 3, name: "Social Post 3", file: "social-3.jpg", img: "/images/social-media-post/3.webp" },
  { id: 4, name: "Social Post 4", file: "social-4.jpg", img: "/images/social-media-post/4.webp" },
  { id: 5, name: "Social Post 5", file: "social-5.jpg", img: "/images/social-media-post/5.webp" },
  { id: 6, name: "Social Post 6", file: "social-6.jpg", img: "/images/social-media-post/6.webp" },
  { id: 7, name: "Social Post 7", file: "social-7.jpg", img: "/images/social-media-post/7.webp" },
  { id: 8, name: "Social Post 8", file: "social-8.jpg", img: "/images/social-media-post/8.webp" },
  { id: 9, name: "Social Post 9", file: "social-9.jpg", img: "/images/social-media-post/9.webp" },
  { id: 10, name: "Social Post 10", file: "social-10.jpg", img: "/images/social-media-post/10.webp" },
  { id: 11, name: "Social Post 11", file: "social-11.jpg", img: "/images/social-media-post/11.webp" },
  { id: 12, name: "Social Post 12", file: "social-12.jpg", img: "/images/social-media-post/12.webp" },
  { id: 13, name: "Social Post 13", file: "social-13.jpg", img: "/images/social-media-post/13.webp" },
  { id: 14, name: "Social Post 14", file: "social-14.jpg", img: "/images/social-media-post/14.webp" },
  { id: 15, name: "Social Post 15", file: "social-15.jpg", img: "/images/social-media-post/15.webp" },
  { id: 16, name: "Social Post 16", file: "social-16.jpg", img: "/images/social-media-post/16.webp" },
  { id: 17, name: "Social Post 17", file: "social-17.jpg", img: "/images/social-media-post/17.webp" },
  { id: 18, name: "Social Post 18", file: "social-18.jpg", img: "/images/social-media-post/18.webp" },
  { id: 19, name: "Social Post 19", file: "social-19.jpg", img: "/images/social-media-post/19.webp" },
  { id: 20, name: "Social Post 20", file: "social-20.jpg", img: "/images/social-media-post/20.webp" },
],
  },
 {
  id: "videos",
  label: "Videos",
  icon: "🎬",
  color: "#ff3cac",
  glow: "rgba(255,60,172,0.18)",
  accent: "#f5c518",
  count: 3,
  driveLink: "https://drive.google.com/drive/folders/17PfW-EqbCsk5poDAjxiURUJff2pyoDeu?usp=drive_link",
  items: [],
},
];

// ─── Dot texture (matches site's scattered red dots motif) ───────────────────
const DotTexture = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
    style={{ zIndex: 0 }}
  >
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        style={{
          position: "absolute",
          width: i % 5 === 0 ? 5 : 3,
          height: i % 5 === 0 ? 5 : 3,
          borderRadius: "50%",
          background: i % 3 === 0 ? "#ff3c3c" : i % 3 === 1 ? "#ff6b00" : "#f5c518",
          opacity: 0.18 + (i % 4) * 0.05,
          top: `${(i * 47 + 11) % 98}%`,
          left: `${(i * 73 + 7) % 96}%`,
        }}
      />
    ))}
  </div>
);

// ─── Placeholder thumbnail ────────────────────────────────────────────────────
const Placeholder = ({ color, icon, isVideo }) => (
  <div
    className="w-full aspect-[4/3] flex flex-col items-center justify-center gap-2 select-none"
    style={{
      background: `radial-gradient(ellipse at 60% 40%, ${color}22 0%, #080b1e 75%)`,
    }}
  >
    <span style={{ fontSize: 34 }}>{icon}</span>
    <span
      className="text-[9px] tracking-[4px] uppercase font-bold"
      style={{ color: color, opacity: 0.5 }}
    >
      {isVideo ? "VIDEO" : "IMAGE"}
    </span>
  </div>
);

// ─── Media card ───────────────────────────────────────────────────────────────
const MediaCard = ({ item, folderColor, folderIcon }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.25 }}
    whileHover={{ y: -5 }}
    className="rounded-xl overflow-hidden cursor-pointer group"
    style={{
      background: "linear-gradient(145deg, #10143a 0%, #0a0d26 100%)",
      border: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      transition: "border-color 0.2s, box-shadow 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = folderColor + "55";
      e.currentTarget.style.boxShadow = `0 8px 32px ${folderColor}22`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
    }}
  >
    <div className="relative overflow-hidden">
      {item.isVideo ? (
  <video
    className="w-full aspect-[4/3] object-cover block transition-transform duration-700 group-hover:scale-105"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src={item.videoUrl} type="video/mp4" />
  </video>
) : item.img ? (
  <img
    src={item.img}
    alt={item.name}
    className="w-full aspect-[4/3] object-contain block transition-transform duration-500 group-hover:scale-105"
    loading="lazy"
  />
) : (
  <Placeholder
    color={folderColor}
    icon={folderIcon}
    isVideo={item.isVideo}
  />
)}
      {/* Neon top-edge accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${folderColor}, transparent)`,
        }}
      />
     {item.isVideo && (
  <div
    className="absolute top-3 right-3 px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md"
    style={{
      background: "rgba(8,11,30,0.55)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
    }}
  >
    <span
      style={{
        fontSize: 10,
        color: "#ff6b00",
      }}
    >
      ▶
    </span>

    <span
      className="text-[10px] tracking-[0.18em] font-medium"
      style={{
        color: "rgba(255,255,255,0.75)",
      }}
    >
      VIDEO
    </span>
  </div>
)}
    </div>
    
  </motion.div>
);

// ─── Folder card ──────────────────────────────────────────────────────────────
const FolderCard = ({ folder, onClick, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    whileHover={{ y: -6 }}
    onClick={onClick}
    className="rounded-xl p-5 cursor-pointer group relative overflow-hidden"
    style={{
      background: "linear-gradient(145deg, #10143a 0%, #0a0d26 100%)",
      border: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = folder.color + "66";
      e.currentTarget.style.boxShadow = `0 12px 40px ${folder.color}25`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
    }}
  >
    {/* Ambient glow blob */}
    <div
      className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: folder.glow }}
    />

    {/* Icon badge */}
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 relative"
      style={{
        background: `linear-gradient(135deg, ${folder.glow}, transparent)`,
        border: `1px solid ${folder.color}33`,
      }}
    >
      {folder.icon}
    </div>

    <p
      className="text-[13px] font-black tracking-wide leading-snug mb-1"
      style={{ color: "rgba(255,255,255,0.88)" }}
    >
      {folder.label}
    </p>
    <p className="text-[11px] tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
      {folder.count} files
    </p>

    {/* CTA row */}
    <div className="flex items-center gap-2">
      <span
        className="text-[11px] font-black tracking-[2px] uppercase"
        style={{ color: folder.color }}
      >
        Open
      </span>
      <motion.span
        className="text-[13px] font-bold"
        style={{ color: folder.color }}
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
      >
        →
      </motion.span>
    </div>

    {/* Bottom border accent on hover */}
    <div
      className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
      style={{ background: `linear-gradient(90deg, ${folder.color}, ${folder.accent})` }}
    />
  </motion.div>
);

// ─── Main Works Component ─────────────────────────────────────────────────────
const Works = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const folder = portfolioData.find((f) => f.id === activeFolder);

  return (
    <section
      className="relative w-full min-h-screen py-20 px-4 sm:px-8 overflow-hidden"
      id="works"
      style={{
        background: "linear-gradient(180deg, #060920 0%, #080b1e 50%, #060920 100%)",
      }}
    >
      {/* Ambient neon glow orbs — clipped to prevent horizontal scroll */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: "#00d4ff" }}
        />
        <div
          className="absolute top-10 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-15"
          style={{ background: "#ff3cac" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 blur-[80px] opacity-10"
          style={{ background: "#f5c518" }}
        />
      </div>

      {/* Dot texture */}
      <DotTexture />

      <div className="relative z-10">
        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span
              className="h-[2px] w-8 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #ff6b00)" }}
            />
            <p
              className="text-[11px] font-black tracking-[5px] uppercase"
              style={{ color: "#ff6b00" }}
            >
              My Work
            </p>
            <span
              className="h-[2px] w-8 rounded-full"
              style={{ background: "linear-gradient(90deg, #ff6b00, transparent)" }}
            />
          </div>

          {/* Main title — bold yellow like site's hero name */}
          <h2
            className="text-5xl sm:text-6xl font-black leading-none tracking-tight"
            style={{
              color: "#f5c518",
              textShadow: "0 0 60px rgba(245,197,24,0.25)",
            }}
          >
            Portfolio
          </h2>
          <p
            className="text-[11px] tracking-[5px] uppercase mt-4 font-medium"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Click a folder to explore
          </p>
        </motion.div>

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-2 mb-6 text-[12px] tracking-wide">
          <button
            onClick={() => setActiveFolder(null)}
            className="transition-colors duration-200"
            style={{
              color: !activeFolder ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)",
              cursor: !activeFolder ? "default" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (activeFolder) e.target.style.color = "#ff6b00";
            }}
            onMouseLeave={(e) => {
              if (activeFolder) e.target.style.color = "rgba(255,255,255,0.35)";
            }}
          >
            All Work
          </button>
          {activeFolder && (
            <>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ color: folder?.color }}>{folder?.label}</span>
            </>
          )}
        </div>

        {/* ── Back button ── */}
        <AnimatePresence>
          {activeFolder && (
            <motion.button
              key="back"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              onClick={() => setActiveFolder(null)}
              className="mb-6 flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ff6b00";
                e.currentTarget.style.borderColor = "rgba(255,107,0,0.35)";
                e.currentTarget.style.background = "rgba(255,107,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              ← Back to folders
            </motion.button>
          )}
        </AnimatePresence>

        {/* ── Folder grid / Image grid ── */}
        <AnimatePresence mode="wait">
          {!activeFolder ? (
            <motion.div
              key="folders"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {portfolioData.map((f, i) => (
                <FolderCard
                  key={f.id}
                  folder={f}
                  index={i}
                  onClick={() => setActiveFolder(f.id)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeFolder}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Sub-heading bar */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${folder?.color}, ${folder?.accent})` }}
                />
                <p
                  className="text-[11px] font-black tracking-[3px] uppercase"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {folder?.label} · {folder?.items.length} items
                </p>
              </div>

              {activeFolder === "videos" ? (
                <div className="flex flex-col items-center justify-center py-24 gap-6">
                  <span style={{ fontSize: 64 }}>🎬</span>
                  <p
                    className="text-[12px] tracking-[4px] uppercase font-medium"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    All videos are hosted on Google Drive
                  </p>
                  <a href="https://drive.google.com/drive/folders/17PfW-EqbCsk5poDAjxiURUJff2pyoDeu?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-4 rounded-xl font-black tracking-[2px] uppercase text-[13px] transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #ff3cac 0%, #f5c518 100%)",
                      color: "#000",
                      boxShadow: "0 0 40px rgba(255,60,172,0.4), 0 8px 32px rgba(0,0,0,0.4)",
                    }}
                  >
                    ▶&nbsp; Click Here to Watch Videos
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <AnimatePresence>
                    {folder?.items.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <MediaCard
                          item={item}
                          folderColor={folder.color}
                          folderIcon={folder.icon}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;
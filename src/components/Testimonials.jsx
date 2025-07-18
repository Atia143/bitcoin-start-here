// src/components/Testimonials.jsx

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "חשבתי שביטקוין זה תרמית... עד שהבנתי שזה אני שלא הבין.",
    name: "אנונימי",
    age: 31,
    address: "0xA1B...4F9",
    color: "from-cyan-400/80 to-cyan-600/80 border-cyan-400/60",
  },
  {
    quote: "לא האמנתי שאני אתעניין בכסף. עכשיו אני מבין כמה זה נגע בי כל החיים.",
    name: "עומר",
    age: 27,
    address: "0xE4A...91C",
    color: "from-emerald-400/80 to-emerald-600/80 border-emerald-400/60",
  },
  {
    quote: "לא שיניתי את החיים שלי — פשוט התחלתי להבין איך הם עובדים.",
    name: "טל",
    age: 34,
    address: "0x9C7...D2A",
    color: "from-amber-300/80 to-amber-500/80 border-amber-300/60",
  },
];

function Avatar({ name, color }) {
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-2 ${color} bg-gradient-to-br`}
    >
      {name[0]}
    </div>
  );
}

function BlueCheck() {
  return (
    <span className="absolute -top-2 -left-2 flex items-center justify-center w-6 h-6 rounded-full bg-sky-500 border-2 border-white shadow-lg group-hover:scale-110 transition-transform">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 10.5L8.5 14L15 7"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Testimonials({ onCtaClick }) {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-0 flex flex-col items-center overflow-hidden bg-transparent" dir="rtl">
      {/* רקע דינמי */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-gradient-radial from-cyan-400/10 via-emerald-400/10 to-transparent blur-2xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[30vw] h-[20vw] bg-gradient-radial from-amber-300/10 via-cyan-400/10 to-transparent blur-2xl opacity-40" />
        <div className="w-full h-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_40px)] opacity-10" />
      </div>
      {/* כותרת */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-3xl md:text-5xl font-extrabold text-center mb-12 text-white tracking-tight"
      >
        אנשים מספרים
      </motion.h2>
      {/* כרטיסי המלצה */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.address}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.12, duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px 0 #00C2FF33",
              rotate: idx === 1 ? 1 : idx === 2 ? -1 : 0,
            }}
            className={`group flex flex-col items-center text-center p-8 rounded-2xl border-2 ${t.color} shadow-xl bg-[#181A20]/80 backdrop-blur-md transition-all duration-300 hover:scale-105`}
            style={{
              boxShadow: "0 0 16px 2px rgba(0,194,255,0.10), 0 2px 24px 0 rgba(0,0,0,0.14)",
            }}
          >
            <div className="mb-4 relative flex items-center justify-center">
              <Avatar name={t.name} color={t.color} />
              <BlueCheck />
            </div>
            <blockquote className="text-lg md:text-xl text-white font-semibold leading-relaxed mb-4 relative">
              <span className="text-4xl text-cyan-400/30 absolute right-0 -top-6 select-none">“</span>
              {t.quote}
              <span className="text-4xl text-cyan-400/30 absolute left-0 -bottom-6 select-none">”</span>
            </blockquote>
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-base text-white/90 font-bold">{t.name}{t.age && `, ${t.age}`}</span>
              <span className="text-xs text-cyan-200 bg-cyan-900/40 rounded-full px-3 py-1 mt-1 tracking-widest font-mono">
                {t.address}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* CTA יוקרתי במרכז הסקשן */}
   <div className="w-full flex justify-center mt-16">
  <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-amber-300 to-emerald-400 shadow-lg inline-block">
    <motion.button
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 16px 2px #00C2FF33, 0 2px 8px 0 #FFB30022",
        background: "#181A20",
        color: "#fff",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onCtaClick}
      className="
        px-10 py-4
        bg-black
        text-white font-bold rounded-full
        shadow-xl transition-all duration-300 text-xl tracking-wide
        focus:outline-none focus:ring-2 focus:ring-white/40
        w-full
        max-w-xs
      "
      style={{
        minWidth: 220,
        borderRadius: "999px",
      }}
    >
      אני רוצה להתחיל
    </motion.button>
  </div>
</div>

      {/* סטריפס דינמי */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.01)_0_2px,transparent_2px_40px)] opacity-10" />
      </div>
    </section>
  );
}

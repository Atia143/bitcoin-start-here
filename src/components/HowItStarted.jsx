// src/components/HowItStarted.jsx

import React from "react";
import { motion } from "framer-motion";

/**
 * "איך הכול התחיל" – סקשן יוקרתי, מינימליסטי, עם שלבים מונפשים, micro-interactions, עומק וטיפוגרפיה חדה.
 */
const steps = [
  {
    label: "בפעם הראשונה",
    text: ' זה הרגיש כמו עוד טרנד חולף, לא משהו שיחזיק באמת.',
    icon: (
      <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-[#23262F] text-white font-bold text-base shadow-sm">
        1
      </span>
    ),
  },
  {
    label: "בפעם השנייה",
    text: 'זה סקרן אותי, ביטקוין היה ב15,000$. אבל לא הבנתי על מה כל ההייפ, הרגשתי בחוץ.',
    icon: (
      <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-[#23262F] text-white font-bold text-base shadow-sm">
        2
      </span>
    ),
  },
  {
    label: "בפעם השלישית",
    text: 'זה כבר לא עזב אותי. הייתי חייב להבין במה מדובר לפני שיהיה מאוחר מדי. ואז הבנתי שאנחנו רק בהתחלה.',
    icon: (
      <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-[#23262F] text-white font-bold text-base shadow-sm">
        3
      </span>
    ),
  },
];

export default function HowItStarted({ onCtaClick }) {
  return (
    <section
      className="relative w-full py-20 md:py-32 px-4 md:px-0 flex flex-col items-center overflow-hidden bg-transparent"
      dir="rtl"
    >
      {/* רקע עומק עדין */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-gradient-radial from-white/10 via-[#23262F]/60 to-transparent blur-2xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[30vw] h-[20vw] bg-gradient-radial from-[#23262F]/40 via-transparent to-transparent blur-2xl opacity-40" />
        <div className="w-full h-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_40px)] opacity-10" />
      </div>
      {/* כותרת יוקרתית */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-3xl md:text-5xl font-extrabold text-center mb-12 text-white tracking-tight"
      >
        איך הכל התחיל?
      </motion.h2>
      {/* שלבי סיפור – Grid רספונסיבי, מינימליסטי */}
      <div className="relative z-10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, idx) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.12, duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 4px 32px 0 #fff1",
            }}
            className="group flex flex-col items-center text-center p-8 rounded-2xl bg-[#23262F]/85 border border-white/10 shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: "0 0 12px 2px rgba(255,255,255,0.06), 0 2px 16px 0 rgba(0,0,0,0.12)",
            }}
          >
            <div className="mb-4">{step.icon}</div>
            <div className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">{step.label}</div>
            <div className="text-base md:text-lg text-neutral-300 font-light">{step.text}</div>
          </motion.div>
        ))}
      </div>
      {/* פסקה מסכמת – מינימליסטית, יוקרתית */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-lg md:text-2xl text-neutral-300 text-center max-w-2xl font-light"
      >
        <span className="text-white font-semibold"> אז בניתי הסבר</span>
        <span> שמתחיל מהשאלות הכי בסיסיות — ומוביל להבנה אמיתית.</span>
        <br />
        <span className="text-white font-semibold">בלי גיקים. בלי רעש. בלי שיווק.</span>
      </motion.p>
      {/* כפתור יוקרתי לטופס */}
      <div className="w-full flex justify-center mt-8">
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
              w-full max-w-xs
            "
            style={{
              minWidth: 220,
              borderRadius: "999px",
            }}
          >
אני רוצה לראות          </motion.button>
        </div>
      </div>
      {/* סטריפס דינמי – עומק עדין */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.01)_0_2px,transparent_2px_40px)] opacity-100" />
      </div>
      {/* גל SVG בתחתית */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-neutral-950" />
        </svg>
      </div>
    </section>
  );
}

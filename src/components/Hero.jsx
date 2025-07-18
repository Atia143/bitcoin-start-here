// src/components/Hero.jsx

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * Hero section – God Mode: טיפוגרפיה יוקרתית, ריווחים חכמים, התאמה למובייל, גל SVG בתחתית.
 */
export default function Hero({ onCtaClick, showProgress = false, progress = 0, toastMessage = "" }) {
  const ctaRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start({ scale: [1, 1.08, 1], boxShadow: ["0 0 0 0 #00C2FF55", "0 0 32px 8px #00C2FF99", "0 0 0 0 #00C2FF55"] });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const badges = [
    {
      icon: (
        <svg className="w-4 h-4 text-cyan-400 drop-shadow-neon-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: "100+ ממליצים",
      color: "from-cyan-500/80 to-cyan-300/60 border-cyan-400/70 shadow-cyan-400/40",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-emerald-400 drop-shadow-neon-emerald" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2" />
        </svg>
      ),
      text: "ידע אמיתי, לא קלישאות",
      color: "from-emerald-400/80 to-emerald-300/60 border-emerald-400/70 shadow-emerald-400/40",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-amber-300 drop-shadow-neon-amber" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 17H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "הפרטים שלך שמורים",
      color: "from-amber-300/80 to-amber-100/60 border-amber-300/70 shadow-amber-300/40",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative min-h-[80vh] md:min-h-screen w-full px-2 xs:px-4 md:px-12 pt-16 md:pt-24 pb-0 flex items-center justify-center bg-[#181A20] overflow-hidden"
      dir="rtl"
    >
      {/* Progress bar דינמי בראש הסקשן */}
      {showProgress && (
        <div className="fixed top-0 right-0 left-0 z-50 h-1 bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-200">
          <div
            className="h-1 bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-300 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Toast הודעה קופצת */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed top-8 right-1/2 translate-x-1/2 z-50 bg-[#23262F]/90 px-6 py-3 rounded-xl shadow-lg border-2 border-cyan-400/40 text-cyan-100 font-bold text-lg"
        >
          {toastMessage}
        </motion.div>
      )}

      {/* רקע ניאון דינמי – שכבת glow/blur */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-gradient-radial from-cyan-400/20 via-emerald-400/10 to-transparent blur-3xl opacity-80 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[30vw] bg-gradient-radial from-amber-300/20 via-cyan-400/10 to-transparent blur-2xl opacity-70 animate-pulse-slow" />
      </div>
      <div className="relative z-10 w-full max-w-2xl md:max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
        {/* כותרת ראשית */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1, ease: "easeOut" }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-center text-[#F5F7FA] mb-5 md:mb-8"
          style={{ lineHeight: 1.18 }}
        >
          <span>הידע ש</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-200 animate-gradient-x drop-shadow-neon-cyan">
            לא מלמדים
          </span>
          <span> על כסף</span>
        </motion.h1>
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-10"
        >
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${badge.color} text-xs md:text-sm font-semibold border-2 shadow-lg backdrop-blur-md border-opacity-60`}
              style={{
                boxShadow: "0 0 12px 2px rgba(0,255,255,0.12), 0 2px 16px 0 rgba(0,0,0,0.18)",
              }}
            >
              {badge.icon}
              {badge.text}
            </span>
          ))}
        </motion.div>
        {/* תת-כותרת */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="text-base xs:text-lg md:text-2xl text-[#B0B3B8] leading-relaxed text-center font-light tracking-wide mb-8 md:mb-12 max-w-xl"
        >
          כאן תבין איך כסף באמת עובד – ומה זה אומר לקחת שליטה על הערך שלך בעולם משתנה.
          <br />
          <span className="text-cyan-300 font-semibold drop-shadow-neon-cyan">המסע הזה מתחיל בשאלה – ומסתיים בתשובה שלך.</span>
        </motion.p>
        {/* קריאה לפעולה */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <motion.button
            ref={ctaRef}
            animate={controls}
            whileHover={{
              scale: 1.07,
              background: "linear-gradient(90deg, #00FFB2 0%, #00C2FF 50%, #FFB300 100%)",
              color: "#181A20",
              boxShadow: "0 0 32px 4px #00C2FF99, 0 2px 24px 0 #FFB30055",
              textShadow: "0 0 8px #00C2FF, 0 0 2px #FFB300",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onCtaClick}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-300 text-[#181A20] font-bold rounded-full shadow-xl transition-all duration-300 text-base xs:text-lg tracking-wide border-2 border-cyan-400/40 drop-shadow-neon-cyan focus:outline-none focus:ring-2 focus:ring-cyan-400"
            style={{
              boxShadow: "0 0 24px 2px #00C2FF55, 0 2px 16px 0 #FFB30033",
            }}
          >
            קבלו הצצה ראשונה
          </motion.button>
        </motion.div>
        {/* אינדיקטור גלילה */}
        <div className="w-full flex justify-center mt-8 md:mt-14 animate-bounce">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-cyan-400/80 drop-shadow-neon-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {/* סטריפס דינמי */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.01)_0_2px,transparent_2px_40px)] opacity-30" />
      </div>
      {/* גל SVG בתחתית – תמיד צמוד לסוף הסקשן */}
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 overflow-hidden pointer-events-none z-20">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-neutral-950" />
        </svg>
      </div>
    </motion.section>
  );
}

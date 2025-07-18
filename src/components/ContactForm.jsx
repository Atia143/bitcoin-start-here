// src/components/LeadModal.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * טופס לידים ייחודי – ניאון, glassmorphism, modal, micro-interactions.
 * @param {boolean} open - האם המודל פתוח
 * @param {function} onClose - פונקציה לסגירת המודל
 */
export default function LeadModal({ open, onClose }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(onClose, 2000); // סגור אוטומטית אחרי 2 שניות
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 40 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-gradient-to-br from-[#23262F]/90 via-[#181A20]/90 to-[#23262F]/90 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-cyan-400/30 backdrop-blur-xl"
          >
            {/* כפתור סגירה */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 text-cyan-400 hover:text-amber-300 transition text-2xl"
              aria-label="סגור"
            >
              ×
            </button>
            {/* אייקון עליון */}
            <div className="flex justify-center mb-4">
              <svg className="w-14 h-14 drop-shadow-neon-cyan" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="36" fill="url(#grad1)" />
                <path d="M25 50 Q40 65 55 50" stroke="#00C2FF" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                <circle cx="32" cy="36" r="4" fill="#00C2FF" />
                <circle cx="48" cy="36" r="4" fill="#00C2FF" />
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C2FF" />
                    <stop offset="0.5" stopColor="#00FFB2" />
                    <stop offset="1" stopColor="#181A20" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-200 drop-shadow-neon-cyan">
              רוצה שנעדכן אותך?
            </h2>
            <p className="text-base md:text-lg text-cyan-200 text-center mb-6">
              השאר את הפרטים וקבל גישה ראשונה לידע שלא מלמדים על כסף.<br />
              <span className="text-cyan-400 font-semibold">ללא התחייבות • הפרטים שלך שמורים</span>
            </p>
            {!sent ? (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="שם מלא"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#181A20]/80 text-cyan-100 border border-cyan-400/40 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="אימייל"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#181A20]/80 text-cyan-100 border border-cyan-400/40 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="מספר טלפון"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#181A20]/80 text-cyan-100 border border-cyan-400/40 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    background: "linear-gradient(90deg, #00FFB2 0%, #00C2FF 50%, #FFB300 100%)",
                    color: "#181A20",
                    boxShadow: "0 0 24px 2px #00C2FF55, 0 2px 16px 0 #FFB30033",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 mt-2 bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-300 text-[#181A20] font-bold rounded-lg shadow-lg transition-all duration-300 text-lg tracking-wide border-2 border-cyan-400/40 drop-shadow-neon-cyan"
                >
                  שלחו לי עדכון 🚀
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-3 text-center mt-6"
              >
                <div className="text-3xl font-bold text-emerald-400 drop-shadow-neon-emerald">✓</div>
                <div className="text-lg text-cyan-100">הפרטים התקבלו!<br />נחזור אליך בקרוב.</div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

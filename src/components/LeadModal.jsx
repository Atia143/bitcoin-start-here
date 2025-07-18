// src/components/LeadModal.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LeadModal – טופס לידים יוקרתי, מינימליסטי, מודרני, עם micro-interactions, floating labels, ועומק.
 */
export default function LeadModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setProgress(30);

  // שלח ל־Sheety
  try {
    const res = await fetch("https://api.sheety.co/8efcf90425ada56016b70a65cfa92c37/btcLeadsNew/sheet1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sheet1: form }), // lead = שם הטבלה ב־Sheety
    });
    setProgress(80);
    if (res.ok) {
      setProgress(100);
      setTimeout(() => {
        setSent(true);
        setProgress(0);
        setTimeout(() => {
          setSent(false);
          onClose();
        }, 1800);
      }, 600);
    } else {
      setProgress(0);
      alert("שגיאה בשליחה. נסה שוב.");
    }
  } catch (err) {
    setProgress(0);
    alert("שגיאה בשליחה. נסה שוב.");
  }
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFilled = (field) => form[field].length > 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* רקע – שכבת עומק עדינה, לא צבעונית מדי */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-gradient-radial from-white/10 via-[#23262F]/60 to-transparent blur-2xl opacity-60" />
            <div className="absolute bottom-0 right-0 w-[30vw] h-[20vw] bg-gradient-radial from-[#23262F]/40 via-transparent to-transparent blur-2xl opacity-40" />
            <div className="w-full h-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_40px)] opacity-10" />
          </div>
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#181A20]/95 rounded-2xl shadow-2xl p-8 md:p-10 border border-white/10 backdrop-blur-xl z-10"
          >
            {/* Progress bar דק ועדין */}
            {progress > 0 && progress < 100 && (
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl overflow-hidden z-20">
                <div
                  className="h-0.5 bg-gradient-to-r from-white via-neutral-400 to-neutral-700 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* כפתור סגירה */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 text-neutral-400 hover:text-white transition text-2xl z-20"
              aria-label="סגור"
            >
              ×
            </button>
            {/* אייקון עליון – דק, מינימליסטי, לא צבעוני */}
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 32 32">
                <rect x="6" y="8" width="20" height="16" rx="4" stroke="currentColor" />
                <path d="M8 10l8 7 8-7" stroke="currentColor" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-white tracking-tight">
              רוצה שנעדכן אותך?
            </h2>
            <p className="text-base md:text-lg text-neutral-300 text-center mb-8 font-light">
              השאירו פרטים.<br />
              <span className="text-neutral-400 font-medium">ללא התחייבות • פיילוט</span>
            </p>
            {!sent ? (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                {/* שדה שם – Floating label + אייקון דק */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg bg-[#23262F]/80 text-white border border-white/10 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white/30 transition font-medium"
                    placeholder="שם מלא"
                    aria-label="שם מלא"
                  />
                  <label
                    className={`
                      absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-all duration-200
                      ${isFilled("name") ? "-top-3.5 text-xs bg-[#181A20]/90 px-1 rounded" : "peer-focus:-top-3.5 peer-focus:text-xs peer-focus:bg-[#181A20]/90 peer-focus:px-1 peer-focus:rounded"}
                    `}
                  >
                    שם מלא
                  </label>
                  {/* אייקון דק ועדין */}
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 peer-focus:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 16-4 16 0" />
                    </svg>
                  </span>
                </div>
                {/* שדה אימייל */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg bg-[#23262F]/80 text-white border border-white/10 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white/30 transition font-medium"
                    placeholder="אימייל"
                    aria-label="אימייל"
                  />
                  <label
                    className={`
                      absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-all duration-200
                      ${isFilled("email") ? "-top-3.5 text-xs bg-[#181A20]/90 px-1 rounded" : "peer-focus:-top-3.5 peer-focus:text-xs peer-focus:bg-[#181A20]/90 peer-focus:px-1 peer-focus:rounded"}
                    `}
                  >
                    אימייל
                  </label>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 peer-focus:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="7" width="18" height="10" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                </div>
                {/* שדה טלפון */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="off"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg bg-[#23262F]/80 text-white border border-white/10 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white/30 transition font-medium"
                    placeholder="מספר טלפון"
                    aria-label="מספר טלפון"
                  />
                  <label
                    className={`
                      absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-all duration-200
                      ${isFilled("phone") ? "-top-3.5 text-xs bg-[#181A20]/90 px-1 rounded" : "peer-focus:-top-3.5 peer-focus:text-xs peer-focus:bg-[#181A20]/90 peer-focus:px-1 peer-focus:rounded"}
                    `}
                  >
                    מספר טלפון
                  </label>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 peer-focus:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="12" height="16" rx="3" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </span>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    background: "linear-gradient(90deg, #fff 0%, #e5e7eb 100%)",
                    color: "#181A20",
                    boxShadow: "0 0 16px 2px #fff2, 0 2px 8px 0 #fff1",
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={progress > 0}
                  className="w-full py-3 mt-2 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 text-[#181A20] font-bold rounded-lg shadow-lg transition-all duration-300 text-lg tracking-wide border border-white/10 disabled:opacity-60"
                >
                  {progress > 0 ? "שולח..." : "שלחו לי עדכון 🚀"}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-3 text-center mt-6"
              >
                <div className="text-4xl font-bold text-white/90">✓</div>
                <div className="text-lg text-neutral-200">הפרטים התקבלו!<br />נחזור אליך בקרוב.</div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

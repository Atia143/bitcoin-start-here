import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const actions = [
  { label: "שלח כסף" },
  { label: "קבל כסף" },
  { label: "בדוק יתרה" },
];

export default function AnotherSystem() {
  const [side, setSide] = useState("old"); // "old" | "new"
  const [action, setAction] = useState(null);

  const oldSystem = {
    "שלח כסף": {
      status: "ממתין לאישור...",
      details: [
        "נדרש אישור בנק",
        "עמלה: 2.5%",
        "הכסף יגיע בעוד 3 ימים",
      ],
      icon: "🏦",
    },
    "קבל כסף": {
      status: "הכסף בדרך...",
      details: [
        "הבנק בודק את ההעברה",
        "עמלה: 1.5%",
        "הכסף יופקד מחר",
      ],
      icon: "🏦",
    },
    "בדוק יתרה": {
      status: "המערכת לא זמינה",
      details: [
        "שעות פעילות: 8:00-16:00",
        "נדרש סיסמה חד-פעמית",
      ],
      icon: "🏦",
    },
  };

  const newSystem = {
    "שלח כסף": {
      status: "הכסף נשלח!",
      details: [
        "הכסף אצלך תוך שניות",
        "עמלה: 0",
        "hash: " + Math.random().toString(16).slice(2, 10) + "...",
      ],
      icon: "🦊",
    },
    "קבל כסף": {
      status: "הכסף התקבל!",
      details: [
        "הכסף אצלך בארנק",
        "עמלה: 0",
        "hash: " + Math.random().toString(16).slice(2, 10) + "...",
      ],
      icon: "🦊",
    },
    "בדוק יתרה": {
      status: "היתרה שלך:",
      details: [
        Math.floor(Math.random() * 10000) + " ₪",
        "נגיש 24/7",
        "שקיפות מלאה",
      ],
      icon: "🦊",
    },
  };

  const system = side === "old" ? oldSystem : newSystem;

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-0 flex flex-col items-center bg-transparent" dir="rtl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl xs:text-3xl md:text-5xl font-extrabold text-center mb-8 text-white tracking-tight"
      >
        איך נראית מערכת אחרת?
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-stretch justify-center">
        {/* צד ישן */}
        <div className={`flex-1 p-6 rounded-2xl bg-[#23262F]/80 border-2 border-cyan-400/10 shadow-lg transition-all duration-300 ${side === "old" ? "ring-4 ring-cyan-400/30" : ""}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">{oldSystem["שלח כסף"].icon}</span>
            <span className="text-lg font-bold text-white">המערכת הישנה</span>
          </div>
          <div className="flex flex-col gap-3">
            {actions.map((a) => (
              <button
                key={a.label}
                onClick={() => { setSide("old"); setAction(a.label); }}
                className={`px-4 py-2 rounded-lg font-bold text-base transition-all duration-200
                  ${side === "old" && action === a.label ? "bg-cyan-400/80 text-[#181A20]" : "bg-[#181A20]/60 text-neutral-300"}
                `}
              >
                {a.label}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {side === "old" && action && (
              <motion.div
                key={action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-4 rounded-xl bg-[#181A20]/80 border border-cyan-400/20"
              >
                <div className="text-lg font-bold text-cyan-400 mb-2">{system[action].status}</div>
                <ul className="text-neutral-300 text-base font-light space-y-1">
                  {system[action].details.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* צד חדש */}
        <div className={`flex-1 p-6 rounded-2xl bg-[#23262F]/80 border-2 border-emerald-400/10 shadow-lg transition-all duration-300 ${side === "new" ? "ring-4 ring-emerald-400/30" : ""}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">{newSystem["שלח כסף"].icon}</span>
            <span className="text-lg font-bold text-white">המערכת החדשה</span>
          </div>
          <div className="flex flex-col gap-3">
            {actions.map((a) => (
              <button
                key={a.label}
                onClick={() => { setSide("new"); setAction(a.label); }}
                className={`px-4 py-2 rounded-lg font-bold text-base transition-all duration-200
                  ${side === "new" && action === a.label ? "bg-emerald-400/80 text-[#181A20]" : "bg-[#181A20]/60 text-neutral-300"}
                `}
              >
                {a.label}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {side === "new" && action && (
              <motion.div
                key={action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-4 rounded-xl bg-[#181A20]/80 border border-emerald-400/20"
              >
                <div className="text-lg font-bold text-emerald-400 mb-2">{system[action].status}</div>
                <ul className="text-neutral-300 text-base font-light space-y-1">
                  {system[action].details.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* טוגל בין עולמות */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setSide(side === "old" ? "new" : "old")}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#181A20] font-bold shadow-lg text-lg tracking-wide transition-all duration-300"
        >
          עבור ל{side === "old" ? "מערכת החדשה" : "מערכת הישנה"}
        </button>
      </div>
      <div className="mt-6 text-neutral-400 text-center max-w-xl">
        <span>
          כאן תוכל להרגיש איך זה לשלוט בכסף שלך – בלי מתווכים, בלי עמלות, בלי לחכות.
        </span>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

/**
 * "אז איך כסף באמת עובד" – כל כרטיס: מילים מודגשות בצבע המסגרת והקו התחתון.
 */
const facts = [
  {
    title: "מהפכה, לא עוד כסף",
    desc: 'ביטקוין לא נוצר בשביל "להתעשר" — אלא כדי ״לשבור״ את המערכת שאנחנו חיים בה.',
    border: "border-cyan-400/70",
    color: "text-cyan-400",
    underline: "decoration-cyan-400/70",
    highlights: ["״לשבור״"],
  },
  {
    title: "שליטה בידיים שלך",
    desc: "הוא לא נשלט על ידי אף מדינה, בנק או ארגון — כולו פתוח, שקוף ומאובטח על ידי הכורים.",
    border: "border-emerald-400/70",
    color: "text-emerald-400",
    underline: "decoration-emerald-400/70",
    highlights: ["פתוח", "שקוף", "מאובטח"],
  },
  {
    title: "ערך, חופש, אמון",
    desc: "לא צריך להבין בטכנולוגיה כדי להבין מה זה ביטקוין — צריך להבין ערך, חופש ואמון.",
    border: "border-amber-300/70",
    color: "text-amber-400",
    underline: "decoration-amber-300/70",
    highlights: ["ערך", "חופש", "אמון"],
  },
];

export default function HowMoneyWorks() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-0 flex flex-col items-center" dir="rtl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl xs:text-3xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-200 drop-shadow-neon-cyan"
      >
        אז איך כסף באמת עובד?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-lg md:text-2xl text-[#B0B3B8] text-center max-w-2xl mb-10 font-light"
      >
        ברוב חיינו, למדנו שכסף זה דבר שאחרים שולטים בו – הבנק, המדינה, או מי שיש לו יותר.
        <span className="block text-cyan-400 font-semibold mt-2">
          אבל מה אם זה לא חייב להיות ככה?
        </span>
        <span className="block text-emerald-400 font-semibold mt-1">
          הנה שלוש עובדות שלא מספרים לך — והן משנות הכול:
        </span>
      </motion.p>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {facts.map((fact, idx) => (
          <motion.div
            key={fact.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.15, duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col items-center text-center p-7 rounded-2xl bg-[#23262F]/80 border-2 ${fact.border} shadow-lg transition-all duration-300 hover:scale-105`}
            style={{
              boxShadow: "0 0 16px 2px rgba(0,255,255,0.08), 0 2px 16px 0 rgba(0,0,0,0.18)",
            }}
          >
            <h3 className={`text-xl md:text-2xl font-bold mb-2 ${fact.color}`}>{fact.title}</h3>
            <p className="text-base md:text-lg text-[#B0B3B8] font-light leading-relaxed">
              {fact.desc.split(" ").map((word, i) =>
                fact.highlights.some((h) => word.replace(/[.,]/g, "") === h) ? (
                  <span
                    key={i}
                    className={`${fact.color} font-semibold underline underline-offset-4 ${fact.underline}`}
                  >
                    {word + " "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

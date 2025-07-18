// src/components/TrustSimSection.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * TrustSimSection – סימולציית אמון ביסט מוד: בחירה, ripple, טרנזקציה, בלוקצ'יין חי, חתימה דיגיטלית, NFT, קונפטי, UX עולמי.
 */
const options = [
  { label: "ערך", color: "from-cyan-400 to-cyan-600", text: "text-cyan-400" },
  { label: "חופש", color: "from-emerald-400 to-emerald-600", text: "text-emerald-400" },
  { label: "אמון", color: "from-amber-300 to-amber-500", text: "text-amber-400" },
];

function randomHash() {
  const chars = "abcdef0123456789";
  return (
    "0x" +
    Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("") +
    "..." +
    Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
  );
}

function randomNFTId() {
  return "#" + Math.floor(Math.random() * 10000).toString().padStart(4, "0");
}

function downloadNFT(nftId) {
  // דמו: יוצר תמונה דינמית של ה־NFT (SVG) ומוריד אותה
  const svg = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#06b6d4"/>
          <stop offset="50%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#34d399"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="32" fill="url(#g)" />
      <text x="100" y="90" font-size="36" font-family="Inter,sans-serif" fill="#181A20" font-weight="bold" text-anchor="middle">NFT</text>
      <text x="100" y="130" font-size="18" font-family="monospace" fill="#181A20" text-anchor="middle">${nftId}</text>
      <text x="100" y="160" font-size="14" font-family="Inter,sans-serif" fill="#181A20" text-anchor="middle">"אמון דיגיטלי"</text>
    </svg>
  `;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nft-${nftId}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function TrustSimSection() {
  const [selected, setSelected] = useState([]);
  const [sending, setSending] = useState(false);
  const [hash, setHash] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [signed, setSigned] = useState(false);
  const [showNFT, setShowNFT] = useState(false);
  const [nftId, setNftId] = useState("");
  const [feed, setFeed] = useState([]);

  const allSelected = selected.length === options.length;

  // קונפטי דמיוני (אפשר להחליף ל־react-confetti)
  const Confetti = () => (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-wrap justify-center items-center opacity-80">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="block absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 1}rem`,
              color: ["#06b6d4", "#fbbf24", "#34d399", "#fff"][i % 4],
              opacity: 0.7,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `confetti-fall ${1.5 + Math.random()}s linear ${Math.random()}s 1`,
            }}
          >
            ★
          </span>
        ))}
      </div>
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-40vh) scale(1) rotate(0deg);}
          100% { transform: translateY(60vh) scale(0.7) rotate(360deg);}
        }
      `}</style>
    </div>
  );

  // פיד דינמי דמיוני
  React.useEffect(() => {
    if (!confirmed) return;
    const interval = setInterval(() => {
      setFeed((prev) => [
        ...prev.slice(-4),
        {
          user: "0x" + Math.random().toString(16).slice(2, 6) + "...",
          choice: options[Math.floor(Math.random() * options.length)].label,
        },
      ]);
    }, 2200);
    return () => clearInterval(interval);
  }, [confirmed]);

  const handleSend = () => {
    setSending(true);
    setHash("");
    setConfirmed(false);
    setSigned(false);
    setShowNFT(false);
    setTimeout(() => {
      setHash(randomHash());
      setTimeout(() => {
        setConfirmed(true);
        setSending(false);
      }, 1200);
    }, 1200);
  };

  const handleSign = () => {
    setSigned(true);
    setTimeout(() => {
      setShowNFT(true);
      setNftId(randomNFTId());
    }, 1200);
  };

  const toggle = (label) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 30 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative w-full py-8 md:py-12 px-2 xs:px-4 flex flex-col items-center bg-[#181A20] rounded-2xl"
      dir="rtl"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl xs:text-3xl md:text-4xl font-extrabold text-center mb-6 text-white tracking-tight"
      >
        אמון זה לא עניין של טכנולוגיה — זה עניין של בחירה.
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {options.map((opt) => (
          <motion.button
            key={opt.label}
            onClick={() => toggle(opt.label)}
            whileTap={{ scale: 0.96 }}
            disabled={sending || confirmed}
            className={`
              px-7 py-3 rounded-full font-bold text-lg transition-all duration-300
              border-2 border-transparent bg-[#23262F]/80
              shadow-md relative overflow-hidden
              ${selected.includes(opt.label) ? `bg-gradient-to-r ${opt.color} text-[#181A20]` : "text-neutral-300"}
              ${sending || confirmed ? "opacity-60 cursor-not-allowed" : ""}
            `}
            style={{
              boxShadow: selected.includes(opt.label)
                ? "0 0 16px 2px #00C2FF55, 0 2px 8px 0 #FFB30033"
                : "0 0 8px 0 #23262F44",
            }}
          >
            <span className="relative z-10">{opt.label}</span>
            {selected.includes(opt.label) && (
              <motion.span
                layoutId="underline"
                className={`absolute left-4 right-4 bottom-2 h-1 rounded-full bg-gradient-to-r ${opt.color} opacity-80`}
                initial={{ opacity: 0, scaleX: 0.7 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0.7 }}
                transition={{ type: "spring", duration: 0.4 }}
              />
            )}
            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full pointer-events-none animate-pulse bg-white/5 opacity-0 group-active:opacity-100" />
          </motion.button>
        ))}
      </div>

      {/* שלב שליחת טרנזקציה */}
      <AnimatePresence>
        {selected.length === options.length && !sending && !confirmed && (
          <motion.div
            key="cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.04,
                background: "linear-gradient(90deg, #00FFB2 0%, #00C2FF 50%, #FFB300 100%)",
                color: "#181A20",
                boxShadow: "0 0 24px 2px #00C2FF55, 0 2px 16px 0 #FFB30033",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSend}
              className="px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg transition-all duration-300 text-lg tracking-wide border-2 border-transparent"
            >
              שלח בחירה לבלוקצ'יין
            </motion.button>
            <span className="text-neutral-400 text-base">הבחירה שלך תירשם בבלוקצ'יין דמיוני 🚀</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* שלב אנימציית שליחה */}
      <AnimatePresence>
        {sending && (
          <motion.div
            key="sending"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3 mt-4"
          >
            <div className="w-56 h-3 rounded-full bg-neutral-800 overflow-hidden mb-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-amber-300 to-emerald-400"
              />
            </div>
            <span className="text-cyan-300 font-bold text-lg">שולח טרנזקציה...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* שלב hash ואישור */}
      <AnimatePresence>
        {hash && (
          <motion.div
            key="hash"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2 mt-4"
          >
            <span className="text-neutral-400 text-base">Hash:</span>
            <span className="font-mono text-cyan-400 text-lg">{hash}</span>
          </motion.div>
        )}
        {confirmed && (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2 mt-4"
          >
            <span className="text-3xl font-bold text-emerald-400 drop-shadow-neon-emerald">✓</span>
            <span className="text-lg text-white font-semibold">הבחירה שלך נרשמה בבלוקצ'יין!</span>
           
            {/* בלוקצ'יין חי */}
            <div className="flex gap-2 items-end mt-4 overflow-x-auto scrollbar-hide">
              {[1,2,3,4].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 * i }}
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400/30 via-emerald-400/20 to-amber-300/30 border-2 border-cyan-400/30 flex flex-col items-center justify-center shadow-lg`}
                >
                  <span className="text-xs text-white/80 font-mono">Block #{i+1}</span>
                  <span className="text-[10px] text-cyan-200 font-mono">0x{Math.random().toString(16).slice(2,8)}</span>
                </motion.div>
              ))}
              {/* בלוק חדש */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0.3 }}
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{ delay: 1 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 via-amber-300 to-emerald-400 border-4 border-white flex flex-col items-center justify-center shadow-2xl ring-4 ring-emerald-400/40"
              >
                <span className="text-xs text-[#181A20] font-bold">הבחירה שלך</span>
                <span className="text-[10px] text-[#181A20] font-mono">{hash}</span>
              </motion.div>
            </div>
            {/* חתימה דיגיטלית */}
            {!signed && (
              <motion.button
                whileHover={{ scale: 1.04, background: "linear-gradient(90deg, #00FFB2 0%, #00C2FF 100%)", color: "#181A20" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSign}
                className="px-6 py-2 mt-6 bg-black text-white font-bold rounded-full shadow-lg border-2 border-cyan-400/40"
              >
                חתום דיגיטלית
              </motion.button>
            )}
            {signed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-1 mt-2"
              >
                <span className="text-xs text-cyan-400 font-mono">Signed by: 0xA1B...4F9</span>
                <span className="text-emerald-400 font-bold">✔️ חתימה דיגיטלית בוצעה</span>
              </motion.div>
            )}
            {/* NFT דינמי */}
            {showNFT && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-2 mt-6"
              >
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-400 via-amber-300 to-emerald-400 flex flex-col items-center justify-center shadow-2xl border-4 border-white"
                  style={{ perspective: 800 }}
                >
                  <span className="text-2xl font-bold text-[#181A20]">NFT</span>
                  <span className="text-xs text-[#181A20] font-mono">{nftId}</span>
                  <span className="text-xs text-[#181A20] mt-1">"אמון דיגיטלי"</span>
                </motion.div>
                <span className="text-white font-semibold">קיבלת NFT של אמון!</span>
                <div className="flex gap-2 mt-2">
                  <button
                    className="px-4 py-1 rounded-full bg-cyan-400 text-[#181A20] font-bold shadow"
                    onClick={() => downloadNFT(nftId)}
                  >
                    הורד NFT
                  </button>
                  <button
                    className="px-4 py-1 rounded-full bg-emerald-400 text-[#181A20] font-bold shadow"
                    onClick={() => window.alert("שיתוף דמיוני!")}
                  >
                    שתף
                  </button>
                </div>
                <span className="text-neutral-400 text-xs">דמיוני, אבל שלך 😉</span>
              </motion.div>
            )}
            {/* קונפטי */}
            {showNFT && <Confetti />}
            {/* פיד דינמי */}
            <div className="w-full flex flex-col items-center mt-8">
              <span className="text-neutral-400 text-sm mb-2">בחירות אחרונות בבלוקצ'יין:</span>
              <div className="flex flex-wrap gap-2 justify-center">
                {feed.slice(-4).map((f, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#23262F]/80 border border-cyan-400/20 text-xs text-cyan-300 font-mono shadow"
                  >
                    {f.user} בחר/ה {f.choice}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

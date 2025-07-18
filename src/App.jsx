// src/App.jsx

import React, { useState } from "react";
import Hero from "./components/Hero";
import HowMoneyWorks from "./components/HowMoneyWorks";
import HowItStarted from "./components/HowItStarted";
import AnotherSystem from "./components/AnotherSystem";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import Modal from "./components/Modal";
import TrustSimSection from "./components/TrustSimSection";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toast, setToast] = useState("");
  const [simOpen, setSimOpen] = useState(false);

  return (
    <main
      dir="rtl"
      className="min-h-screen snap-y snap-mandatory scroll-smooth bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans px-6 md:px-12"
    >
      <Hero
        onCtaClick={() => setModalOpen(true)}
        showProgress={progress > 0 && progress < 100}
        progress={progress}
        toastMessage={toast}
      />

      {/* אייקון עגול קבוע בפינה – פותח את המודל */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-emerald-300 to-amber-300 shadow-xl flex items-center justify-center hover:scale-110 transition-all group border-2 border-cyan-400/40"
        aria-label="פתיחת טופס יצירת קשר"
        style={{
          boxShadow: "0 0 24px 2px #00C2FF55, 0 2px 16px 0 #FFB30033",
        }}
      >
        <svg
          className="w-7 h-7 text-[#181A20] drop-shadow-neon-cyan group-hover:scale-125 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0l-9 6-9-6" />
        </svg>
      </button>

      {/* מודל טופס לידים */}
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* סקשנים עיקריים */}
      <HowMoneyWorks />
      <HowItStarted onCtaClick={() => setModalOpen(true)} />

      {/* דמו מערכת אחרת – כאן מגיע ה-WOW */}
      <AnotherSystem />

      {/* סימולציית אמון – ב-Modal */}
      <section className="relative py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
          אמון זה לא עניין של טכנולוגיה — זה עניין של בחירה.
        </h2>
        <button
          onClick={() => setSimOpen(true)}
          className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#181A20] font-bold rounded-full shadow-lg text-lg tracking-wide"
        >
          נסו סימולציה אינטראקטיבית
        </button>
      </section>
      <Modal open={simOpen} onClose={() => setSimOpen(false)}>
        <TrustSimSection />
      </Modal>

      <Testimonials onCtaClick={() => setModalOpen(true)} />
      <Footer />
    </main>
  );
}

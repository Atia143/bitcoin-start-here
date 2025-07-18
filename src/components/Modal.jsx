// src/components/Modal.jsx

import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-auto bg-[#181A20] rounded-2xl shadow-2xl p-6 md:p-10 border border-cyan-400/20 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-cyan-400 hover:text-amber-300 text-2xl"
          aria-label="סגור"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

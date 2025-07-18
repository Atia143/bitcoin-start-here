// src/components/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 flex flex-col items-center justify-center bg-[#181A20] border-t border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base md:text-lg font-bold text-white tracking-wide">
          Built by Yuval Atia
        </span>
        {/* כפתור GitHub (mailto) */}
        <a
          href="mailto:pixelplus.contact@gmail.com"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 hover:scale-110 transition-transform shadow-md ml-1"
          aria-label="שלח מייל (GitHub)"
        >
          {/* לוגו GitHub */}
          <svg className="w-5 h-5 text-[#181A20]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.38 9.38 0 0112 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z" />
          </svg>
        </a>
        {/* כפתור מייל (מעטפה) */}
        <a
          href="mailto:pixelplus.contact@gmail.com"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-amber-300 hover:scale-110 transition-transform shadow-md"
          aria-label="שלח מייל"
        >
          {/* לוגו מייל */}
          <svg className="w-5 h-5 text-[#181A20]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="10" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
          </svg>
        </a>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-neutral-400 text-xs">
          &copy; {new Date().getFullYear()} All Rights Reserved •
          
        </span>
        <span className="text-neutral-500 text-xs mt-1">
          Made with <span className="text-amber-400">★</span> in Tel Aviv
        </span>
      </div>
    </footer>
  );
}

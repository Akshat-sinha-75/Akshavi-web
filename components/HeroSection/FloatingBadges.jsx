"use client";
import React from "react";
import { motion } from "framer-motion";

const FloatingBadges = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
      {/* Badge 1 - Left side */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[10%] bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-border)]/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
      >
        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></div>
        <span className="text-xs font-semibold tracking-wider text-[var(--color-text)]">LIVE GPS: ACTIVE</span>
      </motion.div>

      {/* Badge 2 - Bottom right */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[12%] bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-border)]/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span className="text-xs font-semibold tracking-wider text-[var(--color-text)]">GUARDIAN NETWORK ONLINE</span>
      </motion.div>

      {/* Badge 3 - Top right */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] right-[22%] bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-border)]/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span className="text-xs font-semibold tracking-wider text-[var(--color-text)]">SECURE CONNECTION</span>
      </motion.div>
    </div>
  );
};

export default FloatingBadges;

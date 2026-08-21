"use client";
import React from "react";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.15]">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-text) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-text) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default GridBackground;

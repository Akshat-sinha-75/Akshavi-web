"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement with physics
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 0.8 });

  useEffect(() => {
    // Initial position center
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  // Create a template string that Framer Motion will update efficiently without React renders
  const background = useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(230, 57, 70, 0.12), transparent 60%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{ background }}
    />
  );
};

export default MouseGlow;

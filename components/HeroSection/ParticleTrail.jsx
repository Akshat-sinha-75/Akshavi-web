"use client";
import React, { useEffect, useRef } from "react";

const ParticleTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;
    let mouse = { x: -100, y: -100 };

    // Function to resize canvas to window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let isAnimating = false;

    // Track mouse
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Spawn new particles (reduced from 4 to 2 per event to save CPU)
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          life: 1, // opacity fades from 1 to 0
          decay: Math.random() * 0.015 + 0.01, // how fast it fades
          color: Math.random() > 0.4 ? '230, 57, 70' : '200, 200, 220'
        });
      }
      
      // Wake up the animation loop if it's sleeping
      if (!isAnimating) {
        isAnimating = true;
        render();
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.life * 0.8})`;
        ctx.fill();
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isAnimating = false; // Sleep the loop to save CPU
      }
    };

    // Do NOT call render() immediately if there are no particles
    // render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-80"
    />
  );
};

export default ParticleTrail;

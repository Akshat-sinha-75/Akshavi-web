"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleTrail from "./ParticleTrail";

const SplitChars = ({ text, className, id }) => {
  return (
    <span className={className} id={id}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="hero-char"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderCounterRef = useRef(null);
  const endLineRef = useRef(null);
  const parallaxInstanceRef = useRef(null);
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.body.style.overflow = "hidden";

    const headingChars = headingRef.current.querySelectorAll(".hero-char");

    // Hide hero elements initially
    gsap.set(headingChars, { autoAlpha: 0, y: 100 });
    gsap.set(subtitleRef.current, { autoAlpha: 0, y: 30 });
    gsap.set(endLineRef.current, { autoAlpha: 0 });

    // Breaker line: invisible at the top of the page, fades in as the user
    // scrolls down. Tied to scroll position via scrub so it tracks Lenis
    // smooth-scroll precisely.
    const endLineTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300",
      scrub: true,
      animation: gsap.to(endLineRef.current, { autoAlpha: 1, ease: "none" }),
    });

    // iOS 13+ requires explicit permission to receive deviceorientation events.
    // parallax-js uses those events automatically on mobile (gyroscope mode),
    // so we ask for permission on the first user gesture.
    const requestGyroPermission = () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        DeviceOrientationEvent.requestPermission().catch(() => {});
      }
    };
    const handleFirstGesture = () => {
      requestGyroPermission();
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
    };
    window.addEventListener("touchstart", handleFirstGesture, { once: true, passive: true });
    window.addEventListener("click", handleFirstGesture, { once: true });

    // Parallax-js completely removed as requested



    const tl = gsap.timeline({
      onComplete: () => {
        setLoaderDone(true);
        document.body.style.overflow = "";
      },
    });

    const counter = { value: 0 };

    // Loader counter: 0 → 100
    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (loaderCounterRef.current) {
          loaderCounterRef.current.innerText = `${Math.floor(counter.value)}`;
        }
      },
    }, "anim");

    // Loader slide up
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1.8,
      ease: "power3.out",
    }, "anim+=2.2");

    // Counter fade out
    tl.to(loaderCounterRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
    }, "anim+=2");

    // Heading chars animation
    tl.to(headingChars, {
      autoAlpha: 1,
      y: 0,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      duration: 1,
      ease: "power3.out",
    }, "anim+=3.2");

    // Subtitle animation
    tl.to(subtitleRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "anim+=4.0");



    return () => {
      tl.kill();
      endLineTrigger.kill();

      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Loader */}
      <div id="loader" ref={loaderRef}>
        <div id="loader-counter" ref={loaderCounterRef}>0</div>
      </div>

      {/* Hero — direct children of #hero-section are parallax layers.
          Each layer's `data-depth` controls how much it moves with the cursor. */}
      <div id="hero-section" ref={sectionRef}>
        <ParticleTrail />
        {/* Radar Pulse Background (Replaces scribbles) */}
        <div className="hero-layer" data-depth="0.05" style={{ zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
            <div className="absolute w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full border border-[var(--color-accent)] opacity-20 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] rounded-full border border-[var(--color-accent)] opacity-10 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
            <div className="absolute w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] rounded-full border border-[var(--color-accent)] opacity-5 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite_2s]"></div>
          </div>
        </div>

        {/* Heading text and subtitle */}
        <div className="hero-layer" data-depth="0.10" style={{ zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div id="hero-heading" ref={headingRef} style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none' }}>
            <SplitChars text="AKSHAVI" />
          </div>
          <div 
            ref={subtitleRef} 
            className="flex flex-col items-center mt-2 md:mt-4"
          >
            <div 
              className="text-center font-medium tracking-wide text-[rgb(var(--color-fg))]"
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", opacity: 0.8 }}
            >
              Intelligent safety infrastructure. <br className="md:hidden" /> Real-time. Always watching.
            </div>
            <a 
              href="/Akshavi.apk" 
              download="Akshavi.apk"
              className="mt-8 px-8 py-3 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: "var(--color-accent)", 
                color: "#FFFFFF",
                boxShadow: "0 10px 25px -5px rgba(230, 57, 70, 0.4)",
                pointerEvents: "auto"
              }}
            >
              Get AKSHAVI
            </a>
          </div>
        </div>



        {/* End-of-hero indicator line */}
        <div className="hero-end-line" ref={endLineRef}></div>
      </div>
    </>
  );
};

export default HeroSection;

"use client";
import React, { Suspense, useRef, useEffect } from "react";
import Header from "@/components/Featured/Header";
import SubHeader from "@/components/Featured/SubHeader";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import SmoothScroll from "@/components/SmoothScroll";

import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const ref = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    console.clear();
    console.log(
      "%cCREATED BY MTARIF.COM",
      "background: #D9E6FF; color: #0f172a; font-size: 16px; font-weight: 800; padding: 10px 16px; border-radius: 10px; letter-spacing: 2px;"
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);


  }, []);

  return (
    <SmoothScroll>
    <Suspense
      fallback={
        <div className="w-screen bg-black h-screen text-white text-4xl md:text-7xl lg:text-9xl flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="bg-bg text-fg h-auto w-screen overflow-x-hidden">
        <Navbar />

        <HeroSection />
        {/* </div> */}
        <div
          id="about"
          className="w-full relative mt-16 md:mt-[10rem] flex flex-col pb-16 md:pb-24 gap-8 md:gap-0"
          ref={ref}
        >

          <Header />

          <SubHeader />
        </div>

        <Projects />

        <HorizontalScroll />
        <Contact />
        <SiteFooter />
      </div>
    </Suspense>
    </SmoothScroll>
  );
}

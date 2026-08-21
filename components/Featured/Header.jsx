import { a, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, set] = useState();

  useEffect(() => {
    set(true);
  }, []);

  const [horizontal, api] = useSpring(() => ({ from: { transform: 'translateX(0%)' } }));

  const horizontalCallback = open => api.start({ transform: `translateX(0%)` });
  return (
    <div className="w-full z-10 relative px-4 md:px-0 md:pl-6 font-semibold text-5xl sm:text-6xl md:text-[9rem] text-center md:text-left leading-[0.95] md:leading-none" style={{ letterSpacing: "-0.07em" }}>
      <Trail callback={horizontalCallback} open={open}>
        <a.div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap" style={horizontal}>
          <div className="text-[1.5em] leading-[0.8] uppercase">SAFETY</div>
        </a.div>
        <div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap mt-2 md:mt-4">
          <div className="uppercase">REIMAGINED</div>
        </div>
      </Trail>
    </div>
  );
};

export default Header;

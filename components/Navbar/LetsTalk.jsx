import React from "react";
import { useSpring, animated } from "@react-spring/web";

// Same address used in `Contact` and `SiteFooter`. If any of these change,
// keep all three places in sync.
const EMAIL = "abdelruhamanelfekky@gmail.com";

// "LET'S TALK" was previously a non-interactive div. It now opens the user's
// mail client straight to the real contact email — which is also wired up
// in the contact section and the footer.
const LetsTalk = ({ isScrolled }) => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
    x: -10,
  }));

  const [opacitySprings, opacityApi] = useSpring(() => ({
    opacity: 1,
    x: 0,
  }));

  const [opacitySpringsReverse, opacityApiReverse] = useSpring(() => ({
    opacity: 0,
    x: -10,
  }));

  return (
    <a
      href="https://expo.dev/artifacts/eas/ZjPdZm6Y3j-IB9JnemVOwQKysBkXXHiW9fRu9CIcvPk.apk"
      download="Akshavi.apk"
      aria-label={`Get the App`}
      className="nav_btn_lg nav_btn_dark flex items-center justify-center hover:bg-brblue py-6"
      onMouseEnter={() => {
        api.start({ x: 20 });
        opacityApi.start({ opacity: 0, x: 5 });
        opacityApiReverse.start({ opacity: 1, x: 3 });
      }}
      onMouseLeave={() => {
        api.start({ x: 0 });
        opacityApi.start({ opacity: 1, x: 0 });
        opacityApiReverse.start({ opacity: 0, x: -10 });
      }}
    >
      <div className={`flex items-center justify-center transition-all duration-700 ease-in-out ${isScrolled ? 'w-[18px]' : 'w-auto'}`}>
        {/* The original hover springs stay for when it is NOT scrolled */}
        <div className={`flex items-center overflow-hidden whitespace-nowrap transition-all duration-700 ease-in-out ${isScrolled ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'}`}>
          <animated.span style={opacitySpringsReverse} className="opacity-0">➔</animated.span>
          <animated.span style={springs}>GET THE APP &nbsp;</animated.span>
          <animated.span style={opacitySprings}>&nbsp;•&nbsp;</animated.span>
        </div>
        
        {/* The icon to show when scrolled */}
        <div className={`transition-all duration-700 ease-in-out absolute flex items-center justify-center ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        </div>
      </div>
    </a>
  );
};

export default LetsTalk;

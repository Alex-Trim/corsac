"use client";
import Lenis from "lenis";
import React from "react";

const SmoothScrollerContext = React.createContext();

export const useSmoothScroller = () => React.useContext(SmoothScrollerContext);

export default function ScrollContext({ children }) {
  const [lenisRef, setLenis] = React.useState(null);
  const [rafState, setRaf] = React.useState(null);

  React.useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }
    rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    };
  }, []);
  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}

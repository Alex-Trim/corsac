import React from "react";
import {
  Header,
  Hero,
  Platforms,
  Directions,
  News,
  Audiences,
  Footer,
  BlurLine,
} from "@/shared/components";

import ScrollContext from "@/shared/components/providers/ScrollContext";
import AnimatedBlocksBackground from "@/shared/components/animated-blocks-background";

import "@/shared/styles/globals.css";

export default function Home() {
  return (
    <main>
      <ScrollContext>
        {/* <AnimatedBlocksBackground /> */}

        <Header />
        <Hero />
        <Platforms />
        <Directions />
        <News />
        <Audiences />
        <Footer />
        <BlurLine />
      </ScrollContext>
      <svg id="svgFilter">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </main>
  );
}

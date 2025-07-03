import React from "react";
import {
  Audiences,
  Directions,
  Footer,
  Header,
  Hero,
  News,
  Platforms,
} from "@/shared/components";

import { ParticlesCanvas } from "@/shared/components/particlesConvas";
import "@/shared/styles/globals.css";
import ScrollContext from "@/shared/components/ScrollContext";
import { Spacing } from "@/shared/components/spacing";
import AnimatedBlocksBackground from "@/shared/components/AnimatedBlocksBackground";
import AnimatedBlockInteractiv from "@/shared/components/AnimatedBlockInteractiv";
export default function Home() {
  return (
    <main>
      <ScrollContext>
        {/* <ParticlesCanvas src="/fox4.png" /> */}
        {/* <AnimatedBlockInteractiv /> */}
        {/* <AnimatedBlocksBackground /> */}

        <Header />
         <Hero />
        <Platforms />
        <Directions />
        <News />

        <Audiences />
        <Footer /> 
        <div className="blur_line">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRradius: "12px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0px",
                zIndex: "1",
                backdropFilter: "blur(0.5px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: "0px",
                zIndex: "2",
                backdropFilter: "blur(0.5625px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: "0px",
                zIndex: "3",
                backdropFilter: "blur(1.125px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: "0px",
                zIndex: "4",
                backdropFilter: "blur(2.25px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: "0px",
                zIndex: "5",
                backdropFilter: "blur(4.5px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: "0px",
                zIndex: "6",
                backdropFilter: "blur(9px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: " 0px",
                zIndex: "7",
                backdropFilter: "blur(18px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: "0px",
                zIndex: "8",
                backdropFilter: " blur(36px)",
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            ></div>
          </div>
        </div>
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

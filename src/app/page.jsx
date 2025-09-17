import React from "react";
import {
  Hero,
  Platforms,
  Directions,
  News,
  Audiences,
} from "@/shared/components";
import AnimatedBlocksBackground from "@/shared/components/animated-blocks-background";
export default function Home() {
  return (
    <main>
      <AnimatedBlocksBackground />
      <Hero />
      <Platforms />
      <Directions />
      <News />
      <Audiences />
    </main>
  );
}

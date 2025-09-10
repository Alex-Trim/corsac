import React from "react";
import {
  Hero,
  Platforms,
  Directions,
  News,
  Audiences,
} from "@/shared/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Platforms />
      <Directions />
      <News />
      <Audiences />
    </main>
  );
}

import { Header, Footer, BlurLine } from "@/shared/components";

import ScrollContext from "@/shared/components/providers/ScrollContext";
import AnimatedBlocksBackground from "@/shared/components/animated-blocks-background";

export const metadata = {
  title: "Корсак",
  description: "Цифровая образовательная платформа Корсак",
};
import "@/shared/styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ScrollContext>
          {/* <AnimatedBlocksBackground /> */}
          <Header />
          {children}
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
      </body>
    </html>
  );
}

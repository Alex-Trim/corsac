import React, { useEffect, useRef, useState } from "react";
import styles from "./WolfAnimation.module.css";

const WolfAnimation = () => {
  const wolfRef = useRef(null);
  const [frame, setFrame] = useState(0);

  const space = (n) => "\u00A0".repeat(n); // неразрывный пробел
  const frames = [
    `${space(2)}____
${space(2)}\\${space(2)}/\\${space(2)}|\\/|
${space(3)}\\/${space(2)}\\_/${space(1)}<i>..</i>__<i>.</i>
${space(4)}\\__${space(1)}_\\____/
${space(7)}\\_\\_\\`,
    `${space(2)}____
${space(2)}\\${space(2)}/\\${space(2)}|\\/|
${space(3)}\\/${space(2)}\\_/${space(1)}<i>..</i>__<i>.</i>
${space(4)}\\__${space(1)}_\\____/
${space(6)}/_/_/`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 650);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`${styles.wolf}`}
      data-frame={frame}
      ref={wolfRef}
      dangerouslySetInnerHTML={{ __html: frames[frame] }}
    />
  );
};

export default WolfAnimation;

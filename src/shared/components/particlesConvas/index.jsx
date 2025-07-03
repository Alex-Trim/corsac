"use client";
import React, { useRef, useEffect } from "react";

export const ParticlesCanvas = ({ src }) => {
  console.log(src);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const PARTICLE_DIAMETER = 6;
  const REPEL_RADIUS = 100;
  const IMAGE_WIDTH = 1200;
  const IMAGE_HEIGHT = 1000;
  // const IMAGE_WIDTH = 500;
  // const IMAGE_HEIGHT = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = src;

    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    // слушаем на window, потому что canvas в -1 z-index
    window.addEventListener("mousemove", handleMouseMove);

    img.onload = () => {
      const IMAGE_LEFT = width * 0.45;
      const IMAGE_TOP = height * 0.08;

      // const IMAGE_LEFT = width * 0.35;
      // const IMAGE_TOP = height * -0.05;

      const offscreen = document.createElement("canvas");
      offscreen.width = IMAGE_WIDTH;
      offscreen.height = IMAGE_HEIGHT;
      const offCtx = offscreen.getContext("2d");

      offCtx.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
      const imageData = offCtx.getImageData(
        0,
        0,
        IMAGE_WIDTH,
        IMAGE_HEIGHT
      ).data;

      const particles = [];
      const numRows = Math.floor(IMAGE_HEIGHT / PARTICLE_DIAMETER);
      const numCols = Math.floor(IMAGE_WIDTH / PARTICLE_DIAMETER);

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const x = col * PARTICLE_DIAMETER;
          const y = row * PARTICLE_DIAMETER;
          const index = (y * IMAGE_WIDTH + x) * 4;
          const red = imageData[index];
          const green = imageData[index + 1];
          const blue = imageData[index + 2];
          const alpha = imageData[index + 3];

          if (alpha > 0) {
            const screenX = IMAGE_LEFT + x;
            const screenY = IMAGE_TOP + y;

            particles.push({
              x: screenX * Math.random(),
              y: screenY * Math.random(),
              originX: screenX,
              originY: screenY,
              color: `rgba(${red},${green},${blue},${alpha / 255})`,
            });
          }
        }
      }

      particlesRef.current = particles;
      animate();
    };

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [src]);

  function animate() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    updateParticles(particles, mouse);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  function updateParticles(particles, mouse) {
    particles.forEach((p) => {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPEL_RADIUS) {
        const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * force * 5;
        const moveY = Math.sin(angle) * force * 5;

        p.x -= moveX;
        p.y -= moveY;
      } else {
        p.x += (p.originX - p.x) * 0.05;
        p.y += (p.originY - p.y) * 0.05;
      }
    });
  }

  return <canvas ref={canvasRef} className="particlesConvas" />;
};

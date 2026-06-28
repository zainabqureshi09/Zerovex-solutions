"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(circle 400px at ${x}px ${y}px, rgba(139, 0, 0, 0.05), transparent 80%)`;

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      style={{
        background,
      }}
    />
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionAnimation({
  children,
  delay = 0,
  className = "",
}: SectionAnimationProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

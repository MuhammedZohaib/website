"use client";

import { motion } from "framer-motion";
import React from "react";
import { ReactNode } from "react";

interface StaggeredChildrenProps {
  children: ReactNode;
  className?: string;
  staggerAmount?: number;
  childClassName?: string;
}

export default function StaggeredChildren({
  children,
  className = "",
  staggerAmount = 0.1,
  childClassName = "",
}: StaggeredChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

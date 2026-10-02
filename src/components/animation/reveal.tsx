"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
import { useOpeningScreenContext } from "@/components/opening-screen/opening-screen-context";

type RevealProps = PropsWithChildren<{
  afterOpening?: boolean;
  delay?: number;
}>;

export default function Reveal({
  afterOpening = false,
  children,
  delay = 0,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { isComplete } = useOpeningScreenContext();
  const shouldAnimate = !prefersReducedMotion;
  const shouldReveal = !afterOpening || isComplete || !shouldAnimate;

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
      animate={
        afterOpening
          ? shouldReveal
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 16 }
          : undefined
      }
      whileInView={
        !afterOpening && shouldAnimate ? { opacity: 1, y: 0 } : undefined
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

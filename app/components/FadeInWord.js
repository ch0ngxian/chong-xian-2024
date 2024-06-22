"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function FadeInWord({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}) {
  const _words = words.split(" ");

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" className={className}>
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
}

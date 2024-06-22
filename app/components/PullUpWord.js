"use client";

import { motion } from "framer-motion";

export default function PullUpWord({
  words,
  delay = 0.1,
  startDelay = 0,
  gap = "12px",
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: startDelay,
        staggerChildren: delay,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}) {
  return (
    <motion.div variants={wrapperFramerProps} initial="hidden" animate="show" className={className}>
      {words.split(" ").map((word, i) =>
        word === "<br/>" ? (
          <br key={i} />
        ) : (
          <motion.span key={i} variants={framerProps} style={{ display: "inline-block", paddingRight: gap }}>
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        )
      )}
    </motion.div>
  );
}

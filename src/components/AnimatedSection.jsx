import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, delay = 0, duration = 1.2 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration, ease: "easeOut" }}
      className="section-style"
    >
      {children}
    </motion.section>
  );
}
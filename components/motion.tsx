'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { HTMLAttributes, PropsWithChildren } from 'react';

const defaultVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Reveal({
  children,
  className,
  variants,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & MotionProps>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={variants ?? defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.09,
            delayChildren: 0.05
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

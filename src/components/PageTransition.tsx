import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { SlideFade } from '@chakra-ui/react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <SlideFade in offsetY={20}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </SlideFade>
  );
}
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type CardAnimationProps = {
  children: JSX.Element;
};

export default function CardAnimation({ children }: CardAnimationProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [inView, controls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "rgb(193, 174, 112)",
          zIndex: 20,
        }}
      />
    </div>
  );
}

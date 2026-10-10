import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

export function Reveal({ children, delay = 0, className, y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ children, className = "", max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={`transition-transform duration-300 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, intro, light = false, center = false }: { eyebrow: string; title: string; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${light ? "text-amber" : "text-electric"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-5xl ${light ? "text-ivory" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg ${light ? "text-slate" : "text-muted-foreground"}`}>{intro}</p>}
    </Reveal>
  );
}

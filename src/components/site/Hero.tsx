import { ClientOnly, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const Hero3DScene = lazy(() => import("./Hero3DScene"));

function useUse3D() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    // 3D runs on every screen size (phones included); only skipped when the visitor
    // asks for reduced motion or the browser has no WebGL.
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const hasWebGL = (() => {
      try {
        const c = document.createElement("canvas");
        return !!(c.getContext("webgl2") || c.getContext("webgl"));
      } catch {
        return false;
      }
    })();
    const set = () => setOk(mq.matches && hasWebGL);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return ok;
}

function FlatHeadline() {
  const reduce = useReducedMotion();
  const lines = [
    { t: "RUN YOUR HOTEL.", c: "text-ivory" },
    { t: "WE'LL HANDLE", c: "text-amber" },
    { t: "THE COMPLEXITY.", c: "text-gradient" },
  ];
  return (
    <div aria-hidden className="font-display text-[2.6rem] font-bold leading-[0.95] tracking-tight sm:text-6xl">
      {lines.map((l, i) => (
        <motion.span
          key={l.t}
          className={`block ${l.c}`}
          style={{ textShadow: "0 6px 0 rgb(40 6 14 / .55)" }}
          initial={reduce ? false : { opacity: 0, y: 30, scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {l.t}
        </motion.span>
      ))}
    </div>
  );
}

export function Hero() {
  const use3D = useUse3D();
  return (
    <section className="bg-night relative overflow-hidden pt-28">
      <div className="grid-lines absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="sr-only">Run your hotel. We'll handle the complexity.</h1>
        <div className="relative h-[44vh] min-h-[300px] max-h-[440px] md:h-[60vh] md:max-h-none md:min-h-[480px]">
          {use3D ? (
            <ClientOnly fallback={<div className="flex h-full items-center justify-center text-center"><FlatHeadline /></div>}>
              <Suspense fallback={<div className="flex h-full items-center justify-center text-center"><FlatHeadline /></div>}>
                <div className="absolute inset-0 -mx-6"><Hero3DScene /></div>
              </Suspense>
            </ClientOnly>
          ) : (
            <div className="flex h-full items-center justify-center text-center"><FlatHeadline /></div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="relative mx-auto max-w-2xl pb-20 text-center"
        >
          <p className="text-base text-slate sm:text-lg md:text-xl">
            One connected system for reservations, rooms, billing, restaurant operations and your entire hotel workflow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/book-demo" className="btn-amber">Book a Free Demo <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/features" className="btn-ghost"><PlayCircle className="h-4 w-4" /> Explore Features</Link>
          </div>
          <p className="mt-6 text-xs text-slate">Built for independent, budget and boutique hotels with up to 50 rooms.</p>
        </motion.div>
      </div>
    </section>
  );
}

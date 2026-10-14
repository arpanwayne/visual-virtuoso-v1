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
    { t: "THE COMPLEXITY.", c: "text-gold-light" },
  ];
  return (
    <div aria-hidden className="font-sans text-[2.6rem] font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
      {lines.map((l, i) => (
        <motion.span
          key={l.t}
          className={`block ${l.c}`}
          style={{ textShadow: "0 6px 0 rgb(40 6 14 / .55)" }}
          initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.3 + 1.1 * i, ease: [0.4, 0, 0.2, 1] }}
        >
          {l.t}
        </motion.span>
      ))}
    </div>
  );
}

/** How long the flat headline plays (all three lines in, plus a short hold) before the 3D version takes over. */
const INTRO_MS = 4800;

export function Hero() {
  const use3D = useUse3D();
  const reduce = useReducedMotion();
  // intro → flat headline animates in slowly; then the 3D scene mounts and,
  // once its font is loaded, cross-fades in over the flat text.
  const [introDone, setIntroDone] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    if (!use3D) return;
    // Warm up the 3D bundle and font while the intro plays.
    void import("./Hero3DScene");
    const id = window.setTimeout(() => setIntroDone(true), reduce ? 0 : INTRO_MS);
    return () => window.clearTimeout(id);
  }, [use3D, reduce]);

  const show3D = use3D && introDone;
  const flatVisible = !show3D || !sceneReady;

  return (
    <section className="bg-night relative overflow-hidden pt-28">
      <div className="grid-lines absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="sr-only">Run your hotel. We'll handle the complexity.</h1>
        <div className="relative h-[44vh] min-h-[300px] max-h-[440px] md:h-[60vh] md:max-h-none md:min-h-[480px]">
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center"
            initial={false}
            animate={{ opacity: flatVisible ? 1 : 0, scale: flatVisible ? 1 : 0.94 }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <FlatHeadline />
          </motion.div>
          {show3D && (
            <ClientOnly fallback={null}>
              <Suspense fallback={null}>
                <motion.div
                  className="absolute inset-0 -mx-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: sceneReady ? 1 : 0 }}
                  transition={{ duration: 1.1 }}
                >
                  <Hero3DScene onReady={() => setSceneReady(true)} />
                </motion.div>
              </Suspense>
            </ClientOnly>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 1.2 }}
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

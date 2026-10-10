import { motion } from "framer-motion";
import { useState } from "react";
import poster from "@/assets/reception.jpg";

const SRC = "https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4";

export function VideoSection() {
  const [failed, setFailed] = useState(false);
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-navy" aria-label="Hotel showcase video">
      {failed ? (
        <img src={poster} alt="Hotel reception at dusk" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={SRC}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          aria-hidden
        />
      )}
      <div className="absolute inset-0" style={{ background: "var(--gradient-fade)" }} />
      <div className="relative flex h-full items-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto w-full max-w-7xl px-6 pb-16"
        >
          <p className="eyebrow text-amber">Wayinn in practice</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.02] text-ivory md:text-7xl">EVERY DETAIL. ONE CONNECTED SYSTEM.</h2>
        </motion.div>
      </div>
      <span className="absolute bottom-3 right-4 text-[10px] text-ivory/50">Footage: Pexels (free license)</span>
    </section>
  );
}

import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Iridescent gradient veils */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(124,58,237,0.25),transparent),radial-gradient(60%_40%_at_80%_80%,rgba(59,130,246,0.2),transparent),radial-gradient(40%_30%_at_20%_70%,rgba(16,185,129,0.18),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 md:px-10">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_12px_theme(colors.fuchsia.400)]" />
          <span className="text-xs tracking-widest text-white/80">AVAILABLE FOR FREELANCE</span>
        </div>

        <h1 className="text-center font-[800] leading-tight tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-clip-text bg-[conic-gradient(at_50%_50%,#8A2BE2_0deg,#22D3EE_120deg,#F472B6_240deg,#8A2BE2_360deg)] text-5xl sm:text-6xl md:text-7xl">
          Neon Glass Portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-center text-white/80">
          I craft immersive, futuristic web experiences with a focus on performance, accessibility,
          and delightful interactions.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
          >
            <span className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-emerald-400/20 blur-xl" />
            <Rocket className="size-4 opacity-90" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(34,211,238,0.45)] transition hover:brightness-110"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

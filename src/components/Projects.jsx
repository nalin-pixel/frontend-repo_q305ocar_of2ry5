import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Iridescent UI Kit',
    desc: 'A glassmorphic, neon-accented component library focused on accessibility and motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    title: 'Holographic Visualizer',
    desc: 'Audio-reactive 3D visualizations with procedural shaders and spline scenes.',
    tags: ['Three.js', 'Spline', 'WebAudio'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    title: 'Neon Commerce',
    desc: 'Headless storefront with blazing performance and futuristic UI.',
    tags: ['Next.js', 'Stripe', 'Headless CMS'],
    links: {
      demo: '#',
      code: '#',
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(236,72,153,0.18),transparent),radial-gradient(40%_40%_at_80%_60%,rgba(34,211,238,0.18),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Selected Projects</h2>
        <p className="mt-3 max-w-2xl text-white/70">A mix of client work, experiments, and open-source contributions.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/20 to-emerald-400/20 blur-2xl transition group-hover:scale-110" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.links.demo} className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
                  <ExternalLink className="size-4" /> Live
                </a>
                <a href={p.links.code} className="inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-fuchsia-200">
                  <Github className="size-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

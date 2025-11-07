import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl transition-shadow shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-wider text-white">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_10px_theme(colors.fuchsia.400)]" />
            NORPHIC
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
            <a href="mailto:hello@example.com" className="text-sm text-white/80 hover:text-white">Email</a>
          </div>
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:brightness-110"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

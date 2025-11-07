import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_80%,rgba(59,130,246,0.18),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(16,185,129,0.18),transparent)]" />
      <div className="relative z-10 mx-auto max-w-xl px-6 md:px-10">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s Build Something</h2>
        <p className="mt-3 text-center text-white/70">Tell me about your project. I’ll get back within 24 hours.</p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-cyan-300/50" />
            <input required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-cyan-300/50" />
          </div>
          <input placeholder="Subject" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-cyan-300/50" />
          <textarea required rows={5} placeholder="Your message" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-cyan-300/50" />

          {!sent ? (
            <button type="submit" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(34,211,238,0.45)] transition hover:brightness-110">
              <Mail className="size-4" /> Send Message
            </button>
          ) : (
            <div className="mt-2 inline-flex items-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-emerald-200">
              <CheckCircle2 className="size-4" /> Sent! I’ll reply shortly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

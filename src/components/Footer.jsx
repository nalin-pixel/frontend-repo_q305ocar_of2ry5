import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-white/70">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Norphic Studio — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

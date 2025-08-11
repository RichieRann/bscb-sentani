import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavSolid(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
        navSolid
          ? "bg-white text-amber-800 shadow"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="font-bold text-2xl tracking-widest">KOPI-U</div>
        <div className="space-x-8 hidden md:flex">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}

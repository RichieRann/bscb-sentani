import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white py-24 px-4 flex flex-col items-center animate-fade-in"
    >
      <h2 className="text-4xl font-bold text-amber-900 mb-8 tracking-wider">About Us</h2>
      <p className="max-w-2xl text-lg text-gray-700 text-center mb-8">
        At KOPI-U, we believe every cup tells a story. Our beans are sourced from the finest local farmers, roasted to perfection, and brewed with passion. Step into our cozy space, enjoy the aroma, and let us serve you a cup made just for you.
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="w-64 h-40 bg-amber-100 rounded-xl shadow flex items-center justify-center text-amber-900 font-bold text-xl animate-slide-in">
          ☕ Cozy Atmosphere
        </div>
        <div className="w-64 h-40 bg-amber-100 rounded-xl shadow flex items-center justify-center text-amber-900 font-bold text-xl animate-slide-in">
          🌱 Local Beans
        </div>
        <div className="w-64 h-40 bg-amber-100 rounded-xl shadow flex items-center justify-center text-amber-900 font-bold text-xl animate-slide-in">
          🎶 Live Music
        </div>
      </div>
    </section>
  );
}

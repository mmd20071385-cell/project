import React from "react";

export default function Hero3D({lang}) {
  return (
    <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center">
      <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-600/20 blur-3xl animate-pulseSlow"></div>
      <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border border-cyan-400/30 animate-float"></div>
      <div className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/10"></div>
      <div className="relative glass rounded-3xl p-6 md:p-8 shadow-glow max-w-sm text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gradient mb-3">React • Tailwind • UI</h3>
        <p className="text-slate-300 leading-7 text-sm md:text-base font-vazir">
          {lang === "fa" ? "رابط‌های مدرن، تجربه‌های پویا و طراحی تیره و حرفه‌ای" : "Modern communications, dynamic experiences, and a dark, professional design"}
        </p>
      </div>
    </div>
  );
}

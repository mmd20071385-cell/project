import React from "react";

export default function TimelineItem({ title, desc }) {
  return (
    <div className="relative pl-6 border-l border-white/10">
      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-400"></div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 leading-8">{desc}</p>
    </div>
  );
}

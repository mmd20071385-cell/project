import React from "react";
import { content } from "../data/content";

export default function Footer({ lang }) {
  const t = content[lang];
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950">
      <div className="font-vazirl max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-slate-300">
        <p>© {new Date().getFullYear()} {t.name}</p>
        <p>{lang === "fa" ? "طراحی شده با React و Tailwind" : "Built with React and Tailwind"}</p>
      </div>
    </footer>
  );
}

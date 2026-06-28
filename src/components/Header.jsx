import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { content } from "../data/content";

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const t = content[lang];

  const links =
    lang === "fa"
      ? [
          { to: "/", label: "صفحه اصلی" },
          { to: "/about", label: "درباره من" },
          { to: "/contact", label: "تماس با من" },
        ]
      : [
          { to: "/", label: "Home" },
          { to: "/about", label: "About Me" },
          { to: "/contact", label: "Contact Me" },
        ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl md:text-2xl text-gradient">
          {t.brand}
        </Link>

        <nav className="hidden font-vazir md:flex items-center gap-6">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-cyan-400 ${isActive ? "text-cyan-400" : "text-slate-200"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LanguageToggle lang={lang} setLang={setLang} />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-lg bg-white/10"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

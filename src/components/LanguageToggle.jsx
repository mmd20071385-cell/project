import React from "react";

export default function LanguageToggle({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "fa" ? "en" : "fa")}
      className=" px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
    >
      {lang === "fa" ? "EN" : "فا"}
    </button>
  );
}

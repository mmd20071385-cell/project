import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


export default function App() {
  const [lang, setLang] = useState("fa");

  useEffect(() => {
    document.body.classList.toggle("english", lang === "en");
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
  }, [lang]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header lang={lang} setLang={setLang} />

      <main>
	  <HashRouter>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
		</HashRouter>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

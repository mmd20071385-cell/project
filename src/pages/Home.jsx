import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Hero3D from "../components/Hero3D";
import SkillCard from "../components/SkillCard";
import { content, skills } from "../data/content";

export default function Home({ lang }) {
  const t = content[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <AnimatedSection className="grid lg:grid-cols-2 gap-10 items-center ">
        <div>
          <p className="text-cyan-400 mb-4 font-vazir">
            {lang === "fa" ? "سلام، خوش آمدی" : "Hello, welcome"}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-vazir">
            <span className="text-gradient">{t.heroTitle}</span>
          </h1>
          <p className="text-slate-300 leading-9 font-vazirl text-justify text-lg mb-8">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 ">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold text-center"
            >
              {t.heroBtn2}
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm font-vazirl text-slate-300">
            <div className="glass rounded-2xl p-4">
              <div className="text-white font-bold text-xl">+3</div>
              <p>{lang === "fa" ? "سال تجربه آموزشی و کاری" : "Years of teaching and work experience"}</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-white font-bold text-xl">10+</div>
              <p>{lang === "fa" ? "مهارت و ابزار حرفه‌ای" : "Professional tools and skills"}</p>
            </div>
          </div>
        </div>

        <Hero3D  lang={lang}/>
      </AnimatedSection>

      <AnimatedSection className="mt-20 font-vazirl">
        <h2 className="section-title text-center">{lang === "fa" ? "چرا من؟" : "Why me?"}</h2>
        <p className="section-subtitle text-center">
          {lang === "fa"
            ? "من فقط کد نمی‌زنم؛ تجربه‌ای می‌سازم که هم زیبا باشد، هم سریع، هم کاربردی. از طراحی رابط تا پیاده‌سازی دقیق، سعی می‌کنم نتیجه‌ای تحویل بدهم که حرفه‌ای و قابل اعتماد باشد."
            : "I don’t just code; I build experiences that are beautiful, fast, and practical. From UI design to precise implementation, I focus on professional and reliable results."}
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <h2 className="section-title text-center">{t.skillsTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

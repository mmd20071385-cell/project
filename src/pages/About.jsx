import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import TimelineItem from "../components/TimelineItem";
import { content, experiences } from "../data/content";

export default function About({ lang }) {
  const t = content[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="section-title text-center pb-5 font-vazirl">{t.aboutTitle}</h1>
        <p className="section-subtitle text-center font-vazirl">{t.aboutDesc}</p>
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid lg:grid-cols-2 gap-10 font-vazirl">
        <div className="glass rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">{t.education}</h2>
          <p className="text-slate-300 leading-8">{t.university}</p>
          <div className="mt-8 space-y-4 text-slate-300 leading-8">
            {lang === "fa" ? <p>• علاقه‌مند به طراحی رابط‌های کاربری مدرن</p> : <p>• Interested in designing modern user interfaces</p>}
            {lang === "fa" ? <p>• توانایی کار تیمی و هماهنگی با اعضای پروژه</p> : <p>• Ability to work in a team and coordinate with project members</p>}
            {lang === "fa" ? <p>• دقت بالا در جزئیات و تحویل تمیز</p> : <p>• High attention to detail and clean delivery</p>}
            {lang === "fa" ? <p>• تجربه در پروژه‌های آموزشی، شرکتی و فروشگاهی</p> : <p>• Experience in educational, corporate and retail projects</p>}
          </div>
        </div>

        <div className="glass rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">{t.experienceTitle}</h2>
          <div className="space-y-8">
            {experiences[lang].map((item) => (
              <TimelineItem key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

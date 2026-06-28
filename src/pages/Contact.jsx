import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { content } from "../data/content";

export default function Contact({ lang }) {
  const t = content[lang];
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const [status, setStatus] = useState(null); // success | error | null
  // const [loading, setLoading] = useState(false); // حالت loading اضافه شد

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setStatus(null);

  //   // اعتبارسنجی نام
  //   if (!name.trim()) {
  //     return setStatus(lang === "fa" ? "نام لازم است" : "Name is required");
  //   }

  //   // اعتبارسنجی ایمیل
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!email.trim() || !emailRegex.test(email)) {
  //     return setStatus(lang === "fa" ? "ایمیل معتبر نیست" : "Invalid email");
  //   }

  //   // اعتبارسنجی پیام
  //   if (!message.trim()) {
  //     return setStatus(lang === "fa" ? "پیام خالی است" : "Message is empty");
  //   }

  //   // اگر همه چیز درست بود، شروع حالت loading
  //   setLoading(true);

  //   // شبیه‌سازی ارسال با setTimeout
  //   setTimeout(() => {
  //     setStatus(lang === "fa" ? "پیام ارسال شد" : "Message sent");
  //     setLoading(false); // پایان حالت loading

  //     // پاک کردن فرم
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   }, 2000); // 2 ثانیه تاخیر
  // };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="section-title text-center font-vazirl">{t.contactTitle}</h1>
        <p className="section-subtitle text-center mt-10 font-vazirl">{t.contactDesc}</p>
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-8 font">
        <div className="glass rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">
            {lang === "fa" ? "اطلاعات تماس" : "Contact Info"}
          </h2>
          <div className="space-y-5 text-slate-300">
            <p>
              <span className="text-white font-semibold">{t.phone}: </span>
              09300504548
            </p>
            <p>
              <span className="text-white font-semibold">Email: </span>
              mmd.2007.1385@gmail.com
            </p>
            <p>
              <span className="text-white font-semibold">Location: </span>
              {lang === "fa" ? "ایران شهرستان بروجرد" : "Iran"}
            </p>
          </div>
        </div>

         {/* <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            {lang === "fa" ? "فرم ارتباط" : "Contact Form"}
          </h2>

             <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
              placeholder={lang === "fa" ? "نام" : "Name"}
              disabled={loading} // دکمه غیرفعال می‌شود در حالت loading
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
              placeholder={lang === "fa" ? "ایمیل" : "Email"}
              disabled={loading} // دکمه غیرفعال می‌شود در حالت loading
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none min-h-40"
              placeholder={lang === "fa" ? "پیام شما" : "Your Message"}
              disabled={loading} // دکمه غیرفعال می‌شود در حالت loading
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold w-full"
              disabled={loading} // دکمه غیرفعال می‌شود در حالت loading
            >
              {loading
                ? lang === "fa"
                  ? "در حال ارسال..."
                  : "Sending..."
                : lang === "fa"
                  ? "ارسال پیام"
                  : "Send Message"}
            </button>
          </form>

          {status && (
            <p className={`mt-4 text-sm text-center ${status.includes("ارسال شد") || status.includes("sent") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}
        </div> */}
      </AnimatedSection>
    </div>
  );
}

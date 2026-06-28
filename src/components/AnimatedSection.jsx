import React from "react";

export default function AnimatedSection({ children, className = "" }) {
  return (
    <section className={`animate-fadeUp ${className}`}>
      {children}
    </section>
  );
}

import React from "react";

export default function SkillCard({ skill }) {
  return (
    <div className="glass hover-lift rounded-2xl px-4 py-5 text-center">
      <span className="font-medium text-white">{skill}</span>
    </div>
  );
}

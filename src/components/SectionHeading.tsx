import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 animate-fade-in ${
        isLeft ? "text-left" : "mx-auto text-center"
      } ${className}`}
    >
      {tag && (
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-caramel uppercase block mb-3 sm:mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-forest leading-tight mb-4 sm:mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-graphite/80 leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}

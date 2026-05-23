import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 ease-in-out text-center focus:outline-none focus:ring-2 focus:ring-sage-medium focus:ring-offset-2";

  const variants = {
    primary: "bg-forest text-cream-light hover:bg-forest-hover shadow-sm hover:shadow-md",
    secondary: "bg-terracotta text-cream-light hover:bg-terracotta-hover shadow-sm hover:shadow-md",
    ghost: "text-forest hover:text-forest-hover bg-transparent hover:bg-sage-light/50",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

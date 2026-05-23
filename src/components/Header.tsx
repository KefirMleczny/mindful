"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { siteConfig } from "@/lib/siteConfig";

const navItems = [
  { label: "Start", href: "#hero" },
  { label: "O mindfulness", href: "#o-mindfulness" },
  { label: "Oferta", href: "#oferta" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-light/85 backdrop-blur-md shadow-sm border-b border-sage-medium/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="font-serif text-xl sm:text-2xl font-light text-forest tracking-wide hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-graphite/80 hover:text-forest transition-colors duration-200 text-sm font-light tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="#kontakt" variant="primary" className="py-2.5 px-5 text-sm">
              Zapisz się
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-graphite hover:text-forest focus:outline-none"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream-light border-b border-sage-medium/20 shadow-lg animate-fade-in">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-graphite/90 hover:text-forest transition-colors py-2 text-base font-light border-b border-sage-light/35 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                href="#kontakt"
                variant="primary"
                className="w-full py-3"
                onClick={closeMenu}
              >
                Zapisz się
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

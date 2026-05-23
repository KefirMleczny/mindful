import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-medium border-t border-sage-medium/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="#hero"
              className="font-serif text-2xl font-light text-forest tracking-wide"
            >
              {siteConfig.name}
            </Link>
            <p className="text-graphite/75 font-light leading-relaxed max-w-sm text-sm sm:text-base">
              Praktyka uważności, kursy mindfulness i sesje indywidualne dla osób, które chcą żyć
              spokojniej i bliżej siebie.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-medium text-forest tracking-wide">
              Nawigacja
            </h4>
            <ul className="space-y-2 flex flex-col">
              <li>
                <a
                  href="#hero"
                  className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
                >
                  Start
                </a>
              </li>
              <li>
                <a
                  href="#o-mindfulness"
                  className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
                >
                  O mindfulness
                </a>
              </li>
              <li>
                <a
                  href="#oferta"
                  className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
                >
                  Oferta
                </a>
              </li>
              <li>
                <a
                  href="#o-mnie"
                  className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
                >
                  O mnie
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-medium text-forest tracking-wide">
              Social Media
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
              >
                Instagram
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite/70 hover:text-forest transition-colors font-light text-sm"
              >
                Facebook
              </a>
            </div>
            <div className="pt-2 text-xs text-graphite/60 font-light">
              <p>Email: {siteConfig.email}</p>
              <p>Tel: {siteConfig.phone}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sage-medium/20 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-graphite/50 font-light space-y-4 sm:space-y-0">
          <p>© {currentYear} {siteConfig.name}. Wszystkie prawa zastrzeżone.</p>
          <div className="flex space-x-6">
            <Link href="#polityka-prywatnosci" className="hover:text-forest transition-colors">
              Polityka prywatności
            </Link>
            <Link href="#regulamin" className="hover:text-forest transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Check } from "lucide-react";

export default function Hero() {
  const highlights = [
    "Kursy online i stacjonarne",
    "Praktyka dla początkujących",
    "Spokojne, bezpieczne tempo",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 sm:pb-24 overflow-hidden bg-cream-light"
    >
      {/* Decorative organic shapes in background */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sage-light/40 blur-3xl rounded-full pointer-events-none organic-blob-1" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-olive-light/30 blur-2xl rounded-full pointer-events-none organic-blob-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content - column 7 on desktop */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-caramel uppercase block">
                Mindfulness • oddech • obecność
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-forest leading-tight tracking-tight text-balance">
                Naucz się zatrzymywać, oddychać i wracać do siebie
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-graphite/85 font-light leading-relaxed max-w-2xl text-balance">
                Kursy mindfulness, praktyka uważności i sesje indywidualne dla osób, które chcą żyć
                spokojniej, świadomiej i z większym kontaktem ze sobą.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button href="#oferta" variant="primary" className="py-3 px-8 text-base">
                Zapisz się na kurs
              </Button>
              <Button href="#o-mnie" variant="ghost" className="py-3 px-8 text-base text-forest">
                Poznaj mnie
              </Button>
            </div>

            {/* Highlights */}
            <div className="border-t border-sage-medium/20 pt-6 mt-4">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-graphite/80 font-light">
                    <Check className="h-4 w-4 text-sage-dark flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image content - column 5 on desktop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in [animation-delay:200ms]">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-xl border-4 border-cream-medium/40 bg-sage-light">
              <Image
                src="/images/hero-placeholder.png"
                alt="Spokojna chwila uważności w otoczeniu natury"
                fill
                priority
                className="object-cover"
                sizes="(max-w-7xl) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

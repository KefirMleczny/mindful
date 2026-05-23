import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

export default function AboutMindfulness() {
  const points = [
    "Praca z oddechem jako kotwicą w obecności",
    "Obserwacja ciała i uwalnianie skumulowanego napięcia",
    "Redukcja napięcia i wyciszenie układu nerwowego",
    "Łagodna regulacja emocji i nauka bycia z nimi",
    "Większa świadomość codziennych, automatycznych reakcji",
    "Budowanie stabilnego, trwałego wewnętrznego spokoju",
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Co to naprawdę oznacza?"
          title="Mindfulness to praktyka powrotu do tego, co jest teraz"
          description="Mindfulness, czyli uważność, to trening świadomego zauważania tego, co dzieje się w ciele, emocjach i myślach. Nie chodzi o to, aby przestać myśleć. Chodzi o to, aby zobaczyć, co się w nas pojawia, zanim automatycznie zareagujemy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12 sm:mt-16">
          {/* List - 7 cols on desktop */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-light text-forest mb-4">
              Główne filary naszej praktyki:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-base text-graphite/80 font-light"
                >
                  <CheckCircle2 className="h-5 w-5 text-sage-dark flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote - 5 cols on desktop with background image */}
          <div className="lg:col-span-5 relative min-h-[320px] rounded-3xl overflow-hidden shadow-lg border border-sage-medium/10 group flex flex-col justify-center items-center text-center p-8 sm:p-10 bg-sage-light">
            <Image
              src="/images/zen-stones.png"
              alt="Zrównoważona kompozycja kamieni zen w rzece"
              fill
              sizes="(max-w-7xl) 40vw, 450px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-forest/45 backdrop-blur-[1px] transition-colors duration-300 group-hover:bg-forest/50" />
            
            {/* Quote content */}
            <div className="relative z-10 text-cream-light px-4">
              <span className="absolute -top-6 -left-2 text-7xl font-serif text-cream-light/20 pointer-events-none select-none">
                „
              </span>
              <p className="font-serif text-xl sm:text-2xl font-light italic leading-relaxed text-balance">
                Nie chodzi o to, żeby uciec od życia. Chodzi o to, żeby być w nim bardziej obecnym.
              </p>
              <span className="block mt-4 text-xs font-semibold tracking-widest text-caramel uppercase">
                Jon Kabat-Zinn
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

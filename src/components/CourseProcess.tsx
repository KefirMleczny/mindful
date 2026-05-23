import React from "react";
import SectionHeading from "./SectionHeading";
import { Info } from "lucide-react";

export default function CourseProcess() {
  const steps = [
    {
      number: "01",
      title: "Spotkanie wprowadzające",
      desc: "Poznajemy główne założenia kursu, rozmawiamy o Twoich potrzebach oraz ustalamy zasady i sposób pracy w bezpiecznej przestrzeni.",
    },
    {
      number: "02",
      title: "Cotygodniowe spotkania",
      desc: "Regularne, wspólne sesje trwające około 2 godzin. Każde spotkanie łączy wiedzę teoretyczną, uważną rozmowę i wspólną praktykę medytacji.",
    },
    {
      number: "03",
      title: "Praktyka między spotkaniami",
      desc: "Otrzymujesz ode mnie dedykowane materiały oraz autorskie nagrania audio. Pomagają one rozwijać uważność w domowym zaciszu w wolnej chwili.",
    },
    {
      number: "04",
      title: "Integracja w codzienności",
      desc: "Uczysz się przenosić wypracowany spokój do codziennych sytuacji: pracy, trudnych relacji, odpoczynku czy nagłych momentów stresu.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-sage-light/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Krok po kroku"
          title="Jak wygląda wspólna praktyka?"
          description="Niezależnie od tego, czy wybierzesz kurs grupowy, czy sesje indywidualne, nasz proces opiera się na sprawdzonym, łagodnym schemacie."
        />

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 relative">
          
          {/* Vertical line through timeline (desktop only) */}
          <div className="absolute left-[33px] top-4 bottom-4 w-px bg-sage-medium/35 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start relative group md:space-x-8"
              >
                {/* Timeline node - circular number */}
                <div className="flex-shrink-0 flex items-center justify-center w-[66px] h-[66px] rounded-full border-2 border-sage-medium/40 bg-cream-light font-serif text-xl text-forest group-hover:border-forest group-hover:bg-sage-light transition-all duration-300 z-10 mb-4 md:mb-0">
                  {step.number}
                </div>

                {/* Content card */}
                <div className="flex-grow bg-cream-light p-6 sm:p-8 rounded-2xl border border-sage-medium/10 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-forest mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-graphite/75 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Note */}
        <div className="max-w-xl mx-auto mt-16 flex items-center space-x-3 bg-cream-medium/40 border border-sage-medium/20 rounded-2xl p-4 text-xs sm:text-sm text-graphite/70 font-light justify-center">
          <Info className="h-5 w-5 text-sage-dark flex-shrink-0" />
          <span>Kurs może odbywać się online lub stacjonarnie, w zależności od aktualnej edycji.</span>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import SectionHeading from "./SectionHeading";
import { Plus } from "lucide-react";

export default function ForWhomSection() {
  const checkPoints = [
    "czujesz chroniczne zmęczenie i przebodźcowanie",
    "często funkcjonujesz w ciągłym napięciu i stresie",
    "trudno Ci odpoczywać bez poczucia winy lub niepokoju",
    "masz poczucie natłoku myśli i braku przestrzeni w głowie",
    "chcesz lepiej i spokojniej rozumieć swoje emocje",
    "szukasz praktyki konkretnej, spokojnej i osadzonej w codzienności",
    "chcesz nauczyć się uważności bez presji i duchowego zadęcia",
    "potrzebujesz cieplejszego, łagodniejszego kontaktu ze sobą",
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Dla kogo?"
          title="To miejsce jest dla Ciebie, jeśli..."
          align="left"
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* List points - 7 cols */}
          <div className="lg:col-span-7 space-y-4">
            <ul className="space-y-4">
              {checkPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-base sm:text-lg text-graphite/85 font-light"
                >
                  <Plus className="h-5 w-5 text-caramel flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reassuring note - 5 cols */}
          <div className="lg:col-span-5 lg:pl-6">
            <div className="bg-sage-light/30 border border-sage-medium/30 p-8 sm:p-10 rounded-3xl relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-caramel text-cream-light flex items-center justify-center font-serif text-lg">
                ✿
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-light text-forest mb-4">
                Możesz zacząć dokładnie w tym punkcie, w którym jesteś
              </h4>
              <p className="text-sm sm:text-base text-graphite/80 font-light leading-relaxed space-y-4">
                Nie musisz umieć medytować. Nie musisz siedzieć godzinami w ciszy. Nasze spotkania to przestrzeń wolna od oceniania, wymagań i presji osiągnięć. Uczymy się uważności powoli, krok po kroku.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

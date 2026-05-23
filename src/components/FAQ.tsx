import React from "react";
import SectionHeading from "./SectionHeading";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Czy muszę mieć doświadczenie w medytacji?",
      a: "Nie. Wszystkie praktyki i kursy są prowadzone od podstaw tak, aby mogły rozpocząć również osoby, które nigdy wcześniej nie medytowały. Uczymy się stopniowo, w bezpiecznym i łagodnym tempie.",
    },
    {
      q: "Czy mindfulness jest formą terapii?",
      a: "Mindfulness nie zastępuje psychoterapii ani leczenia psychiatrycznego. Jest to jednak wysoce skuteczna, poparta badaniami naukowymi metoda redukcji stresu, która wspiera lepszy kontakt ze sobą, regulację emocjonalną i zwiększa świadomość codziennych reakcji.",
    },
    {
      q: "Ile trwa standardowy kurs?",
      a: "Standardowy, certyfikowany kurs uważności (np. MBSR) trwa dokładnie 8 tygodni. Obejmuje jedno spotkanie wprowadzające, 8 cotygodniowych sesji grupowych po 2-2.5 godziny oraz jeden pełny dzień uważności (tzw. Dzień Ciszy).",
    },
    {
      q: "Czy spotkania odbywają się online?",
      a: "Tak, część edycji kursów oraz wszystkie sesje indywidualne mogą odbywać się online za pośrednictwem platformy Zoom. Organizowane są również edycje w pełni stacjonarne (miejsce spotkań podawane jest przy zapisach na konkretną edycję).",
    },
    {
      q: "Czy mogę zacząć od sesji indywidualnej?",
      a: "Tak. Sesje indywidualne 1:1 są doskonałym wyborem, jeśli potrzebujesz w pełni spersonalizowanego podejścia, dopasowanego tempa i chcesz pracować nad konkretnymi, osobistymi wyzwaniami w zacisznej atmosferze.",
    },
    {
      q: "Ile czasu dziennie muszę przeznaczyć na praktykę?",
      a: "Na początku wystarczy dosłownie kilka minut dziennie. Otrzymasz ode mnie nagrania trwające od 5 do 20 minut. Najważniejsza jest regularność i łagodne intencje, a nie perfekcja czy długie siedzenie w ciszy.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Masz pytania?"
          title="Często zadawane pytania"
          description="Kilka odpowiedzi na najczęstsze wątpliwości związane z rozpoczęciem praktyki uważności i uczestnictwem w kursach."
        />

        <div className="mt-12 sm:mt-16 space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              name="faq-accordion"
              className="group bg-cream-medium/40 border border-sage-medium/15 rounded-2xl overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none focus:outline-none focus:bg-sage-light/20">
                <span className="font-serif text-base sm:text-lg md:text-xl text-forest font-light pr-4">
                  {faq.q}
                </span>
                <ChevronDown className="h-5 w-5 text-sage-dark flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-graphite/75 font-light leading-relaxed border-t border-sage-medium/5 animate-fade-in">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

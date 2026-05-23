import React from "react";
import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Po kursie pierwszy raz od dawna poczułam, że nie muszę cały czas działać. Nauczyłam się zatrzymywać i zauważać swoje potrzeby.",
      author: "Anna",
      context: "uczestniczka kursu MBSR",
    },
    {
      text: "Najważniejsze było dla mnie to, że nikt niczego nie wymuszał. Praktyka była spokojna, konkretna i bardzo wspierająca.",
      author: "Marta",
      context: "sesje indywidualne 1:1",
    },
    {
      text: "Mindfulness przestał być dla mnie abstrakcją. Zobaczyłem, że można praktykować uważność w zwykłym dniu, nawet między pracą a domem.",
      author: "Tomasz",
      context: "uczestnik kursu mindfulness",
    },
  ];

  return (
    <section id="opinie" className="py-20 sm:py-28 bg-cream-medium/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Doświadczenia uczestników"
          title="Co mówią osoby po wspólnej praktyce?"
          description="Opinie osób, które podarowały sobie czas na zatrzymanie się i naukę uważności w moich przestrzeniach."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:mt-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-cream-light p-8 rounded-3xl border border-sage-medium/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="h-8 w-8 text-sage-medium/55 stroke-[1.5] mb-6" />
                <p className="text-base text-graphite/85 font-light leading-relaxed mb-6 italic">
                  „{rev.text}”
                </p>
              </div>

              <div className="border-t border-sage-medium/10 pt-4 mt-auto">
                <span className="block font-serif text-lg text-forest font-medium">
                  {rev.author}
                </span>
                <span className="block text-xs text-caramel uppercase tracking-widest mt-1 font-light">
                  {rev.context}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

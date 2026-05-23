import React from "react";
import SectionHeading from "./SectionHeading";
import { Sparkles, Compass, Shield } from "lucide-react";

export default function ValueSection() {
  const values = [
    {
      icon: Shield,
      title: "Mniej stresu",
      desc: "Nauczysz się zauważać napięcie, zanim całkowicie przejmie kontrolę.",
    },
    {
      icon: Compass,
      title: "Więcej obecności",
      desc: "Praktyka pomaga wrócić do chwili obecnej, zamiast ciągle żyć w przyszłości lub przeszłości.",
    },
    {
      icon: Sparkles,
      title: "Łagodniejszy kontakt ze sobą",
      desc: "Bez presji, bez oceniania, bez potrzeby robienia wszystkiego idealnie.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-sage-light/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Korzyści z uważności"
          title="Uważność nie dodaje kolejnego obowiązku. Pomaga wrócić do prostoty."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:mt-16">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-cream-light/60 backdrop-blur-sm p-8 rounded-2xl border border-sage-medium/20 shadow-sm flex flex-col items-center text-center hover:shadow-md hover:border-sage-medium/40 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-cream-medium/80 text-caramel mb-6">
                  <Icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-forest mb-4">
                  {val.title}
                </h3>
                <p className="text-sm sm:text-base text-graphite/75 font-light leading-relaxed max-w-xs">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

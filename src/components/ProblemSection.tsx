import React from "react";
import SectionHeading from "./SectionHeading";
import { Activity, Brain, BatteryWarning, Heart } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Activity,
      title: "Ciągłe napięcie",
      desc: "Trudno Ci odpuścić, nawet kiedy dzień się kończy.",
    },
    {
      icon: Brain,
      title: "Nadmiar myśli",
      desc: "Masz wrażenie, że głowa cały czas analizuje i planuje.",
    },
    {
      icon: BatteryWarning,
      title: "Brak odpoczynku",
      desc: "Odpoczywasz, ale nadal czujesz zmęczenie.",
    },
    {
      icon: Heart,
      title: "Trudne emocje",
      desc: "Chcesz lepiej rozumieć swoje reakcje i potrzeby.",
    },
  ];

  return (
    <section id="o-mindfulness" className="py-20 sm:py-28 bg-cream-medium/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Sygnały z ciała i umysłu"
          title="Kiedy codzienność zaczyna być za głośna"
          description="Czasem ciało jest zmęczone, głowa pełna myśli, a odpoczynek nie przynosi prawdziwej ulgi. Mindfulness pomaga zauważyć ten moment wcześniej i wrócić do siebie łagodniej."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-cream-light p-8 rounded-2xl border border-sage-medium/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start"
              >
                <div className="p-3 rounded-xl bg-sage-light/60 text-sage-dark mb-6 group-hover:bg-sage-dark group-hover:text-cream-light transition-colors duration-300">
                  <Icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-light text-forest mb-3">
                  {prob.title}
                </h3>
                <p className="text-sm sm:text-base text-graphite/75 font-light leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

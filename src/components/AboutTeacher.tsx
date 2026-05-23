import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Check } from "lucide-react";

export default function AboutTeacher() {
  const qualifications = [
    "Certyfikowana nauczycielka mindfulness (MBSR / MBCT)",
    "Wieloletnie doświadczenie w pracy z grupami stacjonarnymi oraz online",
    "Praktyka indywidualna 1:1 dostosowana do specyficznych potrzeb",
    "Ukończone liczne szkolenia z zakresu redukcji stresu oraz pracy z ciałem",
    "Podejście oparte na łagodności, pełnej akceptacji i empatii",
  ];

  return (
    <section id="o-mnie" className="py-20 sm:py-28 bg-cream-light relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-[-10%] w-[450px] h-[450px] bg-sage-light/35 blur-3xl rounded-full pointer-events-none organic-blob-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image - 5 cols on desktop */}
          <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden shadow-lg border-4 border-cream-medium bg-sage-light">
              <Image
                src="/images/teacher-placeholder.png"
                alt="Anna - certyfikowana nauczycielka mindfulness"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-w-7xl) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text - 7 cols on desktop */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-caramel uppercase block mb-3">
                O mnie
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest leading-tight mb-6">
                Cześć, jestem Anna
              </h2>
              <p className="text-base sm:text-lg text-graphite/85 font-light leading-relaxed mb-6">
                Prowadzę osoby przez praktykę uważności w sposób spokojny, bezpieczny i bardzo ludzki. Wierzę, że mindfulness nie jest kolejnym zadaniem do wykonania, ale sposobem na łagodniejszy kontakt ze sobą, ciałem i codziennością.
              </p>
            </div>

            <ul className="space-y-3.5">
              {qualifications.map((qual, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-graphite/80 font-light">
                  <Check className="h-5 w-5 text-sage-dark flex-shrink-0 mt-0.5" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-sage-medium/20 pt-6 mt-4">
              <p className="font-serif text-lg sm:text-xl italic text-forest font-light leading-relaxed">
                „Pracuję bez presji, bez oceniania i bez obietnic szybkiej przemiany. Zamiast tego tworzę przestrzeń do praktyki, która może realnie wspierać codzienne życie.”
              </p>
              <span className="block mt-3 text-sm text-caramel tracking-wide font-medium">
                — Anna, nauczycielka uważności
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

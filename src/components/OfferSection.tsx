import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { Check } from "lucide-react";

export default function OfferSection() {
  const offers = [
    {
      title: "Kurs mindfulness / MBSR",
      desc: "8-tygodniowy certyfikowany proces nauki uważności dla osób, które chcą zredukować stres, poprawić sen i odzyskać harmonię w codzienności.",
      image: "/images/mbsr-course.png",
      points: [
        "8 cotygodniowych spotkań po 2-2.5h",
        "Dzień Uważności w ciszy",
        "Autorskie nagrania medytacji prowadzonej",
        "Materiały drukowane do pracy własnej",
        "Certyfikat ukończenia kursu MBSR",
      ],
      ctaText: "Sprawdź szczegóły",
      ctaHref: "#kontakt",
      featured: true,
      tag: "Najpopularniejszy",
    },
    {
      title: "Sesje indywidualne 1:1",
      desc: "Indywidualny proces dostosowany do Twoich potrzeb, tempa i wyzwań życiowych. Praktyczna pomoc w radzeniu sobie z lękiem i stresem.",
      image: "/images/individual-session.png",
      points: [
        "Indywidualnie dobrane techniki",
        "Praca z ciałem, oddechem i umysłem",
        "Elastyczne terminy spotkań",
        "Dostępne online lub w gabinecie",
      ],
      ctaText: "Umów sesję",
      ctaHref: "#kontakt",
      featured: false,
    },
    {
      title: "Warsztaty i wyjazdy",
      desc: "Kameralne spotkania w formule jednodniowej lub weekendowe wyjazdy w naturę. Głęboki odpoczynek, wspólna praktyka i czas offline.",
      image: "/images/workshop-session.png",
      points: [
        "Malownicze lokalizacje blisko natury",
        "Intensywne warsztaty praktyczne",
        "Zdrowe, wegetariańskie wyżywienie",
        "Praca w gronie osób o podobnych intencjach",
      ],
      ctaText: "Zobacz terminy",
      ctaHref: "#kontakt",
      featured: false,
    },
  ];

  return (
    <section id="oferta" className="py-20 sm:py-28 bg-cream-medium/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Formy praktyki"
          title="Wybierz formę praktyki dla siebie"
          description="Możesz rozpocząć od certyfikowanego kursu, indywidualnego spotkania dopasowanego do Twoich potrzeb lub od darmowej praktyki we własnym domu."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12 sm:mt-16">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 relative ${
                offer.featured
                  ? "bg-cream-light border-2 border-sage-dark shadow-md md:-translate-y-3 z-10"
                  : "bg-cream-light/60 border border-sage-medium/20 shadow-sm hover:shadow-md"
              }`}
            >
              {offer.featured && offer.tag && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-sage-dark text-cream-light text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full z-20">
                  {offer.tag}
                </span>
              )}

              {/* Offer Image */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-sage-light shadow-inner">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 350px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mb-6 flex-grow">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-forest mb-4">
                  {offer.title}
                </h3>
                <p className="text-sm sm:text-base text-graphite/75 font-light leading-relaxed mb-6">
                  {offer.desc}
                </p>

                <hr className="border-sage-medium/20 my-6" />

                <ul className="space-y-3.5">
                  {offer.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-3 text-sm text-graphite/80 font-light">
                      <Check className="h-4.5 w-4.5 text-sage-dark flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Button
                  href={offer.ctaHref}
                  variant={offer.featured ? "primary" : "ghost"}
                  className="w-full text-sm sm:text-base py-3"
                >
                  {offer.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

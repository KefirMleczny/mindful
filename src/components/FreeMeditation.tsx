"use client";

import React, { useState } from "react";
import { Headphones, Download, CheckCircle } from "lucide-react";
import Button from "./Button";

export default function FreeMeditation() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Wprowadź swój adres e-mail");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Wprowadź poprawny adres e-mail");
      return;
    }

    setError("");
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section id="medytacja-pobierz" className="py-20 sm:py-28 bg-sage-light/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-cream-light p-8 sm:p-12 md:p-16 rounded-3xl border border-sage-medium/20 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Audio Icon & Details - 5 cols */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center text-sage-dark shadow-inner">
                <Headphones className="h-8 w-8 stroke-[1.5] animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest text-caramel uppercase block mb-1">
                  Darmowy materiał
                </span>
                <h3 className="font-serif text-2xl font-light text-forest leading-snug">
                  Medytacja Oddechu (MP3)
                </h3>
                <p className="text-xs sm:text-sm text-graphite/70 font-light mt-2">
                  Czas trwania: 8 minut • Jakość HD • Prowadzi Anna
                </p>
              </div>
            </div>

            {/* Form/Success area - 7 cols */}
            <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-sage-medium/20 pt-8 md:pt-0 md:pl-8">
              {!isSubmitted ? (
                <div className="space-y-4">
                  <h4 className="font-serif text-xl font-light text-forest">
                    Zacznij od kilku minut oddechu
                  </h4>
                  <p className="text-sm sm:text-base text-graphite/75 font-light leading-relaxed">
                    Pobierz krótką praktykę audio i sprawdź, jak może wyglądać pierwszy krok w stronę większej obecności.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                    <div className="relative">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Adres e-mail
                      </label>
                      <input
                        type="email"
                        id="newsletter-email"
                        placeholder="Twój adres e-mail"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        className="w-full px-4 py-3 bg-cream-medium/40 border border-sage-medium/35 rounded-full text-graphite placeholder-graphite/50 text-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all"
                      />
                      {error && (
                        <span className="text-xs text-red-600 pl-4 mt-1 block">
                          {error}
                        </span>
                      )}
                    </div>

                    <Button type="submit" variant="primary" className="w-full py-3">
                      <Download className="h-4.5 w-4.5 mr-2" />
                      Pobierz medytację
                    </Button>

                    <p className="text-[10px] sm:text-xs text-graphite/60 font-light leading-relaxed pl-2">
                      Zapisując się, wyrażasz zgodę na otrzymywanie informacji o nowych kursach i materiałach edukacyjnych. Możesz wypisać się w każdej chwili. Dane są chronione zgodnie z RODO.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-sage-light text-sage-dark flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-light text-forest">
                    Dziękuję za zapis!
                  </h4>
                  <p className="text-sm sm:text-base text-graphite/80 font-light leading-relaxed max-w-sm mx-auto">
                    Link do bezpłatnego nagrania medytacji (plik MP3) oraz wskazówki do praktyki zostały wysłane na Twój adres e-mail.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

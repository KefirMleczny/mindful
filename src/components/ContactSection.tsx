"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { siteConfig } from "@/lib/siteConfig";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

// Custom SVG Instagram Icon to bypass Lucide version differences
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "kurs",
    message: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Imię jest wymagane";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Wprowadź poprawny adres e-mail";
      }
    }

    if (!formData.message.trim()) newErrors.message = "Wiadomość jest wymagana";
    if (!formData.consent) newErrors.consent = "Zgoda RODO jest wymagana";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "kurs",
        message: "",
        consent: false,
      });
      setErrors({});
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-cream-medium/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Napisz do mnie"
          title="Zrób pierwszy spokojny krok"
          description="Zostaw kontakt, a odezwę się z informacją o najbliższym kursie, sesjach indywidualnych lub darmowej praktyce."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 sm:mt-16">
          
          {/* Contact Details - 5 cols */}
          <div className="lg:col-span-5 space-y-8 lg:pr-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-forest">
                Przestrzeń spotkania
              </h3>
              <p className="text-sm sm:text-base text-graphite/75 font-light leading-relaxed">
                Niezależnie od tego, czy masz pytania o program kursu MBSR, chcesz umówić się na sesję próbną, czy po prostu podzielić się swoimi wątpliwościami — napisz. Odpowiem najszybciej, jak to możliwe, zazwyczaj w ciągu 24-48 godzin.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-sage-light text-sage-dark flex items-center justify-center">
                  <Mail className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-xs text-caramel uppercase tracking-widest font-medium">
                    Napisz bezpośrednio
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base text-graphite hover:text-forest transition-colors font-light"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-sage-light text-sage-dark flex items-center justify-center">
                  <Phone className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-xs text-caramel uppercase tracking-widest font-medium">
                    Zadzwoń do mnie
                  </span>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="text-base text-graphite hover:text-forest transition-colors font-light"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-sage-light text-sage-dark flex items-center justify-center">
                  <InstagramIcon className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-xs text-caramel uppercase tracking-widest font-medium">
                    Obserwuj na Instagramie
                  </span>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-graphite hover:text-forest transition-colors font-light"
                  >
                    @mindfulspace
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-sage-light text-sage-dark flex items-center justify-center">
                  <MapPin className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-xs text-caramel uppercase tracking-widest font-medium">
                    Lokalizacja spotkań
                  </span>
                  <span className="text-base text-graphite font-light">
                    {siteConfig.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - 7 cols */}
          <div className="lg:col-span-7 bg-cream-light p-8 sm:p-10 rounded-3xl border border-sage-medium/15 shadow-md">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs sm:text-sm font-light text-graphite/80 block">
                      Imię
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-cream-medium/40 border ${
                        errors.name ? "border-red-500" : "border-sage-medium/35"
                      } rounded-xl text-graphite placeholder-graphite/40 text-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all`}
                      placeholder="Twoje imię"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 flex items-center mt-1">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs sm:text-sm font-light text-graphite/80 block">
                      Adres e-mail
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-cream-medium/40 border ${
                        errors.email ? "border-red-500" : "border-sage-medium/35"
                      } rounded-xl text-graphite placeholder-graphite/40 text-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all`}
                      placeholder="Twój email"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 flex items-center mt-1">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="form-phone" className="text-xs sm:text-sm font-light text-graphite/80 block">
                      Telefon <span className="text-graphite/50 text-xs">(opcjonalnie)</span>
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cream-medium/40 border border-sage-medium/35 rounded-xl text-graphite placeholder-graphite/40 text-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all"
                      placeholder="+48 000 000 000"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="form-subject" className="text-xs sm:text-sm font-light text-graphite/80 block">
                      Temat kontaktu
                    </label>
                    <select
                      id="form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cream-medium/40 border border-sage-medium/35 rounded-xl text-graphite text-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all"
                    >
                      <option value="kurs">Kurs mindfulness / MBSR</option>
                      <option value="sesja">Sesja indywidualna 1:1</option>
                      <option value="medytacja">Darmowa medytacja</option>
                      <option value="inne">Inne pytanie</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs sm:text-sm font-light text-graphite/80 block">
                    Wiadomość
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-cream-medium/40 border ${
                      errors.message ? "border-red-500" : "border-sage-medium/35"
                    } rounded-xl text-graphite placeholder-graphite/40 text-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all resize-none`}
                    placeholder="W czym mogę Ci pomóc?"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 flex items-center mt-1">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* GDPR Consent */}
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="form-consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="h-4.5 w-4.5 rounded border-sage-medium/45 text-forest focus:ring-forest mt-1 flex-shrink-0 cursor-pointer"
                    />
                    <label htmlFor="form-consent" className="text-xs text-graphite/70 font-light leading-relaxed cursor-pointer select-none">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie kontaktowe. Dane będą chronione zgodnie z RODO i naszą Polityką prywatności. *
                    </label>
                  </div>
                  {errors.consent && (
                    <span className="text-xs text-red-500 flex items-center mt-1 pl-7">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.consent}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full py-3.5 text-base">
                    Wyślij wiadomość
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-sage-light text-sage-dark flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-light text-forest">
                  Dziękuję za wiadomość!
                </h4>
                <p className="text-base text-graphite/80 font-light leading-relaxed max-w-sm mx-auto">
                  Dziękuję za kontakt. Odpowiem najszybciej, jak to możliwe.
                </p>
                <div className="pt-6">
                  <Button onClick={() => setIsSubmitted(false)} variant="ghost" className="text-sm px-6 py-2">
                    Wyślij kolejną wiadomość
                  </Button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

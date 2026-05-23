import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ValueSection from "@/components/ValueSection";
import AboutMindfulness from "@/components/AboutMindfulness";
import OfferSection from "@/components/OfferSection";
import ForWhomSection from "@/components/ForWhomSection";
import CourseProcess from "@/components/CourseProcess";
import AboutTeacher from "@/components/AboutTeacher";
import Testimonials from "@/components/Testimonials";
import FreeMeditation from "@/components/FreeMeditation";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <ValueSection />
        <AboutMindfulness />
        <OfferSection />
        <ForWhomSection />
        <CourseProcess />
        <AboutTeacher />
        <Testimonials />
        <FreeMeditation />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

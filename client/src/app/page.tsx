import ContactForm from "@/components/ContactForm";
import EntryDescription from "@/components/EntryDescription";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InBetween from "@/components/In-between";
import Offers from "@/components/Offers";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <Services />
      <EntryDescription />
      <InBetween text="radimo 24/7 za vašu rashladu" />
      <Offers />
      <WhatWeDo />
      <Reviews />
      <ContactForm />
      <InBetween text="Fiksna cena, bez skrivenih troškova." />
      <Footer />
    </div>
  );
}

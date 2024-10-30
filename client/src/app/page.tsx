import EntryDescription from "@/components/EntryDescription";
import Hero from "@/components/Hero";
import InBetween from "@/components/In-between";
import Offers from "@/components/Offers";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <EntryDescription />
      <InBetween text="Hladimo leti, grejemo zimi" />
      <Offers />
      <WhatWeDo />
      <Reviews />
    </>
  );
}

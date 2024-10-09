import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EntryDescription from "@/components/EntryDescription/EntryDescription";
import Offers from "@/components/Offers";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <EntryDescription />
      <WhatWeDo></WhatWeDo>
      <Offers />
    </div>
  );
}

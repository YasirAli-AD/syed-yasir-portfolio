import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";
import Graveyard from "@/components/Graveyard/Graveyard";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Graveyard />
      <Contact />
    </main>
  );
}

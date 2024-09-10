import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Feedback />
      <Footer />
    </main>
  );
}

import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import AboutDoctor from "../components/AboutDoctor";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutDoctor />
      <ServicesGrid />
      <Process />
      <Testimonials />
      
    </>
  );
}
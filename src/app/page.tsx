// components
import { Navbar, Footer } from "@/components";
import { SpeedInsights } from "@vercel/speed-insights/next"

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Blogs from "./blogs";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Experience from "./experience";
import Education from "./education";
import ResearchExperience from "./researchexperience";
import Projects from "./projects";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <Skills />
      <Education />
      <Experience />
      <ResearchExperience />
      <Projects />
      {/* <Blogs /> */}
      <Resume />
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      <Footer />
      <SpeedInsights/>
    </>
  );
}

// components
import { Navbar, Footer } from "@/components";
import { getAllPosts } from '@/lib/blog';

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

const blogPosts = getAllPosts();

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
      <Blogs blogs={blogPosts} />
      <Resume />
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}

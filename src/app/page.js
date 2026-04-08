import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import GitHubSection from "@/components/GitHubSection";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Portfolio = () => (
  <main className="min-h-screen relative bg-slate-50/30">
    <Header />
    <Hero />
    <FeaturedProject />
    <Projects />
    <CurrentlyWorking />
    <GitHubSection />
    <About />
    <Education />
    <Skills />
    <Experience />
    <Footer />
  </main>
);

export default Portfolio;

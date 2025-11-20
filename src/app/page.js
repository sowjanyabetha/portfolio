import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Projects from "../app/components/Projects";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#f1dff1]">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
  );
}

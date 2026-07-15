import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Clinical from "./sections/Clinical";
import Engineering from "./sections/Engineering";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-raised focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Clinical />
        <Engineering />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

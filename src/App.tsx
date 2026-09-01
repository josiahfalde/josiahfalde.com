import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Medicine from "./pages/Medicine";
import Engineering from "./pages/Engineering";
import Projects from "./pages/Projects";
import Websites from "./pages/Websites";
import Hobbies from "./pages/Hobbies";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-raised focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Seo />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* The old /sites directory now lives on Projects. */}
          <Route path="/sites" element={<Navigate to="/projects" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

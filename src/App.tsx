import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Medicine from "./pages/Medicine";
import Engineering from "./pages/Engineering";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Places from "./pages/Places";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ToBusinessSite() {
  useEffect(() => window.location.replace("https://josiahfaldeweb.com/"), []);
  return null;
}

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
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/places" element={<Places />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* The old /sites directory now lives on Projects. */}
          <Route path="/sites" element={<Navigate to="/projects" replace />} />
          {/* The web design business moved to its own site (2026-10-26). */}
          <Route path="/websites" element={<ToBusinessSite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

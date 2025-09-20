import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import ReactLenis from "lenis/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage";
import LinksPage from "./pages/LinksPage";
import InterestsPage from "./pages/InterestsPage";
import Resume from "./pages/ResumePage";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsListPage from "./pages/ProjectsListPage";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const location = useLocation();

  const isErrorPage = location.pathname === "/error";
  const isLinkPage = location.pathname === "/links";
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      {!loadingDone && <Preloader onDone={() => setLoadingDone(true)} />}
      {loadingDone && (
        <>
          <Navbar />
          <ScrollToTop />
          <ReactLenis root className="w-full min-h-screen relative z-[10]">
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsListPage />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="/links" element={<LinksPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/interests" element={<InterestsPage />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>

            {!isErrorPage && !isContactPage && !isLinkPage && <Contact />}
            {!isErrorPage && <Footer />}
          </ReactLenis>
        </>
      )}
    </>
  );
};

export default App;

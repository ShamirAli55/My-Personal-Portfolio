import { Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage"
const App = () => {
  return (
    <ReactLenis root={true}>
      <section id="home" className="w-full min-h-screen relative z-[10]">
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/link" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </section>
    </ReactLenis>
  );
};

export default App;

import Experience from "../sections/Experience";
import { experiences } from "../constants";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const ExperiencePage = () => {
  return (
    <section className="min-h-screen w-full bg-background text-primary pt-22">
      <div className="w-full pb-22">
        <Experience data={experiences} />
      </div>
      <Contact />
      <Footer />
    </section>
  );
};

export default ExperiencePage;

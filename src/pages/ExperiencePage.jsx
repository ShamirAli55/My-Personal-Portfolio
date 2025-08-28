import Experience from "../sections/Experience";
import { experiences } from "../constants";
const ExperiencePage = () => {
  return (
    <section className="min-h-screen w-full bg-background text-primary pt-22">
      <div className="w-full pb-22">
        <Experience data={experiences} />
      </div>
    </section>
  );
};

export default ExperiencePage;

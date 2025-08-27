import { useParams } from "react-router-dom";
import { myProjects } from "../constants";
import { ArrowLeft } from "lucide-react";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div>{children}</div>
  </div>
);

const ProjectPage = () => {
  const { id } = useParams();
  const project = myProjects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-primary">
        <p className="text-xl font-semibold">Project not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full pt-24 pb-16 bg-background text-primary relative">
      <button
        onClick={() => window.history.back()}
        className="fixed top-20 left-6 z-50 w-12 h-12 rounded-full bg-primary/10 text-opposite hover:bg-opposite/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
        aria-label="Go back"
      >
        <ArrowLeft size={22} />
      </button>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 mb-6">
          <h1 className="text-4xl font-bold text-left">{project.title}</h1>
          <div className="flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 bg-primary/10 text-opposite hover:bg-opposite/20 rounded-lg transition shadow-md shadow-opposite/5"
              >
                Live Preview
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 bg-primary/10 text-opposite hover:bg-opposite/20 rounded-lg transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-12 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="max-w-3xl text-left">
          {/* Overview */}
          {project.overview && (
            <Section title="Overview">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </Section>
          )}

          {project.subDescription && (
            <Section title="Details">
              <ul className="space-y-3">
                {project.subDescription.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-primary leading-relaxed"
                  >
                    <span className="text-purple-400 text-base flex-shrink-0 mt-1">
                      ✦
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.features && (
            <Section title="Features">
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.tags && (
            <Section title="Technologies">
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-foreground/10 px-3 py-2 rounded-lg"
                  >
                    <img src={tag.path} alt={tag.name} className="w-6 h-6" />
                    <span className="text-sm">{tag.name}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {(project.demoUrl || project.githubUrl) && (
            <div className="mt-10 flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-primary/10 text-opposite hover:bg-opposite/20 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                >
                  Live Preview
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-primary/10 text-opposite hover:bg-opposite/20 rounded-lg  shadow-md hover:scale-105  transition-transform duration-200"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

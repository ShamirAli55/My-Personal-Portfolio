import { useParams } from "react-router-dom";
import { myProjects } from "../constants";

const ProjectPage = () => {
  const { id } = useParams();
  const project = myProjects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Project not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full pt-24 pb-16 bg-background text-primary">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="text-sm text-muted-foreground hover:text-primary transition"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-4 mb-6">{project.title}</h1>

        {/* Image */}
        <div className="rounded-lg overflow-hidden mb-8 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8">
          {project.description}
        </p>

        {/* Features */}
        {project.features && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-foreground text-white rounded-lg hover:bg-foreground/80"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

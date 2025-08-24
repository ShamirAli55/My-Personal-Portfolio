import { ExternalLink, Github } from "lucide-react";
import { myProjects } from "../constants";
import Button from "../components/Button";

const Projects = () => {

  return (
    <section id="projects" className="min-h-screen w-full pt-32">
      <div className="container mx-auto max-w-5xl md:mx-0 md:max-w-7xl">
        <div className="mb-22 text-center">
          <p className="uppercase tracking-widest text-opposite-400 text-sm">
            My Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
            Fuel for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Innovation
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-0">
          {myProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-sm border border-opposite/20 md:border-0
                          md:border-b  p-6 flex flex-col md:flex-row md:items-center md:justify-between 
                          hover:shadow-md hover:border-primary/40 transition-all duration-500 projects_overlay"
              >
                <div className="h-48 overflow-hidden mb-4 md:hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 md:text-left md:pb-4 md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 md:hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-[11px] font-medium rounded-full 
                                   text-primary border border-primary/30 md:text-xs md:px-2.5"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Section: Links */}
                <div className="flex items-center space-x-4 mt-4 md:mt-0 cursor-pointer">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="w-full flex items-center justify-center mt-12">
          <Button name={"More Projects"} to={"projects"} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

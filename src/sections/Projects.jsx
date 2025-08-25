import { ExternalLink, Github, Eye } from "lucide-react";
import { myProjects } from "../constants";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MagneticButton from "../components/MagneticButn";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Projects = () => {
  const CrsrRef = useRef(null);
  const ImgRef = useRef(null);
    const navigate = useNavigate();
  const [cursorImage, setCursorImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); 

  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      animateCursor();
    };

    const scrollHandler = () => {
      animateCursor();
    };

    const animateCursor = () => {
      if (!CrsrRef.current) return;
      const { x, y } = posRef.current;

      gsap.to(CrsrRef.current, {
        x: x - 40,
        y: y - 60,
        opacity: cursorImage ? 1 : 0,
        duration: .8,
        ease: "power3.out",
      });

      if (ImgRef.current && cursorImage) {
        const offsetX = -200;
        const offsetY = 140;

        gsap.to(ImgRef.current, {
          x: x - offsetX,
          y: y - offsetY,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [cursorImage]);

  const handleMouseEnter = (image) => {
    setCursorImage(image);
  };

  const handleMouseLeave = () => {
    if (!CrsrRef.current || !ImgRef.current) return;

    gsap.to([CrsrRef.current, ImgRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    setCursorImage(null);
  };

  return (
    <section className="min-h-screen w-full pt-32 relative text-primary bg-background opacity-95">
      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div
        ref={CrsrRef}
        className="fixed h-22 top-0 w-22 rounded-full pointer-events-none z-[999] opacity-0"
      >
        <div
          className="absolute inset-0 rounded-full bg-opposite/10 backdrop-blur-xl 
            border border-white/30 shadow-lg flex items-center justify-center
            before:content-[''] before:absolute before:inset-0 
            before:rounded-full before:bg-gradient-to-tr 
            before:from-white/20 before:to-transparent before:opacity-40"
        >
          <div className="border-2 border-white/60 p-2 rounded-full bg-transparent">
            <Eye className="text-white drop-shadow-md" size={25} />
          </div>
        </div>

        <div className="absolute animate-spin-slow text-[12px] font-semibold tracking-[3px] text-white uppercase">
          <svg viewBox="0 0 120 120" className="w-22 h-22 fill-current">
            <defs>
              <path
                id="circlePath"
                d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text>
              <textPath href="#circlePath" startOffset="0%">
                • View Details • View Details
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl md:mx-0 md:max-w-7xl cursor-pointer">
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

        <div
          ref={ImgRef}
          className="hidden md:block fixed h-56 w-92 rounded-xl overflow-hidden 
            opacity-0 top-0 pointer-events-none z-40"
        >
          {cursorImage && (
            <img
              src={cursorImage}
              alt="preview"
              className="w-full h-full object-cover scale-110"
            />
          )}
        </div>

        <div className="flex flex-col gap-6 md:gap-0 relative">
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm 
                border border-opposite/20 md:border-0 md:border-b p-6 
                flex flex-col md:flex-row md:items-center md:justify-between 
                hover:shadow-md hover:border-primary/40 transition-all duration-500 
                projects_overlay relative"
              onMouseEnter={() => handleMouseEnter(project.image)}
              onMouseLeave={handleMouseLeave}
                onClick={() => navigate(`/projects/${project.id}`)} // 👈 open ProjectDetails
            >
              <div className="h-48 overflow-hidden mb-4 md:hidden rounded-lg pointer-events-none">
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

              <div className="flex justify-end items-center space-x-4 mt-4 md:mt-0 cursor-pointer">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()} // 👈 stop bubbling
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()} // 👈 stop bubbling
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center mt-12 pb-8">
          <MagneticButton>
            <Button name={"More Projects"} to={"projects"} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;

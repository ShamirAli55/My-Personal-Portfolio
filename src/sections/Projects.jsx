import { ExternalLink, Github, Eye } from "lucide-react";
import { myProjects } from "../constants";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MagneticButton from "../components/MagneticButn";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Projects = () => {
  const sectionRef = useRef(null);
  const CrsrRef = useRef(null); // circular cursor wrapper
  const ImgRef = useRef(null); // floating image container
  const ImgElRef = useRef(null); // <img> element inside preview
  const navigate = useNavigate();
  const isDesktopRef = useRef(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const hoveringRef = useRef(false);
  const posRef = useRef({ x: 0, y: 0 });
  const previewSizeRef = useRef({ w: 360, h: 224 });

  const cursorQuick = useRef({ x: null, y: null, op: null });
  const imgQuick = useRef({ x: null, y: null, op: null });

  useEffect(() => {
    if (!CrsrRef.current || !ImgRef.current) return;

    // initial styles
    gsap.set([CrsrRef.current, ImgRef.current], {
      opacity: 0,
      willChange: "transform, opacity",
    });

    // measure preview size
    const measurePreview = () => {
      const rect = ImgRef.current?.getBoundingClientRect();
      if (rect) previewSizeRef.current = { w: rect.width, h: rect.height };
    };
    measurePreview();

    const cursorRect = CrsrRef.current.getBoundingClientRect();
    const cursorOffset = { x: cursorRect.width / 2, y: cursorRect.height / 2 };

    cursorQuick.current.x = gsap.quickTo(CrsrRef.current, "x", {
      duration: 0.3,
      ease: "power3.out",
    });
    cursorQuick.current.y = gsap.quickTo(CrsrRef.current, "y", {
      duration: 0.3,
      ease: "power3.out",
    });
    cursorQuick.current.op = gsap.quickTo(CrsrRef.current, "opacity", {
      duration: 0.15,
      ease: "power2.out",
    });

    imgQuick.current.x = gsap.quickTo(ImgRef.current, "x", {
      x: 80,
      duration: 1,
      ease: "power3.out",
    });
    imgQuick.current.y = gsap.quickTo(ImgRef.current, "y", {
      duration: 1,
      ease: "power3.out",
    });
    imgQuick.current.op = gsap.quickTo(ImgRef.current, "opacity", {
      duration: 0.2,
      ease: "power2.out",
    });

    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    };

    const resizeHandler = () => {
      isDesktopRef.current = window.innerWidth >= 768;
      measurePreview();
      if (!isDesktopRef.current) {
        hoveringRef.current = false;
        cursorQuick.current.op(0);
        imgQuick.current.op(0);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          hoveringRef.current = false;
          cursorQuick.current.op(0);
          imgQuick.current.op(0);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);

    let rafId;
    const update = () => {
      if (hoveringRef.current && isDesktopRef.current) {
        cursorQuick.current.x(posRef.current.x - cursorOffset.x);
        cursorQuick.current.y(posRef.current.y - cursorOffset.y);

        const { w, h } = previewSizeRef.current;
        const PREVIEW_DX = 90;
        const PREVIEW_DY = -Math.max(160, h * 0.65);

        let targetX = posRef.current.x + PREVIEW_DX;
        let targetY = posRef.current.y + PREVIEW_DY;

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        targetX = Math.min(Math.max(8, targetX), vw - w - 8);
        targetY = Math.min(Math.max(8, targetY), vh - h - 8);

        imgQuick.current.x(targetX);
        imgQuick.current.y(targetY);
      }
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeHandler);
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleMouseEnter = (image) => {
    if (!isDesktopRef.current) return;
    if (ImgElRef.current) ImgElRef.current.src = image;

    hoveringRef.current = true;
    cursorQuick.current.op(1);
    imgQuick.current.op(1);
  };

  const handleMouseLeave = () => {
    hoveringRef.current = false;
    cursorQuick.current.op(0);
    imgQuick.current.op(0);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full pt-32 relative text-primary bg-background"
    >
      <div
        ref={CrsrRef}
        className="md:opacity-100 fixed top-0 left-0 h-22 w-22 rounded-full pointer-events-none z-[999]"
        style={{ willChange: "transform, opacity" }}
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

        <div className="absolute animate-spin-slow text-[12px] font-semibold tracking-[2px] text-white uppercase">
          <svg viewBox="0 0 120 120" className="w-22 h-22 fill-current">
            <defs>
              <path
                id="circlePath"
                d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text>
              <textPath href="#circlePath">
                • View Details • View Details
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl md:mx-0 md:max-w-7xl cursor-pointer">
        <div className="mb-22 text-center overflow-hidden">
          <p className="uppercase tracking-widest text-opposite-400 text-sm">
            My Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Code{" "}
            <span className="text-transparent gradient-text">Chronicles</span>
          </h2>
        </div>

        <div
          ref={ImgRef}
          className="hidden md:block fixed top-0 left-0 h-56 w-92 rounded-xl overflow-hidden opacity-0 pointer-events-none z-40"
          style={{ willChange: "transform, opacity" }}
        >
          <img
            ref={ImgElRef}
            alt="preview"
            loading="lazy"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="flex flex-col gap-6 md:gap-0 relative">
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-primary-foreground rounded-lg overflow-hidden shadow-sm
                border border-opposite/20 md:border-0 md:border-b p-6
                flex flex-col md:flex-row md:items-center md:justify-between
                hover:shadow-md hover:border-primary/40 transition-all duration-500
                projects_overlay relative"
              onMouseEnter={() => handleMouseEnter(project.image)}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="h-48 overflow-hidden mb-4 md:hidden rounded-lg pointer-events-none">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
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

              <div className="flex justify-end items-center space-x-4 mt-4 md:mt-0 cursor-pointer md:hidden">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
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

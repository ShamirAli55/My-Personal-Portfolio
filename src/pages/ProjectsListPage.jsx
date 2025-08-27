import React, { useState, useRef, useEffect } from "react";
import { myProjects } from "../constants";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Eye } from "lucide-react";

const ProjectsListPage = () => {
  const CrsrRef = useRef(null);
  const ImgRef = useRef(null);
  const navigate = useNavigate();

  const [cursorImage, setCursorImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const posRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    let isDesktop = window.innerWidth >= 768;
    if (CrsrRef.current) gsap.set(CrsrRef.current, { opacity: 0 });
    if (ImgRef.current) gsap.set(ImgRef.current, { opacity: 0 });

    const moveHandler = (e) => {
      if (!isDesktop) return;
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      animateCursor();
    };

    const scrollHandler = () => {
      if (!isDesktop) return;
      animateCursor();
    };

    const resizeHandler = () => {
      isDesktop = window.innerWidth >= 768;
      if (!isDesktop) {
        if (CrsrRef.current) gsap.set(CrsrRef.current, { opacity: 0 });
        if (ImgRef.current) gsap.set(ImgRef.current, { opacity: 0 });
      }
    };

    const animateCursor = () => {
      if (!CrsrRef.current || !isDesktop) return;
      const { x, y } = posRef.current;

      if (!cursorImage) {
        gsap.to([CrsrRef.current, ImgRef.current], {
          opacity: 0,
          duration: 0.2,
          overwrite: "auto",
        });
        return;
      }

      gsap.to(CrsrRef.current, {
        x: x - 40,
        y: y - 60,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });

      if (ImgRef.current) {
        gsap.to(ImgRef.current, {
          x: x - 200,
          y: y - 140,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [cursorImage]);

  const handleMouseEnter = (image) => {
    setCursorImage(image);
  };

  const handleMouseLeave = () => {
    setCursorImage(null);
    if (!CrsrRef.current || !ImgRef.current) return;
    gsap.killTweensOf([CrsrRef.current, ImgRef.current]);
    gsap.to([CrsrRef.current, ImgRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    const elements = containerRef.current?.querySelectorAll(".project-image");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-primary px-6 md:px-12 lg:px-20 py-16">
        <div
          className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-20"
          ref={containerRef}
        >
          <div className="space-y-40 overflow-hidden cursor-pointer">
            {myProjects.map((project, i) => (
              <div
                key={i}
                data-index={i}
                className="h-[80vh] flex items-center justify-center rounded-3xl p-6 project-image shadow-2xl"
                style={{
                  background: project.gradient,
                  boxShadow: "0px 0px 40px rgba(160, 120, 255, 0.2)",
                }}
                onMouseEnter={() => handleMouseEnter(project.image)}
                onMouseLeave={handleMouseLeave}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-auto object-contain rounded-2xl 
                    transition-transform duration-500 ease-out hover:-rotate-2 hover:scale-[1.08] drop-shadow-2xl"
                />
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-28 h-[80vh] flex flex-col justify-center px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-opposite">
                {myProjects[activeIndex].title}
              </h2>
              <p className=" mb-8 text-left leading-relaxed px-8">
                {myProjects[activeIndex].description}
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {myProjects[activeIndex].subDescription.map((point, j) => (
                  <li key={j} className="flex items-start text-sm ">
                    <span className="mr-3 text-purple-400 text-lg">✦</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {myProjects[activeIndex].tags.map((tag, j) => (
                  <span
                    key={j}
                    className="flex items-center gap-2 px-3 py-1 rounded-full  text-sm shadow-md border border-opposite/15"
                  >
                    <img src={tag.path} alt={tag.name} className="h-4 w-4" />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={CrsrRef}
        className="md:opacity-100 fixed h-22 top-0 w-22 rounded-full pointer-events-none z-[999]"
        style={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 rounded-full  bg-opposite/10 backdrop-blur-xl 
            border border-white/30 shadow-lg flex items-center justify-center
            before:content-[''] before:absolute before:inset-0 
            before:rounded-full before:bg-gradient-to-tr 
            before:from-white/20 before:to-transparent before:opacity-50"
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
              <textPath href="#circlePath" startOffset="0%">
                • View Details • View Details
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ProjectsListPage;

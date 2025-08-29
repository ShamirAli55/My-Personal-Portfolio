import { OrbitingCircles } from "./OrbitingCircles";
import { useMemo, useEffect } from "react";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  useEffect(() => {
    skills.forEach((skill) => {
      const img = new Image();
      img.src = `assets/logos/${skill}.svg`;
    });
  }, []);

  const IconsLarge = useMemo(
    () =>
      skills.map((skill, i) => (
        <Icon key={i} src={`assets/logos/${skill}.svg`} />
      )),
    []
  );
  const IconsSmall = useMemo(
    () =>
      [...skills]
        .reverse()
        .map((skill, i) => <Icon key={i} src={`assets/logos/${skill}.svg`} />),
    []
  );

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>{IconsLarge}</OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {IconsSmall}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    loading="lazy"
    className="duration-200 rounded-sm hover:scale-110"
  />
);

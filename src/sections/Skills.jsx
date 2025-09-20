import { skills } from "../constants";
import MainHeading from "../components/MainHeading";

const Skills = () => {
  return (
    <section
      className="min-h-screen w-full bg-background text-primary cursor-pointer flex flex-col items-center justify-center py-20 relative"
      aria-labelledby="skills-heading"
    >
      <MainHeading name={"My Skills"} span1={"Fuel for"} span2={"Innovation"} mainstyles={"mb-22"}/>
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl md:max-w-[1100px] md:px-24">
        {skills?.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-primary/5 hover:bg-primary-foreground/10 border border-opposite/30 transition duration-300 shadow-md"
          >
            <img
              src={skill.image}
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              className="h-5 w-5 object-contain"
              alt={skill.name}
            />
            <h4 className="text-[10px] md:text-md font-medium">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="min-h-screen w-full bg-primary-foreground text-primary opacity-95 cursor-pointer flex flex-col items-center justify-center py-20">
      <div className="mb-22 text-center">
        <p className="uppercase tracking-widest text-opposite-400 text-sm">
          My Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Fuel for <span className="gradient-text">Innovation</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl md:max-w-[1100px] md:px-24 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-primary/5  hover:bg-primary-foreground/10 border border-opposite/30 transition duration-300 shadow-md"
          >
            <img
              src={skill.image}
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

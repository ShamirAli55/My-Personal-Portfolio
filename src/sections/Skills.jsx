import { skills } from "../constants"

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full bg-primary-foreground text-white flex flex-col items-center justify-center py-20">
    
      <div className="mb-12 text-center">
        <p className="uppercase tracking-widest text-gray-400 text-sm">My Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold">
        Fuel for  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Innovation</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl px-8 ">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-bento-background hover:bg-bento-background/10 border border-opposite/12 transition duration-300 shadow-md"
          >
            <img src={skill.image} className="h-5 w-5 object-contain" alt={skill.name} />
            <h4 className="text-[10px] md:text-md font-medium">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

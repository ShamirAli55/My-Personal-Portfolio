const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-lightBg dark:bg-darkBg px-6 bg-background opacity-95"
    >
      <div className="max-w-4xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold text-accent">Shamir Ali</span>,
          a passionate <span className="font-medium">Web Developer</span> with a
          focus on creating sleek, functional, and user-friendly digital
          experiences. I enjoy blending clean design with efficient code to
          build products that stand out.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Outside of coding, I love exploring new technologies, solving
          real-world problems, and continuously improving my craft. I aim to
          bring creativity and professionalism into every project I work on.
        </p>
      </div>
    </section>
  );
};

export default About;

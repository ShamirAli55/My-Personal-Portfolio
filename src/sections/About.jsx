const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 py-10 bg-background"
    >
      <div
        className="
          grid gap-6
          grid-cols-1        
          md:grid-cols-6     
          auto-rows-[200px] 
        "
      >
        {/* Card 1 */}
        <div className="col-span-1 md:col-span-3 row-span-2 rounded-xl bg-amber-200 p-4 flex items-center justify-center">
          <p>Collaboration</p>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 md:col-span-3 rounded-xl bg-amber-950 p-4 flex items-center justify-center">
          <p>Technologies</p>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 md:col-span-3 rounded-xl bg-sky-300 p-4 flex items-center justify-center">
          <p>Extra Info</p>
        </div>


        <div className="col-span-1 md:col-span-2 rounded-xl bg-sky-300 p-4 flex items-center justify-center">
          <p>Extra Info</p>
        </div>
        {/* Card 4 */}
        <div className="col-span-1 md:col-span-2 rounded-xl bg-amber-500 p-4 flex items-center justify-center">
          <p>Contact</p>
        </div>

        {/* Card 5 */}

          <div className="col-span-1 md:col-span-2 rounded-xl bg-purple-400 p-4 flex items-center justify-center">
          <p>Flexible Timezones</p>
        </div>
      </div>
    </section>
  );
};

export default About;

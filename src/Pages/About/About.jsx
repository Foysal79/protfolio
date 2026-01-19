import { TbCheckbox } from "react-icons/tb";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Glass wrapper */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] p-6 md:p-12">
          <div className="lg:flex items-center gap-12">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-purple-500/20 blur-2xl" />
                <img
                  className="relative w-56 md:w-64 rounded-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                  src="../../../public/my_profile_1.png"
                  alt="profile"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mt-10 lg:mt-0 space-y-8">
              <div className="text-center lg:text-left">
                <p className="text-white/60 tracking-wide">About me</p>
                <h3 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">
                  Journey of a Web Developer
                </h3>
                <div className="mt-4 h-px bg-white/10" />
              </div>

              <p className="text-white/70 leading-relaxed text-justify">
                Experienced web developer adept in HTML5, CSS3, and Tailwind CSS
                for sleek front-end design. Proficient in JavaScript, React.js,
                and React Router, crafting dynamic user interfaces. Backend
                expertise in Node.js, Express.js, and MongoDB for robust
                server-side development. Skilled in Git, GitHub, Firebase, and
                more, enabling seamless collaboration and deployment.
              </p>

              {/* Badges/List */}
              <div className="grid sm:grid-cols-2 gap-3">
                <p className="flex items-center gap-3 font-medium text-white/80">
                  <TbCheckbox className="text-purple-300" /> Front End Developer
                </p>
                <p className="flex items-center gap-3 font-medium text-white/80">
                  <TbCheckbox className="text-purple-300" /> React JS Developer
                </p>
                <p className="flex items-center gap-3 font-medium text-white/80">
                  <TbCheckbox className="text-cyan-300" /> JavaScript Developer
                </p>
                <p className="flex items-center gap-3 font-medium text-white/80">
                  <TbCheckbox className="text-cyan-300" /> MERN Developer
                </p>
              </div>

              {/* CTA */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/uc?export=download&id=1GDsDoTAGsVT0cQV-80qmqfD_mSZqf-8x"
                  download
                >
                  <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80 hover:from-purple-500 hover:to-fuchsia-500 transition shadow-[0_12px_40px_rgba(0,0,0,0.45)] border border-white/10">
                    Download My Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: small glow under section */}
        <div className="pointer-events-none mx-auto mt-10 h-10 w-2/3 rounded-full bg-purple-500/10 blur-2xl" />
      </div>
    </section>
  );
};

export default About;

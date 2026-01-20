import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React.js, Next.js + Node.js",
      "MERN Developer",
      "API & Auth Builder",
      "Production-ready Products",
    ],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 40,
  });

  return (
    <section className="relative overflow-hidden bg-[#050612] text-white font-Poppins">
      {/* ===== Background glow layers ===== */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-20 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/18 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-360px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-fuchsia-500/12 blur-[180px]" />

      {/* ===== Content ===== */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ===== IMAGE (mobile first) ===== */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end mb-10 sm:mb-14 lg:mb-0">
              {/* glow */}
              <div className="pointer-events-none absolute -inset-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl" />

              <img
                src="../../../public/my_profile_1.png"
                alt="Foysal"
                className="
                  w-56 sm:w-64 md:w-72 lg:w-[420px]
                  rounded-3xl
                  shadow-[0_40px_120px_rgba(0,0,0,0.7)]
                "
              />
            </div>

            {/* ===== TEXT CONTENT ===== */}
            <div className="order-2 lg:order-1 space-y-7 sm:space-y-9 text-center lg:text-left">
              <p className="text-white/60 tracking-wide uppercase text-sm sm:text-base">
                Hello, I’m
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                Foysal Nur Onthor
                <br />
                <span className="bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80 bg-clip-text text-transparent">
                  Shikder
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
                <span className="text-white/70">I build</span>{" "}
                <span className="bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80 bg-clip-text text-transparent">
                  {typeEffect}
                </span>
              </h2>

              <p className="mx-auto lg:mx-0 max-w-xl text-white/70 leading-relaxed text-sm sm:text-base">
                Full-stack developer specializing in React and Node.js, building
                secure, scalable web applications with authentication, RESTful
                APIs, and MongoDB. Experienced in delivering clean,
                maintainable, and production-ready solutions.
              </p>

              {/* ===== CTA BUTTONS ===== */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view?usp=sharing"
                  target="blank"
                  download
                  className="inline-flex justify-center"
                >
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition shadow-[0_15px_50px_rgba(168,85,247,0.45)]">
                    Download Resume
                  </button>
                </a>

                <a href="#projects" className="inline-flex justify-center">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition backdrop-blur">
                    My Work / Projects
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== bottom fade ===== */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
      </div>
    </section>
  );
};

export default Banner;

import { TbCheckbox } from "react-icons/tb";
import { motion } from "framer-motion";

/* ===== Animation Variants ===== */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          {/* subtle background line */}
          <div className="absolute inset-x-0 top-8 h-px bg-white/10" />

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
            {/* Image */}
            <motion.div
              variants={imageVariant}
              className="hidden md:flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-purple-500/10 blur-2xl" />
                <img
                  className="relative w-56 md:w-64 rounded-2xl border border-white/10"
                  src="/my_profile_1.png"
                  alt="profile"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-7">
              {/* Title */}
              <motion.div variants={item} className="text-center lg:text-left">
                <p className="text-white/60 tracking-wide">About me</p>
                <h3 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">
                  Full-Stack Developer building real-world products
                </h3>
                <p className="mt-3 text-white/55 max-w-2xl">
                  Clean UI, scalable APIs, authentication, and solid database
                  design.
                </p>
              </motion.div>

              {/* Paragraph */}
              <motion.p
                variants={item}
                className="text-white/70 leading-relaxed text-justify"
              >
                I’m a Full-Stack Developer specializing in{" "}
                <span className="text-white/90 font-medium">
                  React / Next.js
                </span>{" "}
                and{" "}
                <span className="text-white/90 font-medium">
                  Node.js / Express
                </span>
                . I build secure, scalable, production-ready web applications
                with structured REST APIs, authentication, and strong database
                design. I’m comfortable working with both{" "}
                <span className="text-white/90 font-medium">SQL</span>{" "}
                (PostgreSQL, MySQL) and{" "}
                <span className="text-white/90 font-medium">NoSQL</span>{" "}
                (MongoDB).
              </motion.p>

              {/* Highlights (no card, simple grid) */}
              <motion.div variants={item} className="grid sm:grid-cols-2 gap-3">
                <p className="flex items-center gap-3 text-white/80">
                  <TbCheckbox className="text-purple-300" /> Frontend (React,
                  Next.js, Tailwind)
                </p>
                <p className="flex items-center gap-3 text-white/80">
                  <TbCheckbox className="text-purple-300" /> Backend (Node.js,
                  Express, REST APIs)
                </p>
                <p className="flex items-center gap-3 text-white/80">
                  <TbCheckbox className="text-cyan-300" /> Authentication (JWT,
                  Role-based access)
                </p>
                <p className="flex items-center gap-3 text-white/80">
                  <TbCheckbox className="text-cyan-300" /> Databases
                  (PostgreSQL, MySQL, MongoDB)
                </p>
              </motion.div>

              {/* Tech chips (lighter) */}
              <motion.div
                variants={item}
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "REST API",
                  "JWT",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "Firebase",
                  "Git/GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm text-white/75 border border-white/10 hover:border-white/20 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTA (no card style) */}
              <motion.div
                variants={item}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <a
                  href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80 hover:from-purple-500 hover:to-fuchsia-500 transition border border-white/10">
                    View Resume
                  </button>
                </a>

                <a href="#projects">
                  <button className="px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition">
                    View Projects
                  </button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* bottom subtle glow */}
          <div className="pointer-events-none mx-auto mt-10 h-8 w-2/3 rounded-full bg-purple-500/8 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

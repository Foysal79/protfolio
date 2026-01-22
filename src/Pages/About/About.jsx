import { TbCheckbox } from "react-icons/tb";
import { motion } from "framer-motion";

/* ===== Animations (premium, subtle) ===== */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050612] text-white py-24"
    >
      {/* ===== ambient background (same theme, nicer) ===== */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[620px] w-[620px] rounded-full bg-purple-500/12 blur-[190px]" />
      <div className="pointer-events-none absolute top-16 -right-48 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[190px]" />
      <div className="pointer-events-none absolute bottom-[-380px] left-1/2 -translate-x-1/2 h-[980px] w-[980px] rounded-full bg-fuchsia-500/8 blur-[220px]" />

      {/* subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          {/* ===== Section header ===== */}
          <motion.div
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-white/55 tracking-[0.28em] uppercase text-xs">
              ABOUT
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
                trustworthy web products
              </span>{" "}
              end-to-end
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed text-sm sm:text-base">
              Clean UI, secure authentication, scalable APIs, and maintainable
              code that teams can confidently ship.
            </p>
          </motion.div>

          {/* ===== Main layout (mobile-first, responsive) ===== */}
          <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* ===== LEFT: compact profile panel (mobile centered) ===== */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-5 order-1 flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-[420px]">
                {/* Premium panel */}
                <div className="rounded-3xl p-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,.16),rgba(255,255,255,.06),rgba(255,255,255,.14))]">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.65)] overflow-hidden">
                    {/* top bar */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <span className="text-sm font-semibold text-white/80">
                            FS
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-none">
                            Foysal Nur Onthor
                          </p>
                          <p className="text-xs text-white/55 mt-1">
                            Full Stack Developer (MERN)
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/20">
                        Available
                      </span>
                    </div>

                    {/* image */}
                    <div className="p-5">
                      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                        {/* highlights */}
                        <div className="pointer-events-none absolute -top-20 -left-24 h-56 w-56 rotate-12 bg-white/10 blur-2xl" />
                        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rotate-12 bg-white/8 blur-2xl" />

                        <img
                          src="/my_profile_1.png"
                          alt="profile"
                          className="w-full aspect-[4/5] object-cover object-top scale-[1.02]
                                     brightness-[1.03] contrast-[1.05] saturate-[1.02]"
                        />

                        {/* bottom overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <div className="rounded-2xl bg-black/45 border border-white/10 backdrop-blur px-4 py-3">
                            <p className="text-sm font-semibold">
                              Clean UI • Secure Auth • APIs
                            </p>
                            <p className="text-xs text-white/60 mt-1">
                              React / Next.js • Node / Express • MongoDB
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* mini metrics */}
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        {[
                          { k: "Frontend", v: "React" },
                          { k: "Backend", v: "Node" },
                          { k: "Auth", v: "JWT" },
                        ].map((x) => (
                          <div
                            key={x.k}
                            className="rounded-2xl border border-white/10 bg-white/5 py-3"
                          >
                            <p className="text-[11px] text-white/55">{x.k}</p>
                            <p className="text-sm font-semibold">{x.v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* small note */}
                <p className="mt-4 text-center lg:text-left text-xs text-white/50">
                  I focus on maintainable code, clear communication, and
                  predictable delivery.
                </p>
              </div>
            </motion.div>

            {/* ===== RIGHT: story + proof ===== */}
            <div className="lg:col-span-7 order-2 space-y-7">
              {/* story */}
              <motion.div
                variants={fadeUp}
                className="text-center lg:text-left"
              >
                <h3 className="text-xl sm:text-2xl font-semibold">What I do</h3>
                <p className="mt-3 text-white/70 leading-relaxed text-sm sm:text-base">
                  I build production-ready web applications using{" "}
                  <span className="text-white/90 font-medium">
                    React / Next.js
                  </span>{" "}
                  and{" "}
                  <span className="text-white/90 font-medium">
                    Node.js / Express
                  </span>
                  . My work includes structured REST APIs, secure
                  authentication, and strong database design. I’m comfortable
                  with <span className="text-white/90 font-medium">SQL</span>{" "}
                  (PostgreSQL, MySQL) and{" "}
                  <span className="text-white/90 font-medium">NoSQL</span>{" "}
                  (MongoDB).
                </p>
              </motion.div>

              {/* highlights (premium list blocks) */}
              <motion.div
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-3"
              >
                {[
                  {
                    c: "text-purple-300",
                    t: "Frontend (React, Next.js, Tailwind)",
                  },
                  {
                    c: "text-purple-300",
                    t: "Backend (Node.js, Express, REST APIs)",
                  },
                  {
                    c: "text-cyan-300",
                    t: "Authentication (JWT, Role-based access)",
                  },
                  {
                    c: "text-cyan-300",
                    t: "Databases (PostgreSQL, MySQL, MongoDB)",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3"
                  >
                    <p className="flex items-center gap-3 text-white/80">
                      <TbCheckbox className={x.c} /> {x.t}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* tech chips */}
              <motion.div
                variants={fadeUp}
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
                    className="px-3 py-1 rounded-full text-sm text-white/75 border border-white/10 bg-white/[0.03]
                               hover:border-white/20 hover:text-white hover:bg-white/[0.06] transition"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1"
              >
                <a
                  href="https://drive.google.com/file/d/1PvtK9QrSzGGUsuPAbTiaTQvFO8h_AWPD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80 hover:from-purple-500 hover:to-fuchsia-500 transition border border-white/10">
                    View Resume
                  </button>
                </a>

                <a href="#projects" className="inline-flex">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/5 transition">
                    View Projects
                  </button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* bottom glow */}
          <div className="pointer-events-none mx-auto mt-12 h-10 w-2/3 rounded-full bg-purple-500/8 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

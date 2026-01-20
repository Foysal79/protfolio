import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===== Data ===== */
const experiences = [
  {
    company: "TechFynite",
    type: "Internship & Contract · Remote",
    role: "MERN Stack Developer",
    duration: "Feb 2025 – Jul 2025",
    summary:
      "Worked in a production MERN environment focusing on backend APIs, authentication, and scalable system design.",
    points: [
      "Built RESTful APIs using Node.js & Express",
      "Implemented JWT authentication & role-based access",
      "Designed MongoDB schemas and optimized queries",
      "Collaborated with frontend & product teams",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "React", "Next.js"],
  },
];

/* ===== Component ===== */
const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // vertical line grow (mobile uses left line, desktop uses center)
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      // items
      gsap.fromTo(
        "[data-exp]",
        { opacity: 0, y: 22, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="professional-experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050612] text-white py-20 sm:py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-purple-500/10 blur-[190px]" />
      <div className="pointer-events-none absolute top-20 -right-44 h-[560px] w-[560px] rounded-full bg-cyan-400/8 blur-[190px]" />
      <div className="pointer-events-none absolute bottom-[-380px] left-1/2 -translate-x-1/2 h-[980px] w-[980px] rounded-full bg-fuchsia-500/7 blur-[240px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-white/55 tracking-[0.26em] uppercase text-xs">
            Experience
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold">
            Professional Journey
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Real production work with MERN stack—APIs, authentication, and
            scalable systems.
          </p>
          <div className="mx-auto mt-6 h-px w-44 bg-white/10" />
        </div>

        {/* Timeline (MOBILE PERFECT) */}
        <div className="relative">
          {/* line:
              - mobile: left aligned (start at x=18px)
              - desktop: center aligned (left-1/2)
          */}
          <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400/90 to-cyan-400/80"
          />

          <div className="space-y-10 sm:space-y-14">
            {experiences.map((exp, i) => (
              <div
                key={i}
                data-exp
                className="
                  relative
                  grid sm:grid-cols-2
                  gap-6 sm:gap-10
                "
              >
                {/* DOT:
                    - mobile: sits on left line
                    - desktop: sits on center line
                */}
                <span className="absolute left-[18px] sm:left-1/2 top-2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#050612] border border-white/15">
                  <span className="absolute inset-0.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                </span>

                {/* LEFT:
                    - mobile: becomes inline header row (not right aligned)
                    - desktop: right aligned like before
                */}
                <div className="sm:text-right sm:pr-10 pl-10 sm:pl-0">
                  <p className="text-sm text-white/50">{exp.duration}</p>

                  <div className="mt-2 inline-flex sm:ml-auto items-center gap-2 text-sm text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  <p className="mt-1 text-xs text-white/50">{exp.type}</p>

                  <div className="mt-4 hidden sm:block h-px w-24 bg-white/10 ml-auto" />
                </div>

                {/* RIGHT:
                    - mobile: full width below left block, aligned with padding left (pl-10)
                    - desktop: normal right column padding
                */}
                <div className="pl-10 sm:pl-10">
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                    {exp.role}
                  </h3>

                  <p className="mt-3 text-white/65 leading-relaxed text-sm sm:text-base">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-white/70 text-sm"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.02]
                                   text-white/70 hover:border-white/20 hover:text-white transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 h-px w-24 bg-white/10" />
                </div>
              </div>
            ))}
          </div>

          {/* bottom note */}
          <div className="mt-10 sm:mt-12 h-px bg-white/10" />
          <p className="mt-4 text-sm text-white/55 text-center sm:text-left">
            Focused on clean APIs, secure authentication, and maintainable
            systems.
          </p>
        </div>

        {/* bottom glow */}
        <div className="pointer-events-none mx-auto mt-12 h-10 w-2/3 rounded-full bg-purple-500/8 blur-3xl" />
      </div>
    </section>
  );
};

export default Experience;

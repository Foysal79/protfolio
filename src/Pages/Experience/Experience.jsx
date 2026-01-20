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
      // vertical line grow
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
        },
      );

      // items
      gsap.fromTo(
        "[data-exp]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="professional-experience"
      ref={sectionRef}
      className="relative pb-10 bg-[#050612] text-white"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/60 mb-2">Career</p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Professional Experience
          </h2>
          <div className="mx-auto mt-5 h-px w-40 bg-white/10" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 to-cyan-400"
          />

          {/* Items */}
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                data-exp
                className="relative grid sm:grid-cols-2 gap-8"
              >
                {/* Left: date */}
                <div className="sm:text-right pr-0 sm:pr-10">
                  <p className="text-sm text-white/50">{exp.duration}</p>
                  <div className="mt-2 hidden sm:block h-px w-24 bg-white/10 ml-auto" />
                </div>

                {/* Dot */}
                <span className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />

                {/* Right: content */}
                <div className="pl-8 sm:pl-10">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-white/70 mb-3">
                    {exp.company} · {exp.type}
                  </p>

                  <p className="text-white/65 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="flex gap-3 text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom glow */}
        <div className="pointer-events-none mx-auto mt-20 h-12 w-2/3 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Experience;

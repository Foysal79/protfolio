import { useEffect, useRef } from "react";
import { FiBookOpen } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-edu]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        "[data-edu-rule]",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-[#050612] text-white font-Poppins py-16"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/12 blur-[170px]" />
      <div className="pointer-events-none absolute top-32 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div data-edu className="text-center opacity-0">
          <p className="text-white/60 mb-2">My Education</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
            Academic Background
          </h2>
          <p className="mt-4 text-white/65 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A solid foundation in CS fundamentals—DSA, databases, software engineering,
            and web development.
          </p>
        </div>

        {/* Rule */}
        <div
          data-edu-rule
          className="mt-10 sm:mt-12 h-px w-full bg-white/10"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Main content */}
        <div className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14">
          {/* Left: degree */}
          <div data-edu className="opacity-0">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                <FiBookOpen className="text-lg text-white/80" />
              </div>

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
                  BSc in Computer Science & Engineering
                </h3>
                <p className="text-white/60 mt-2 leading-relaxed">
                  International Islamic University Chittagong
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/55">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />
                    2020 – 2025
                  </span>
                  <span className="text-white/35">•</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
                    Focus: Web + DSA
                  </span>
                </div>

                {/* small divider */}
                <div className="mt-8 h-px bg-white/10" />
              </div>
            </div>

            {/* “What I gained” */}
            <div className="mt-8">
              <p className="text-white/70 font-medium mb-3">What I gained</p>
              <ul className="space-y-2 text-white/65 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35" />
                  Strong fundamentals in DSA, complexity, and problem solving.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35" />
                  Database modeling (SQL/NoSQL) + query thinking.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35" />
                  Software engineering principles and clean architecture habits.
                </li>
              </ul>
            </div>
          </div>

          {/* Right: coursework chips */}
          <div data-edu className="opacity-0">
            <p className="text-white/70 font-medium mb-4">Relevant Coursework</p>

            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Database Systems",
                "Software Engineering",
                "Operating Systems",
                "Computer Networks",
                "Web Development",
                "System Design Basics",
              ].map((c) => (
                <span
                  key={c}
                  className="px-3 py-2 rounded-full text-sm text-white/70
                             border border-white/10 bg-white/[0.03]
                             hover:bg-white/[0.06] transition"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* subtle note */}
            <p className="mt-6 text-white/55 text-sm leading-relaxed">
              I translate coursework into practical projects—building UI, APIs, auth flows,
              and scalable data models.
            </p>

            <div className="mt-8 h-px bg-white/10" />
            <div className="mt-6 flex items-center justify-between text-sm">
              <p className="text-white/55">Currently sharpening</p>
              <p className="text-white/75 font-medium">MERN + Next.js + DSA</p>
            </div>
          </div>
        </div>

        {/* Bottom glow */}
        <div className="pointer-events-none mx-auto mt-16 sm:mt-20 h-10 w-2/3 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Education;

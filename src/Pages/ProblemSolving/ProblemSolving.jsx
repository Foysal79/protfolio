import { useEffect, useRef } from "react";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    name: "Codeforces",
    icon: SiCodeforces,
    accent: "text-purple-300",
    stat: "100+",
    meta: "Peak Rating 1116",
    desc: "Competitive contests focused on greedy, math-heavy logic and performance-critical problem solving.",
    link: "https://codeforces.com/profile/who_I_Am_79",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    accent: "text-yellow-300",
    stat: "100+",
    meta: "Consistent Practice",
    desc: "Regular participation in long & short contests to strengthen core data-structure fundamentals.",
    link: "https://www.codechef.com/users/who_i_am_79",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    accent: "text-orange-300",
    stat: "100+",
    meta: "Interview-Ready",
    desc: "Solved interview-style problems covering arrays, trees, graphs, DP, and optimization patterns.",
    link: "https://leetcode.com/u/who_i_am_79/",
  },
];

const ProblemSolving = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-ps-row]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        "[data-rail]",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 85%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="problem-solving"
      ref={sectionRef}
      className="relative bg-[#050612] text-white py-16  font-Poppins"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/12 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
            Problem Solving & DSA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/65 text-sm sm:text-base">
            Structured competitive programming practice to sharpen logic,
            pattern recognition, and interview-level confidence.
          </p>
        </div>

        {/* content */}
        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
          <div
            data-rail
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 to-cyan-400"
          />

          <div className="space-y-16">
            {data.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  data-ps-row
                  className="relative grid sm:grid-cols-[160px_1fr] gap-6 sm:gap-10"
                >
                  {/* rail dot */}
                  <span className="absolute left-5 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-white" />

                  {/* left rail content */}
                  <div className="pl-12 sm:pl-0">
                    <div className="flex items-center gap-3">
                      <Icon className={`text-xl ${item.accent}`} />
                      <p className="font-semibold">{item.name}</p>
                    </div>
                  </div>

                  {/* right content */}
                  <div className="pl-12 sm:pl-0">
                    <p className="text-4xl font-bold leading-none">
                      {item.stat}
                    </p>
                    <p className="text-sm text-white/55 mt-1">{item.meta}</p>

                    <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-flex items-center gap-1 text-sm ${item.accent} hover:opacity-80 transition`}
                    >
                      View profile <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* bottom glow */}
        <div className="pointer-events-none mx-auto mt-20 h-10 w-2/3 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
};

export default ProblemSolving;

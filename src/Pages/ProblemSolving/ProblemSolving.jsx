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
    accent: "from-purple-400/70 to-cyan-300/60",
    stat: "100+",
    meta: "Peak Rating 1116",
    desc: "Greedy + math-heavy contests with strict time & performance constraints.",
    link: "https://codeforces.com/profile/who_I_Am_79",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    accent: "from-yellow-300/70 to-amber-200/60",
    stat: "100+",
    meta: "Consistent Practice",
    desc: "Long & short contests to sharpen fundamentals and implementation speed.",
    link: "https://www.codechef.com/users/who_i_am_79",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    accent: "from-orange-300/70 to-rose-300/60",
    stat: "100+",
    meta: "Interview Ready",
    desc: "Patterns across arrays, trees, graphs, DP, and optimization techniques.",
    link: "https://leetcode.com/u/who_i_am_79/",
  },
];

const ProblemSolving = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-ps]",
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );

      gsap.fromTo(
        "[data-underline]",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            end: "bottom 85%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="problem-solving"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050612] text-white py-24 font-Poppins"
    >
      {/* soft glows */}
      <div className="pointer-events-none absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-purple-500/10 blur-[190px]" />
      <div className="pointer-events-none absolute top-24 -right-44 h-[560px] w-[560px] rounded-full bg-cyan-400/8 blur-[190px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="text-center mb-12">
          <p className="text-white/55 tracking-[0.3em] uppercase text-xs">
            Problem Solving
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold">
            Profiles & Practice
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/65 text-sm sm:text-base">
            Consistent DSA practice that translates into faster debugging,
            stronger logic, and better engineering decisions.
          </p>

          <div className="mx-auto mt-6 w-48 h-px bg-white/10 relative">
            <div
              data-underline
              className="absolute inset-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400"
            />
          </div>
        </div>

        {/* NEW DESIGN: “glass panels” with side gradient strip */}
        <div className="space-y-5 sm:space-y-6">
          {data.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                data-ps
                className="opacity-0"
              >
                <div className="relative rounded-[22px] border border-white/10 bg-white/[0.04] backdrop-blur-xl
                                shadow-[0_24px_80px_rgba(0,0,0,0.55)]
                                hover:bg-white/[0.06] hover:border-white/20 transition overflow-hidden">
                  {/* gradient strip */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.accent}`}
                  />

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      {/* left */}
                      <div className="flex items-start gap-3">
                        <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                          <Icon className="text-2xl text-white/85" />
                        </div>

                        <div>
                          <p className="text-lg font-semibold">{item.name}</p>
                          <p className="text-sm text-white/55 mt-1">{item.meta}</p>
                        </div>
                      </div>

                      {/* right stat */}
                      <div className="sm:text-right">
                        <p className="text-4xl sm:text-5xl font-bold leading-none">
                          {item.stat}
                        </p>
                        <p className="text-xs text-white/50 mt-1">
                          Problems solved
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-white/70 leading-relaxed max-w-3xl">
                      {item.desc}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition"
                      >
                        View profile <FiArrowUpRight />
                      </a>

                      {/* tiny signal */}
                      <span className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-black/20 text-white/55">
                        Consistent
                      </span>
                    </div>
                  </div>

                  {/* subtle bottom gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-white/55 max-w-3xl mx-auto">
            I apply the same habits from competitive programming to production:
            clear thinking, edge-case handling, and performance-aware decisions.
          </p>
        </div>

        {/* bottom glow */}
        <div className="pointer-events-none mx-auto mt-14 h-10 w-2/3 rounded-full bg-purple-500/8 blur-3xl" />
      </div>
    </section>
  );
};

export default ProblemSolving;

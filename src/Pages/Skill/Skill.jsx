import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillRow = ({ icon: Icon, title, desc }) => (
  <div
    data-row
    className="group flex items-start gap-3 sm:gap-4 py-3 sm:py-4
               border-b border-white/10 last:border-b-0
               opacity-0 translate-y-3"
  >
    <div
      className="mt-0.5 h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl border border-white/10
                 bg-white/[0.02] flex items-center justify-center
                 group-hover:border-white/20 group-hover:bg-white/[0.04] transition"
    >
      <Icon className="text-[18px] sm:text-xl text-white/75 group-hover:text-white transition" />
    </div>

    <div className="min-w-0 flex-1">
      <div className="flex items-start justify-between gap-2">
        <p className="text-white/90 font-medium leading-snug break-words">
          {title}
        </p>

        {/* desktop only arrow (mobile clutter কম) */}
        <HiArrowUpRight className="hidden sm:block mt-0.5 text-white/35 group-hover:text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <p className="mt-1 text-white/55 text-sm leading-relaxed break-words">
        {desc}
      </p>
    </div>
  </div>
);

const Column = ({ title, subtitle, children }) => (
  <div data-col className="opacity-0 translate-y-4">
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <h4 className="text-lg sm:text-xl font-semibold text-white truncate">
          {title}
        </h4>
        <p className="mt-1 text-xs text-white/45">{subtitle}</p>
      </div>
      <div className="h-px w-12 sm:w-16 bg-white/10 shrink-0" />
    </div>

    <div className="mt-5 sm:mt-6">{children}</div>
  </div>
);

const Skill = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const left = leftRef.current;
      const cols = gsap.utils.toArray("[data-col]");
      const rows = gsap.utils.toArray("[data-row]");

      gsap.set(left, { opacity: 0, y: 14 });
      gsap.set(cols, { opacity: 0, y: 18 });
      gsap.set(rows, { opacity: 0, y: 14 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(left, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" })
        .to(
          cols,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 },
          "-=0.25"
        )
        .to(
          rows,
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.04 },
          "-=0.45"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skill" ref={sectionRef} className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Premium background (mobile lighter) */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.45] sm:opacity-[0.55]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_45%)]" />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
          </div>

          {/* layout */}
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
            {/* Left block */}
            <div ref={leftRef} className="opacity-0 text-center lg:text-left">
              <p className="text-white/60 mb-2">Skills</p>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
                Technology
                <span className="block text-white/80">I use daily</span>
              </h3>

              <p className="mt-3 sm:mt-4 text-white/55 leading-relaxed max-w-md mx-auto lg:mx-0">
                I focus on fast UI, clean APIs, and production-friendly systems.
                These are the tools I’m most confident with.
              </p>

              {/* legend (mobile wrap) */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-white/50">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400/70" />
                  Frontend
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-300/60" />
                  Backend
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  Workflow
                </span>
              </div>
            </div>

            {/* Right columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              <Column title="Frontend" subtitle="UI + Performance">
                <SkillRow
                  icon={FaReact}
                  title="React"
                  desc="Component-driven UI with hooks, patterns, and reusable systems."
                />
                <SkillRow
                  icon={SiNextdotjs}
                  title="Next.js"
                  desc="SSR, routing, SEO-friendly pages, and performance-focused rendering."
                />
                <SkillRow
                  icon={SiTailwindcss}
                  title="Tailwind CSS"
                  desc="Utility-first styling with scalable design consistency."
                />
                <SkillRow
                  icon={SiTypescript}
                  title="TypeScript"
                  desc="Type-safe code for predictable, maintainable applications."
                />
              </Column>

              <Column title="Backend" subtitle="APIs + Data">
                <SkillRow
                  icon={FaNodeJs}
                  title="Node.js"
                  desc="Async server apps and scalable API workflows."
                />
                <SkillRow
                  icon={SiExpress}
                  title="Express.js"
                  desc="REST APIs, middleware structure, auth, and error handling."
                />
                <SkillRow
                  icon={SiMongodb}
                  title="MongoDB"
                  desc="Document modeling, indexing, and query patterns."
                />
                <SkillRow
                  icon={SiPostgresql}
                  title="PostgreSQL"
                  desc="Relational modeling, joins, and transactional systems."
                />
                <SkillRow
                  icon={SiMysql}
                  title="MySQL"
                  desc="Structured relational storage for classic use-cases."
                />
              </Column>

              <Column title="Workflow" subtitle="Build + Deploy">
                <SkillRow
                  icon={FaGitAlt}
                  title="Git & GitHub"
                  desc="Branching, code review, and team collaboration."
                />
                <SkillRow
                  icon={SiNextdotjs}
                  title="Deployment"
                  desc="Env config, production builds, and CI-friendly deploy."
                />
              </Column>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Skill;

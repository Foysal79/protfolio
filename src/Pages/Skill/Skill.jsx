import { useEffect, useMemo, useRef, useState } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_H = 72;

const TabBtn = ({ active, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 rounded-xl border text-sm transition
      ${active
        ? "border-white/20 bg-white/10 text-white"
        : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06] hover:text-white"}
    `}
  >
    {label}
  </button>
);

const Card = ({ icon: Icon, title, desc, tag }) => (
  <div
    data-card
    className="opacity-0 translate-y-3 rounded-2xl border border-white/10 bg-white/[0.04]
               hover:bg-white/[0.06] hover:border-white/20 transition p-4"
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-3 min-w-0">
        <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0">
          <Icon className="text-xl text-white/80" />
        </div>

        <div className="min-w-0">
          <p className="text-white/90 font-semibold leading-snug truncate">{title}</p>
          <p className="mt-1 text-sm text-white/60 leading-relaxed">{desc}</p>
        </div>
      </div>

      {tag ? (
        <span className="shrink-0 text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-black/20 text-white/60">
          {tag}
        </span>
      ) : null}
    </div>
  </div>
);

const Skill = () => {
  const ref = useRef(null);
  const [tab, setTab] = useState("frontend");

  const groups = useMemo(
    () => ({
      frontend: {
        label: "Frontend",
        title: "Frontend Systems",
        subtitle: "UI • DX • Performance",
        items: [
          {
            icon: FaReact,
            title: "React",
            desc: "Reusable components, hooks patterns, scalable UI architecture.",
            tag: "UI",
          },
          {
            icon: SiNextdotjs,
            title: "Next.js",
            desc: "Routing, SSR/SSG, SEO-friendly pages, optimized rendering.",
            tag: "Framework",
          },
          {
            icon: SiTailwindcss,
            title: "Tailwind CSS",
            desc: "Design consistency with utility-first styling and clean tokens.",
            tag: "Styling",
          },
          {
            icon: SiTypescript,
            title: "TypeScript",
            desc: "Type-safe code for predictable, maintainable development.",
            tag: "Safety",
          },
        ],
      },
      backend: {
        label: "Backend",
        title: "Backend & Data",
        subtitle: "APIs • Auth • Database",
        items: [
          {
            icon: FaNodeJs,
            title: "Node.js",
            desc: "Async services, scalable API workflows, clean architecture.",
            tag: "Runtime",
          },
          {
            icon: SiExpress,
            title: "Express.js",
            desc: "REST APIs, middleware layering, auth, error handling.",
            tag: "API",
          },
          {
            icon: SiMongodb,
            title: "MongoDB",
            desc: "Schema design, indexing, query patterns for performance.",
            tag: "NoSQL",
          },
          {
            icon: SiPostgresql,
            title: "PostgreSQL",
            desc: "Relational modeling, joins, transactions for robust systems.",
            tag: "SQL",
          },
          {
            icon: SiMysql,
            title: "MySQL",
            desc: "Structured storage for classic relational use-cases.",
            tag: "SQL",
          },
        ],
      },
      workflow: {
        label: "Workflow",
        title: "Workflow & Delivery",
        subtitle: "Git • Deploy • Collaboration",
        items: [
          {
            icon: FaGitAlt,
            title: "Git & GitHub",
            desc: "Clean commits, branching, reviews, collaboration workflow.",
            tag: "VCS",
          },
          {
            icon: SiNextdotjs,
            title: "Deployment",
            desc: "Env config, build pipelines, CI-friendly deploy approach.",
            tag: "Ship",
          },
        ],
      },
    }),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray("[data-card]");
      gsap.set(cards, { opacity: 0, y: 14 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [tab]);

  const active = groups[tab];

  return (
    <section
      id="skill"
      ref={ref}
      className="relative overflow-hidden bg-[#050612] text-white"
      style={{ minHeight: `calc(100vh - ${NAV_H}px)` }}
    >
      {/* ambient */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-[190px]" />
      <div className="pointer-events-none absolute top-20 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/8 blur-[190px]" />

      <div className="max-w-6xl mx-auto px-4">
        <div
          className="flex items-center"
          style={{ minHeight: `calc(100vh - ${NAV_H}px)` }}
        >
          {/* Command Center shell */}
          <div className="w-full rounded-[26px] border border-white/12 bg-white/[0.05] backdrop-blur-xl shadow-[0_28px_110px_rgba(0,0,0,0.62)] overflow-hidden">
            {/* top bar */}
            <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <p className="text-sm text-white/60">skills.console</p>
              </div>

              <span className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-black/20 text-white/55">
                Production-minded
              </span>
            </div>

            <div className="px-6 sm:px-8 py-6 sm:py-7">
              {/* header */}
              <div className="text-center sm:text-left">
                <p className="text-white/55 text-sm">Skills</p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold">
                  {active.title}
                </h3>
                <p className="mt-2 text-white/60">{active.subtitle}</p>
              </div>

              {/* tabs (mobile + desktop) */}
              <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                <TabBtn active={tab === "frontend"} onClick={() => setTab("frontend")} label="Frontend" />
                <TabBtn active={tab === "backend"} onClick={() => setTab("backend")} label="Backend" />
                <TabBtn active={tab === "workflow"} onClick={() => setTab("workflow")} label="Workflow" />
              </div>

              {/* cards */}
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {active.items.map((it) => (
                  <Card
                    key={it.title}
                    icon={it.icon}
                    title={it.title}
                    desc={it.desc}
                    tag={it.tag}
                  />
                ))}
              </div>

              {/* footer line */}
              <div className="mt-7 h-px bg-white/10" />

              <p className="mt-4 text-sm text-white/55 text-center sm:text-left">
                I use these tools to ship features fast, keep code maintainable, and scale systems safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

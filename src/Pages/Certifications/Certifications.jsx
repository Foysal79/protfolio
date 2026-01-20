import { useEffect, useRef, useState } from "react";
import { FiAward, FiChevronDown } from "react-icons/fi";
import { TbCheckbox } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Web Development Course — Programming Hero (Level 1)",
    time: "Jul 2023 – Dec 2023",
    tag: "Certificate",
    tagClass: "bg-purple-500/15 text-purple-200 border-purple-400/20",
    points: [
      "Completed a full frontend-focused program (HTML, CSS, JavaScript, React).",
      "Selected for SCIC (Special Career Incubation Camp).",
      "Built multiple projects with basic backend CRUD functionality.",
    ],
  },
  {
    title: "Endgame Program — Programming Hero (Completed)",
    time: "Jan 2024 – Mar 2024",
    tag: "Recommendation Letter",
    tagClass: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/20",
    points: [
      "Worked on LumiJobs with DevDynasty Team under real project pressure.",
      "Received Letter of Recommendation for technical and communication skills.",
    ],
  },
  {
    title: "Web Development Course — Programming Hero (Level 2)",
    time: "Ongoing",
    tag: "In Progress",
    tagClass: "bg-cyan-500/15 text-cyan-200 border-cyan-400/20",
    points: [
      "Completed major portions of MERN stack: MongoDB, Express.js, Node.js, TypeScript, Redux, Redux Toolkit, Next.js.",
      "Currently strengthening full-stack architecture, state management, and production-level development.",
    ],
  },
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cert-head]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        "[data-cert-row]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
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
            end: "bottom 90%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative bg-[#050612] text-white font-Poppins py-16"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/14 blur-[160px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/12 blur-[160px]" />

      <div className="relative max-w-5xl mx-auto px-4 pt-24">
        {/* header */}
        <div data-cert-head className="text-center mb-14 opacity-0">
          <p className="text-white/60 mb-2">Learning & Growth</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
            Certifications & Courses
          </h2>
          <div className="mx-auto mt-6 h-px w-44 sm:w-56 bg-white/10" />
        </div>

        {/* timeline rail */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
          <div
            data-rail
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 to-cyan-400"
          />

          <div className="space-y-6">
            {items.map((c, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={c.title}
                  data-cert-row
                  className="opacity-0 relative pl-10"
                >
                  {/* dot */}
                  <span className="absolute left-4 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />

                  {/* header row */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left py-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="mt-0.5 h-10 w-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                          <FiAward className="text-lg text-white/80" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold leading-snug">
                            {c.title}
                          </h3>
                          <p className="text-white/55 text-sm mt-1">{c.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${c.tagClass}`}
                        >
                          {c.tag}
                        </span>

                        <FiChevronDown
                          className={`text-white/60 transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>

                    {/* mobile tag */}
                    <div className="sm:hidden mt-3">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${c.tagClass}`}
                      >
                        {c.tag}
                      </span>
                    </div>

                    <div className="mt-5 h-px bg-white/10" />
                  </button>

                  {/* content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="pb-5 space-y-3">
                      {c.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-3 text-white/70 leading-relaxed"
                        >
                          <TbCheckbox className="mt-1 text-purple-300 text-lg shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* bottom glow */}
        <div className="pointer-events-none mx-auto mt-16 sm:mt-20 h-10 sm:h-12 w-2/3 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Certifications;

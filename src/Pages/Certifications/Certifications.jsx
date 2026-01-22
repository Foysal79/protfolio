import { useEffect, useRef, useState } from "react";
import { FiAward, FiChevronDown } from "react-icons/fi";
import { TbCheckbox } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import phLevel1 from "../../assets/certs/ph-level1.jpg";
import endgameLetter from "../../assets/certs/endgame-letter.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Web Development Course — Programming Hero (Level 1)",
    time: "Jul 2023 – Dec 2023",
    tag: "Certificate",
    tagClass: "bg-purple-500/15 text-purple-200 border-purple-400/20",
    file: { image: phLevel1 },
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
    file: { image: endgameLetter },
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
      "Completed major portions of MERN stack: MongoDB, Express.js, Node.js, TypeScript, Redux, Next.js.",
      "Currently strengthening full-stack architecture and production-level development.",
    ],
  },
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  const [previewSrc, setPreviewSrc] = useState(null);

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
        }
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
        }
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
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="certifications"
        ref={sectionRef}
        className="relative bg-[#050612] text-white py-20 overflow-hidden"
      >
        {/* glow blobs */}
        <div className="pointer-events-none absolute -top-56 -left-56 h-[620px] w-[620px] rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="pointer-events-none absolute top-24 -right-56 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[160px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20">
          {/* header */}
          <div data-cert-head className="text-center mb-14 opacity-0">
            <p className="text-white/55 mb-3 tracking-wide">
              Learning • Growth • Proof
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Certifications & Courses
            </h2>
            <div className="mx-auto mt-6 h-px w-44 sm:w-56 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* timeline wrapper */}
          <div className="relative">
            {/* rail */}
            <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-white/10" />
            <div
              data-rail
              className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-purple-400 via-fuchsia-300 to-cyan-400"
            />

            <div className="space-y-6">
              {items.map((c, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={c.title}
                    data-cert-row
                    className="opacity-0 relative pl-10 sm:pl-14"
                  >
                    {/* dot */}
                    <span className="absolute left-4 sm:left-6 top-7 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_24px_rgba(99,102,241,0.35)]" />

                    {/* card */}
                    <div
                      className={`group rounded-2xl border transition-all ${
                        isOpen
                          ? "border-white/15 bg-white/[0.035]"
                          : "border-white/10 bg-white/[0.02]"
                      } hover:border-white/20`}
                    >
                      {/* HEADER */}
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full text-left p-5 sm:p-6"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex gap-4 min-w-0">
                            <div
                              className={`shrink-0 h-11 w-11 rounded-2xl border flex items-center justify-center ${
                                isOpen
                                  ? "border-white/15 bg-white/[0.05]"
                                  : "border-white/10 bg-white/[0.03]"
                              }`}
                            >
                              <FiAward className="text-white/80" />
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-base sm:text-lg font-semibold leading-snug truncate">
                                {c.title}
                              </h3>
                              <p className="text-sm text-white/55 mt-1">
                                {c.time}
                              </p>

                              {/* tag (mobile) */}
                              <div className="sm:hidden mt-3">
                                <span
                                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${c.tagClass}`}
                                >
                                  {c.tag}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            {/* tag (desktop) */}
                            <span
                              className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${c.tagClass}`}
                            >
                              {c.tag}
                            </span>

                            <FiChevronDown
                              className={`text-white/60 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </div>
                        </div>

                        <div className="mt-5 h-px bg-white/10 group-hover:bg-white/15 transition" />
                      </button>

                      {/* CONTENT */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? "max-h-[2600px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 sm:px-6 pb-6">
                          {/* IMAGE PREVIEW */}
                          {c?.file?.image && (
                            <div className="mb-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                              <div className="flex items-center justify-between gap-3 mb-3">
                                <p className="text-sm text-white/60">
                                  Preview (JPG)
                                </p>

                                <button
                                  type="button"
                                  onClick={() => setPreviewSrc(c.file.image)}
                                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06] transition"
                                >
                                  Zoom
                                </button>
                              </div>

                              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                                <img
                                  src={c.file.image}
                                  alt={c.title}
                                  className="w-full h-auto block"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          )}

                          {/* POINTS */}
                          <ul className="space-y-3">
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
                    </div>

                    {/* subtle bottom spacing */}
                  </div>
                );
              })}
            </div>
          </div>

          {/* bottom glow */}
          <div className="pointer-events-none mx-auto mt-16 h-12 w-2/3 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
      </section>

      {/* MODAL */}
      {previewSrc && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewSrc(null)}
        >
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-3">
              <button
                type="button"
                onClick={() => setPreviewSrc(null)}
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.06] hover:border-white/20 transition text-white/80"
              >
                Close
              </button>
            </div>

            <img
              src={previewSrc}
              alt="Certificate preview"
              className="w-full rounded-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;

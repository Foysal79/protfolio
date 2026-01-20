import { motion } from "framer-motion";
import { TbCheckbox } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { BsCalendar2Date } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import Title from "../../Components/Title";

/* ===== Animations ===== */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ===== Projects Data ===== */
const projects = [
  {
    id: 1,
    title: "BookWorm — Backend API",
    type: "Backend",
    date: "2025",
    image: "/../public/book.png",
    bullets: [
      "Secure backend API for book recommendation & reading tracker platform.",
      "JWT-based authentication & role-based authorization.",
      "Modular MVC architecture with validation & centralized error handling.",
      "Book, genre, user library, progress tracking & review system.",
    ],
    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Zod",
    ],
    links: {
      live: "https://bookworm-backend.vercel.app/",
      backend: "https://github.com/Foysal79/BookWorm-backend",
    },
  },
  {
    id: 2,
    title: "LUMIJOBS — Hiring Platform (Team Project)",
    type: "Full Stack",
    date: "2024 – 2025",
    image: "/../public/lumijob.png",
    bullets: [
      "Full-stack hiring platform with job posting & applications.",
      "Role-based dashboards for Admin, Recruiter & Candidate.",
      "Secure authentication, resume management & profiles.",
      "Payment & drag-and-drop workflow integration.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Axios",
      "TanStack Query",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    links: {
      live: "https://lumijob795.netlify.app/",
      frontend: "https://github.com/Foysal79/LumiJob",
      backend: "https://github.com/Foysal79/Lumi-Job-backend",
    },
  },
  {
    id: 3,
    title: "OnTrip — Travel Guide Website",
    type: "Full Stack",
    date: "2024",
    image: "/OnTrip/p1.png",
    bullets: [
      "Built a travel platform where tourists can book guides and share travel experiences.",
      "Implemented role-based access for Users, Admins, and Guides.",
      "Designed booking workflows where tourists select guides and guides confirm bookings.",
      "Admin Demo: admin@gmail.com | Password: admin@gmail.com",
    ],
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Axios",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    links: {
      live: "https://ontrip-d851d.web.app/",
      frontend: "https://github.com/Foysal79/OnTrip-Client-side-ReactJs",
      backend: "https://github.com/Foysal79/OnTrip-Server-side-nodeJs",
    },
  },
  {
    id: 4,
    title: "Brand-Shop — Online Shopping Website",
    type: "Full Stack",
    date: "09/2023 – 10/2023",
    image: "/highStyle/p1.png",
    bullets: [
      "Customers can purchase premium fashion and apparel from luxury brands.",
      "Product categorization and preference-based updates through admin interface.",
      "Purchased items are displayed in the My Cart section.",
    ],
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Swiper",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    links: {
      live: "https://leafy-lokum-545b2b.netlify.app/",
      frontend: "https://github.com/Foysal79/High-Hstyle-client-side-react",
      backend: "https://github.com/Foysal79/High-Hstyle-server-side-react",
    },
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative pb-24 bg-[#050612] text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/15 blur-[160px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/60 mb-2">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Crafting Real-World Projects
          </h2>

          <div className="mx-auto mt-5 h-px w-44 bg-white/10" />
        </motion.div>

        {/* timeline line */}
        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 hidden md:block" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-20"
          >
            {projects.map((p, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={p.id}
                  variants={isLeft ? cardLeft : cardRight}
                  className={`relative md:w-1/2 ${isLeft ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"}`}
                >
                  {/* dot */}
                  <div
                    className={`hidden md:block absolute top-6 ${
                      isLeft ? "-right-[7px]" : "-left-[7px]"
                    } h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400`}
                  />

                  {/* card */}
                  <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.55)] overflow-hidden">
                    {/* image */}
                    <div className="relative h-44 md:h-52 w-full">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "data:image/svg+xml;charset=UTF-8," +
                            encodeURIComponent(
                              `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'>
                                <rect width='100%' height='100%' fill='#0b0c1a'/>
                                <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                                  fill='#ffffff' font-family='Arial' font-size='28' opacity='0.7'>
                                  Image not found
                                </text>
                              </svg>`,
                            );
                        }}
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050612]/90 via-[#050612]/35 to-transparent" />

                      {/* type badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80">
                          {p.type}
                        </span>
                      </div>
                    </div>

                    {/* content */}
                    <div className="p-6 md:p-8">
                      {/* header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          {p.title}
                        </h3>
                      </div>

                      <p className="text-white/60 text-sm flex items-center gap-2 mb-5">
                        <BsCalendar2Date className="text-purple-300" />
                        {p.date}
                      </p>

                      {/* bullets */}
                      <ul className="space-y-3 mb-6">
                        {p.bullets.map((b, i) => (
                          <li
                            key={`${p.id}-b-${i}`}
                            className="flex items-start gap-3 text-white/75"
                          >
                            <TbCheckbox className="text-purple-300 text-xl mt-1 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* tech */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.tech.map((t, i) => (
                          <span
                            key={`${p.id}-t-${i}`}
                            className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* links */}
                      <div className="flex flex-wrap gap-3">
                        {p.links.live && (
                          <a
                            href={p.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_14px_40px_rgba(168,85,247,0.35)]"
                          >
                            <RiLiveLine />
                            Live <FiArrowUpRight />
                          </a>
                        )}

                        {p.links.frontend && (
                          <a
                            href={p.links.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10"
                          >
                            <ImGithub />
                            Frontend
                          </a>
                        )}

                        {p.links.backend && (
                          <a
                            href={p.links.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10"
                          >
                            <ImGithub />
                            Backend
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;

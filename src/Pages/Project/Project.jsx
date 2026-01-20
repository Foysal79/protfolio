import { motion } from "framer-motion";
import { RiLiveLine, RiGithubFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

/* ===== Animation ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ===== YOUR PROJECT DATA (unchanged) ===== */
const projects = [
  {
    id: 1,
    title: "BookWorm — Backend API",
    type: "Backend",
    date: "2025",
    image: "https://i.ibb.co.com/czCR2hf/book.png",
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
    image: "https://i.ibb.co.com/mF87Z5nv/lumi.png",
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
      className="bg-[#050612] text-white py-20 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-purple-500/12 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-white/55 tracking-[0.28em] uppercase text-xs mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Real-world products
            <span className="block text-white/75">
              built with production mindset
            </span>
          </h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            These projects show how I design systems, write maintainable code,
            and ship features that scale.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((p, index) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Image */}
              <div className={`lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050612]/90 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-7 ${index % 2 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 text-sm text-white/55 mb-3">
                  <span>{p.type}</span>
                  <span>•</span>
                  <span>{p.date}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {p.title}
                </h3>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/75"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition"
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
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                    >
                      <RiGithubFill />
                      Frontend
                    </a>
                  )}
                  {p.links.backend && (
                    <a
                      href={p.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                    >
                      <RiGithubFill />
                      Backend
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 h-px bg-white/10" />
      </div>
    </section>
  );
};

export default Project;

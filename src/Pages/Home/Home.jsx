import { motion } from "framer-motion";

import Banner from "../Banner/Banner";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";
import ProblemSolving from "../ProblemSolving/ProblemSolving"; // ✅ ADD
import EducationExperience from "../EducationExperience/EducationExperience";
import Contact from "../Contact/Contact";
import Certifications from "../Certifications/Certifications";

/* ===== Reusable animation variant ===== */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050612] text-white"
    >
      {/* ===== Global Background Glow ===== */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-24 -right-48 h-[520px] w-[520px] rounded-full bg-cyan-400/18 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-360px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-fuchsia-500/12 blur-[180px]" />

      {/* ===== Page Content ===== */}
      <div className="relative">
        {/* Banner (Hero → instant render) */}
        <Banner />

        {/* About */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <About />
        </motion.section>

        {/* Skills */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Skill />
        </motion.section>

        {/* ⭐ Professional Experience */}
        <motion.section
          id="professional-experience"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Experience />
        </motion.section>

        {/* ⭐ Problem Solving (Added after Experience) */}
        <motion.section
          id="problem-solving"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <ProblemSolving />
        </motion.section>

        {/* Projects */}
        {/* <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Project />
        </motion.section> */}
        <Project />

        {/* Education */}
        <motion.section
          id="education"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <EducationExperience />
        </motion.section>
        {/* ⭐ Certifications & Courses */}
        <motion.section
          id="certifications"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Certifications />
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Contact />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;

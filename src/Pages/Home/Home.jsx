import { motion } from "framer-motion";

import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import EducationExperience from "../EducationExperience/EducationExperience";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

/* ===== Reusable animation variant ===== */
const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
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
        {/* Banner → no animation (hero should appear instantly) */}
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

        {/* Skill */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Skill />
        </motion.section>

        {/* Project */}
        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Project />
        </motion.section>

        {/* Education / Experience */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <EducationExperience />
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

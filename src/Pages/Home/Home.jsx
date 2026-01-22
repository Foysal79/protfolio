import { LazyMotion, domAnimation, m } from "framer-motion";

import Banner from "../Banner/Banner";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";
import ProblemSolving from "../ProblemSolving/ProblemSolving";
import EducationExperience from "../EducationExperience/EducationExperience";
import Contact from "../Contact/Contact";
import Certifications from "../Certifications/Certifications";

/* lighter + smoother */
const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const view = {
  once: true,
  amount: 0.2,
  // ✅ start animating a bit before it enters viewport -> less “pop”
  margin: "0px 0px -120px 0px",
};

const Home = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#050612] text-white"
      >
        {/* ===== Global Background Glow (lighter for FPS) ===== */}
        <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-purple-500/18 blur-[110px] will-change-transform" />
        <div className="pointer-events-none absolute top-24 -right-48 h-[520px] w-[520px] rounded-full bg-cyan-400/12 blur-[110px] will-change-transform" />
        <div className="pointer-events-none absolute bottom-[-360px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-fuchsia-500/8 blur-[140px] will-change-transform" />

        {/* ===== Page Content ===== */}
        <div className="relative">
          {/* Hero should be instant */}
          <Banner />

          <m.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <About />
          </m.section>

          <m.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <Skill />
          </m.section>

          <m.section
            id="professional-experience"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <Experience />
          </m.section>

          <m.section
            id="problem-solving"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <ProblemSolving />
          </m.section>

          <m.section
            id="projects"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <Project />
          </m.section>

          <m.section
            id="education"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <EducationExperience />
          </m.section>

          <m.section
            id="certifications"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <Certifications />
          </m.section>

          <m.section
            id="contact"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={view}
          >
            <Contact />
          </m.section>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Home;

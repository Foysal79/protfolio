import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { motion } from "framer-motion";

const navVariant = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  const mainLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const moreLinks = [
    { name: "Professional Experience", href: "#professional-experience" },
    { name: "Problem Solving", href: "#problem-solving" },
    { name: "Leadership Experience", href: "#leadership-experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
  ];

  return (
    <motion.div
      variants={navVariant}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 font-Poppins"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 h-24 w-[70%] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="navbar rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] text-white">
          {/* LEFT */}
          <div className="navbar-start">
            {/* Mobile dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 w-72 rounded-2xl
                           bg-[#050612]/95 border border-white/10 backdrop-blur-xl
                           shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
              >
                {/* Main links */}
                {mainLinks.map((item) => (
                  <li key={item.name}>
                    <AnchorLink href={item.href} className="navlink block">
                      {item.name}
                    </AnchorLink>
                  </li>
                ))}

                <div className="my-2 h-px bg-white/10" />

                {/* More accordion (mobile) */}
                <li>
                  <button
                    type="button"
                    onClick={() => setMoreOpen((p) => !p)}
                    className="navlink w-full flex items-center justify-between"
                  >
                    <span>More</span>
                    <span
                      className={`transition-transform duration-200 ${
                        moreOpen ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      ▸
                    </span>
                  </button>

                  {moreOpen && (
                    <ul className="mt-1 ml-2 pl-2 border-l border-white/10 space-y-1">
                      {moreLinks.map((item) => (
                        <li key={item.name}>
                          <AnchorLink
                            href={item.href}
                            className="navlink block"
                          >
                            {item.name}
                          </AnchorLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            {/* Logo */}
            <a className="btn btn-ghost text-xl lg:text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80 bg-clip-text text-transparent">
                Foysal
              </span>
            </a>
          </div>

          {/* CENTER (Desktop) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1">
              {mainLinks.map((item) => (
                <li key={item.name}>
                  <AnchorLink href={item.href} className="navlink">
                    {item.name}
                  </AnchorLink>
                </li>
              ))}

              {/* Desktop More dropdown */}
              <li className="dropdown dropdown-hover">
                <label tabIndex={0} className="navlink cursor-pointer">
                  More
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content mt-3 p-3 w-64 rounded-2xl
                             bg-[#050612]/95 border border-white/10 backdrop-blur-xl
                             shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
                >
                  {moreLinks.map((item) => (
                    <li key={item.name}>
                      <AnchorLink href={item.href} className="navlink block">
                        {item.name}
                      </AnchorLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            <AnchorLink href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80 hover:from-purple-500 hover:to-fuchsia-500 transition border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.45)] flex items-center gap-2"
              >
                Hire Me <TfiAngleDoubleRight />
              </motion.button>
            </AnchorLink>
          </div>
        </div>
      </div>

      <style>{`
        .navlink {
          color: rgba(255,255,255,0.75);
          padding: 10px 12px;
          border-radius: 12px;
          transition: all .2s ease;
          position: relative;
          white-space: nowrap;
        }
        .navlink:hover {
          color: white;
          background: rgba(255,255,255,0.06);
        }
        .navlink::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 6px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(168,85,247,0),
            rgba(168,85,247,.8),
            rgba(34,211,238,.8),
            rgba(34,211,238,0)
          );
          transform: scaleX(0);
          transition: transform .25s ease;
        }
        .navlink:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </motion.div>
  );
};

export default Navbar;

import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="relative bg-[#050612] text-white font-Poppins overflow-hidden">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-44 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-4 py-10"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Name */}
          <h2 className="text-base sm:text-lg font-semibold tracking-wide text-white/90">
            Foysal Nur Onthor Shikder
          </h2>

          
          {/* Divider */}
          <div className="h-px w-28 bg-white/10" />

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-white/50 text-center leading-relaxed">
            © {new Date().getFullYear()} Foysal. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> — </span>
            Crafted with clean code & passion.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

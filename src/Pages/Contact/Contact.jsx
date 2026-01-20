import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.04, 1],
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const Contact = () => {
  const email = "foysal.nur.onthor@gmail.com";
  const phone1 = "+8801879953325";
  const phone2 = "+8801873189853";
  const location = "Chittagong, Bangladesh";

  const mailToHref =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent("Project / Collaboration") +
    "&body=" +
    encodeURIComponent(
      "Hi Foysal,\n\nI saw your portfolio and would like to discuss...\n\nName:\nProject/Company:\nTimeline:\n\nThanks!",
    );

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 text-white"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute -top-64 -left-64 h-[620px] w-[620px] rounded-full bg-purple-500/10 blur-[190px]" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[190px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-2 items-start"
        >
          {/* LEFT (mobile hero) */}
          <motion.div variants={fadeUp}>
            <p className="text-white/45 text-xs sm:text-sm tracking-[0.25em]">
              CONTACT
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Let’s build something{" "}
              <span className="text-white/70">awesome</span>.
            </h2>

            <p className="mt-5 text-white/60 max-w-xl leading-relaxed text-sm sm:text-base">
              Hire, collaborate, or just say hi — email is the fastest. Tap once
              and your mail app opens with a ready message.
            </p>

            {/* Mobile-first Email CTA (big + thumb friendly) */}
            <motion.a
              href={mailToHref}
              variants={fadeUp}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex w-full sm:w-auto items-center justify-between gap-3
                         rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                         px-5 py-4 sm:px-6 sm:py-4
                         shadow-[0_20px_70px_rgba(0,0,0,0.55)]
                         hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3 min-w-0">
                <motion.span
                  {...pulse}
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-r from-red-500/25 to-orange-400/20 border border-white/10"
                >
                  <SiGmail className="text-2xl text-red-300" />
                </motion.span>

                <div className="min-w-0">
                  <p className="text-xs text-white/50">Email</p>
                  <p className="font-semibold text-white/90 truncate">
                    {email}
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-white/60 text-xl shrink-0" />
            </motion.a>

            {/* Quick Actions (mobile) */}
            <motion.div
              variants={fadeUp}
              className="mt-6 grid grid-cols-3 gap-3"
            >
              <a
                href={`tel:${phone1}`}
                className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition
                           px-3 py-3 text-center"
              >
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10">
                  <FiPhone className="text-white/80" />
                </div>
                <p className="mt-2 text-xs text-white/70 font-medium">Call</p>
              </a>

              <a
                href={mailToHref}
                className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition
                           px-3 py-3 text-center"
              >
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10">
                  <FiMail className="text-white/80" />
                </div>
                <p className="mt-2 text-xs text-white/70 font-medium">Email</p>
              </a>

              <a
                href="https://maps.google.com/?q=Chittagong%2C%20Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition
                           px-3 py-3 text-center"
              >
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10">
                  <FiMapPin className="text-white/80" />
                </div>
                <p className="mt-2 text-xs text-white/70 font-medium">Map</p>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT (details + social) */}
          <motion.div variants={fadeUp} className="lg:pt-10">
            {/* Details list */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
              <div className="divide-y divide-white/10">
                <div className="flex items-start justify-between gap-6 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <FiPhone className="text-white/60" />
                    <span className="text-xs uppercase tracking-wider text-white/45">
                      Phone
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-white/90 font-semibold">{phone1}</p>
                    <p className="text-white/60">{phone2}</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-6 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <FiMail className="text-white/60" />
                    <span className="text-xs uppercase tracking-wider text-white/45">
                      Email
                    </span>
                  </div>
                  <div className="text-right text-white/80 break-all">
                    {email}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-6 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-white/60" />
                    <span className="text-xs uppercase tracking-wider text-white/45">
                      Location
                    </span>
                  </div>
                  <div className="text-right text-white/80">{location}</div>
                </div>
              </div>
            </div>

            {/* Social (big + colorful + tappable) */}
            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-white/50 text-sm mb-4">Find me on</p>

              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.linkedin.com/in/foysal-nur-onthor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-2xl grid place-items-center
                             bg-[#0A66C2]/15 border border-white/10 hover:bg-[#0A66C2]/25 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-2xl text-[#0A66C2]" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.facebook.com/spider079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-2xl grid place-items-center
                             bg-[#1877F2]/15 border border-white/10 hover:bg-[#1877F2]/25 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-2xl text-[#1877F2]" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/Foysal79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-2xl grid place-items-center
                             bg-white/10 border border-white/10 hover:bg-white/15 transition"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* divider */}
        <div className="mt-16 h-px w-full bg-white/10" />
      </div>
    </section>
  );
};

export default Contact;

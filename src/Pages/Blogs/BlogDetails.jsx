import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "../../../public/data/blogs";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen  bg-[#050612] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-white/60">Blog not found</p>
          <Link className="underline" to="/blogs">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-[#050612] text-white">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-4 pt-10 pb-16">
        <Link to="/blogs" className="text-white/70 hover:text-white transition">
          ← Back to Blogs
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-8"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={blog.cover}
              alt={blog.title}
              className="w-full h-[320px] object-cover"
            />
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
              <span>•</span>
              <span>{blog.author.name}</span>
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              {blog.title}
            </h1>

            <p className="mt-3 text-white/60">{blog.excerpt}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <motion.div
              className="mt-10 space-y-6 text-white/80 leading-relaxed"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {blog.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <motion.h2
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="text-xl md:text-2xl font-semibold text-white mt-8"
                    >
                      {block.text}
                    </motion.h2>
                  );
                }
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {block.text}
                  </motion.p>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

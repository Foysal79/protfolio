import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogsData from "../../../public/data/blogs";

const POSTS_PER_PAGE = 6;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  // ✅ pagination state
  const [page, setPage] = useState(1);

  const allTags = useMemo(() => {
    const set = new Set();
    blogsData.forEach((b) => b.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredBlogs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogsData.filter((b) => {
      const matchesQuery =
        !q ||
        `${b.title} ${b.excerpt} ${b.tags.join(" ")}`.toLowerCase().includes(q);

      const matchesTag = activeTag === "All" || b.tags.includes(activeTag);

      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  // ✅ total pages
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
  }, [filteredBlogs.length]);

  // ✅ keep page valid if filters reduce total pages
  useEffect(() => {
    setPage(1);
  }, [query, activeTag]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  // ✅ current page blogs
  const paginatedBlogs = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, page]);

  // ✅ page buttons (smart window)
  const pageButtons = useMemo(() => {
    const buttons = [];
    const windowSize = 5;

    let start = Math.max(1, page - Math.floor(windowSize / 2));
    let end = Math.min(totalPages, start + windowSize - 1);

    // adjust start again if end reached
    start = Math.max(1, end - windowSize + 1);

    for (let i = start; i <= end; i++) buttons.push(i);
    return buttons;
  }, [page, totalPages]);

  return (
    <div className="min-h-screen py-20 bg-[#050612] text-white">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-24 -right-48 h-[520px] w-[520px] rounded-full bg-cyan-400/18 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4  pt-14 py-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-white/60 mb-2">Writing</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Web Development Blogs</h1>
          <p className="text-white/60 mt-3 max-w-2xl mx-auto">
            Practical notes, architecture tips, and production patterns—no fluff.
          </p>

          {/* Search */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blogs by title, tag, keyword..."
                className="w-full bg-transparent outline-none text-white placeholder:text-white/40"
              />
            </div>
          </div>

          {/* Tag filter */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  activeTag === t
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/7"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Result count */}
          <div className="mt-4 text-sm text-white/50">
            Showing{" "}
            <span className="text-white/80 font-medium">
              {filteredBlogs.length}
            </span>{" "}
            posts
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="relative mx-auto max-w-7xl px-4 pb-10">
        <motion.div
          key={`${page}-${query}-${activeTag}`} // ✅ re-animate when page changes
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paginatedBlogs.map((b) => (
            <motion.article
              key={b.id}
              variants={item}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden
                         shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
            >
              <Link to={`/blogs/${b.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050612] via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{b.date}</span>
                    <span>{b.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-white">
                    {b.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/60 line-clamp-2">
                    {b.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {b.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-sm text-white/70">
                      {b.author.name}{" "}
                      <span className="text-white/40">• {b.author.role}</span>
                    </div>

                    <motion.span
                      whileHover={{ x: 4 }}
                      className="text-sm text-white/80"
                    >
                      Read →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {filteredBlogs.length === 0 && (
          <div className="text-center text-white/60 mt-12">
            No blogs found 😅
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredBlogs.length > 0 && totalPages > 1 && (
        <div className="pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-2"
          >
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={`px-3 py-2 rounded-xl border text-sm transition ${
                page === 1
                  ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Prev
            </button>

            {pageButtons[0] > 1 && (
              <>
                <button
                  onClick={() => setPage(1)}
                  className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/70 hover:text-white hover:bg-white/10"
                >
                  1
                </button>
                <span className="px-1 text-white/40">…</span>
              </>
            )}

            {pageButtons.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-2 rounded-xl border text-sm transition ${
                  page === p
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {p}
              </button>
            ))}

            {pageButtons[pageButtons.length - 1] < totalPages && (
              <>
                <span className="px-1 text-white/40">…</span>
                <button
                  onClick={() => setPage(totalPages)}
                  className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/70 hover:text-white hover:bg-white/10"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={`px-3 py-2 rounded-xl border text-sm transition ${
                page === totalPages
                  ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Next
            </button>
          </motion.div>

          <div className="mt-3 text-center text-xs text-white/40">
            Page <span className="text-white/70">{page}</span> of{" "}
            <span className="text-white/70">{totalPages}</span>
          </div>
        </div>
      )}
    </div>
  );
}

const blogs = [
  {
    id: "mern-auth-jwt-refresh",
    title: "MERN Auth: JWT + Refresh Token (Production Ready Flow)",
    excerpt:
      "Access token expire হলে কীভাবে refresh token দিয়ে secureভাবে session maintain করবে—clean flow + best practices।",
    cover:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-18",
    readTime: "8 min read",
    tags: ["MERN", "Node.js", "JWT", "Security"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "অনেকেই JWT auth করে “done” বলে দেয়—কিন্তু production এ আসল battle হলো token expiry handle করা। User যেন হঠাৎ করে logout না হয়ে যায়, আবার security যেন weak না হয়—এই দুইটা balance করতে refresh token flow লাগে।",
      },
      { type: "h2", text: "Access token vs Refresh token" },
      {
        type: "p",
        text: "Access token ছোট সময়ের জন্য (যেমন 10–15 মিনিট)। এটা API request এর সাথে যায়। Refresh token বড় সময়ের জন্য (যেমন 7–30 দিন) এবং এর কাজ হলো নতুন access token এনে দেওয়া। Refresh token কে HttpOnly cookie তে রাখলে XSS থেকে অনেকটা safe থাকা যায়।",
      },
      { type: "h2", text: "Recommended flow (simple)" },
      {
        type: "p",
        text: "Login করলে server refresh token cookie সেট করবে এবং access token রেসপন্সে দিবে। Client access token দিয়ে API call করবে। Access token expire হয়ে 401 এলে client refresh endpoint hit করবে, নতুন access token নিবে, তারপর আগের request আবার retry করবে।",
      },
      { type: "h2", text: "Security checklist (যেটা সবাই miss করে)" },
      {
        type: "p",
        text: "Refresh token rotate করো (প্রতি refresh এ নতুন token), DB তে refresh token hashed করে রাখো, logout হলে token revoke করো, cookie তে SameSite + Secure সেট করো। এগুলো করলে “JWT auth” সত্যি production-ready হয়।",
      },
    ],
  },

  {
    id: "mongoose-schema-design",
    title: "Mongoose Schema Design: Common Mistakes & Better Patterns",
    excerpt:
      "Embedded vs Referenced, indexing, timestamps, validation—সবকিছু practical examples সহ।",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-16",
    readTime: "7 min read",
    tags: ["MongoDB", "Mongoose", "MERN"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "MongoDB তে schema design ভুল হলে পরে fix করতে অনেক কষ্ট হয়। কারণ data already production এ থাকে। তাই শুরুতেই ২টা জিনিস মাথায় রাখো—(1) read pattern কেমন, (2) update pattern কেমন।",
      },
      { type: "h2", text: "Embedded vs Referenced (কখন কোনটা?)" },
      {
        type: "p",
        text: "যদি দুইটা data সবসময় একসাথে লাগে (যেমন post + small comments) তাহলে embed ভালো। আর যদি data আলাদা করে update হয় বা বড় হয়ে যায় (যেমন user profile + orders) তাহলে reference ভালো।",
      },
      { type: "h2", text: "Indexes: speed booster, but not free" },
      {
        type: "p",
        text: "Index দিলে read fast হয়, কিন্তু write একটু slow হয়। তাই যেসব field দিয়ে বেশি filter/search করো শুধু সেগুলাতে index দাও। Example: status + createdAt একসাথে filter করলে compound index দারুণ কাজ করে।",
      },
      { type: "h2", text: "Validation কোথায় রাখবে?" },
      {
        type: "p",
        text: "Mongoose validation helpful, কিন্তু API request validate করার জন্য Zod/Joi use করলে error handling consistent থাকে এবং security stronger হয়।",
      },
    ],
  },

  {
    id: "express-middleware-structure",
    title: "Express Middleware Structure: Clean & Scalable API Setup",
    excerpt:
      "Error handler, auth middleware, rate limit, logging—সব proper order এ না রাখলে bug inevitable 😄",
    cover:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-14",
    readTime: "6 min read",
    tags: ["Express", "Node.js", "Backend"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "Express এ middleware order ভুল হলে এমন bug আসে যেটা দেখে মনে হয় ভুতের কাজ। তাই proper order follow করলে code clean + debugging easy হয়।",
      },
      { type: "h2", text: "Suggested middleware order" },
      {
        type: "p",
        text: "1) Security headers (helmet), 2) body parser/json, 3) logging (morgan), 4) routes, 5) 404 handler, 6) global error handler। এই flow এ গেলে edge-case কমে।",
      },
      { type: "h2", text: "Global error handler (must-have)" },
      {
        type: "p",
        text: "সব error এক জায়গায় handle করো: {success:false, message, errors}. এতে frontend consistent response পায় এবং তুমি প্রতিবার try/catch লিখতে বাধ্য হও না।",
      },
    ],
  },

  {
    id: "mern-pagination-filtering",
    title: "MERN Pagination + Filtering: Build Fast List APIs",
    excerpt:
      "Skip/limit vs cursor pagination, query filters, search + sort—real world list page বানানোর core।",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-12",
    readTime: "9 min read",
    tags: ["MERN", "MongoDB", "API", "Pagination"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "List API হলো সব product-এর backbone—jobs list, products list, users list—সবই list। API slow হলে UI যত সুন্দরই হোক, user বিরক্ত হবে। তাই pagination + filtering ঠিকমতো করা জরুরি।",
      },
      { type: "h2", text: "Skip/limit pagination (easy but has limits)" },
      {
        type: "p",
        text: "Skip/limit ছোট ডেটায় ভালো। কিন্তু 10000th page এর মতো deep pagination এ MongoDB কে অনেক scan করতে হয়, ফলে slow হয়।",
      },
      { type: "h2", text: "Cursor pagination (production friendly)" },
      {
        type: "p",
        text: "Cursor pagination এ তুমি last item এর _id বা createdAt পাঠাও। Server বলে: “এর পরে যেগুলো আছে সেগুলো দাও।” এতে deep pages এও performance stable থাকে।",
      },
      { type: "h2", text: "Filtering + indexes" },
      {
        type: "p",
        text: "User যেভাবে filter করে (status/category/date), ঠিক সেভাবেই index plan করো। Example: {category, status, createdAt} compound index অনেক list page দ্রুত করে।",
      },
    ],
  },

  {
    id: "nextjs-app-router-mental-model",
    title: "Next.js App Router Mental Model (So You Stop Getting Confused)",
    excerpt:
      "Server Components, Client Components, layout, loading, error—সব সহজ mental model এ।",
    cover:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-10",
    readTime: "10 min read",
    tags: ["Next.js", "App Router", "React"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "App Router এ সবচেয়ে বড় confusion হয় “কোনটা server, কোনটা client?”—এটা clear হলে 70% problem solve।",
      },
      { type: "h2", text: "Default rule: everything is Server Component" },
      {
        type: "p",
        text: "App Router এ by default component server-side render হয়। Browser-only জিনিস লাগলে (useState, onClick) তখন 'use client' লাগবে।",
      },
      { type: "h2", text: "Layouts are persistent" },
      {
        type: "p",
        text: "layout.tsx route change হলেও থাকে—তাই navbar/sidebar/layout structure এর জন্য perfect।",
      },
      { type: "h2", text: "loading.tsx + error.tsx = pro UX" },
      {
        type: "p",
        text: "loading.tsx দিয়ে route level skeleton দেখাও। error.tsx হলো error boundary—route crash হলেও সুন্দর fallback UI দেখায়।",
      },
    ],
  },

  {
    id: "nextjs-seo-metadata",
    title: "Next.js SEO: Metadata API + Open Graph Setup",
    excerpt:
      "Dynamic metadata, OG image, Twitter card—share করলে যেন pro লাগে 😄",
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-08",
    readTime: "6 min read",
    tags: ["Next.js", "SEO", "Metadata"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "তোমার site share করলে যদি proper title/description/image না আসে, মানুষ click করবে না। OG + Twitter card ঠিক করলে share preview একদম premium দেখায়।",
      },
      { type: "h2", text: "Static metadata" },
      {
        type: "p",
        text: "একটা page fixed হলে export metadata use করো: title, description, openGraph, twitter—সব এক জায়গায় set হয়ে যায়।",
      },
      { type: "h2", text: "Dynamic metadata for blog details" },
      {
        type: "p",
        text: "Blog details page এ generateMetadata({params}) দিয়ে id অনুযায়ী title/description/og image generate করলে SEO strong হয়।",
      },
    ],
  },

  {
    id: "mern-file-upload-cloudinary",
    title: "MERN File Upload: Multer + Cloudinary (Clean Approach)",
    excerpt:
      "Image upload, validation, size limit, storing URL in MongoDB—simple & real-world pattern।",
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-06",
    readTime: "8 min read",
    tags: ["MERN", "Upload", "Cloudinary"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "File upload feature বানাতে গেলে সবচেয়ে বড় ভয়: server memory explode 😄 তাই guardrails না দিলে production এ সমস্যা হবেই।",
      },
      { type: "h2", text: "Simple clean approach" },
      {
        type: "p",
        text: "Multer দিয়ে file receive করো, mime type + size validate করো, তারপর Cloudinary তে upload করে URL DB তে রাখো। DB তে raw file রাখা avoid করো।",
      },
      { type: "h2", text: "Validation & limits" },
      {
        type: "p",
        text: "Max file size set করো (যেমন 2MB), image ছাড়া অন্য file reject করো, error message consistent রাখো। এতে UX ভালো + abuse কম।",
      },
      { type: "h2", text: "Keep controller clean" },
      {
        type: "p",
        text: "Upload logic service function এ রাখলে controller শুধু request handle করে—code maintainable থাকে।",
      },
    ],
  },

  {
    id: "nextjs-data-fetching",
    title:
      "Next.js Data Fetching: Server Fetch, Cache, Revalidate (Real Use Cases)",
    excerpt:
      "fetch caching, revalidate, no-store—কখন কোনটা use করবে practical rule-of-thumb।",
    cover:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-04",
    readTime: "9 min read",
    tags: ["Next.js", "Data Fetching", "Caching"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "Next.js এ data fetching powerful, কিন্তু cache ভুল হলে “stale data” বা “slow page” দুটোই হবে। তাই basic rules follow করলেই অনেক pain কমে যায়।",
      },
      { type: "h2", text: "No-store (always fresh)" },
      {
        type: "p",
        text: "Dashboard বা user-specific data হলে cache: 'no-store' use করো। কারণ এখানে data সবসময় fresh চাই।",
      },
      { type: "h2", text: "Revalidate (semi-fresh)" },
      {
        type: "p",
        text: "Blog list বা marketing page এ revalidate: 60/300 use করলে page fast থাকে এবং নির্দিষ্ট সময় পর update হয়।",
      },
      { type: "h2", text: "Rule of thumb" },
      {
        type: "p",
        text: "User-specific = no-store, public content = revalidate, static docs = cache friendly। এই simple rule follow করলেই বেশিরভাগ case cover হয়।",
      },
    ],
  },

  {
    id: "mern-zod-validation",
    title: "MERN Validation: Zod on Server (Stop Trusting the Client 😄)",
    excerpt:
      "Express এ Zod schema validate করে clean error shape return—API level sanity।",
    cover:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-03",
    readTime: "7 min read",
    tags: ["MERN", "Zod", "Validation"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "Client-side validation UX improve করে, কিন্তু client কে trust করা যায় না। Server এ validate না করলে invalid/unsafe data DB তে ঢুকবেই।",
      },
      { type: "h2", text: "Why Zod?" },
      {
        type: "p",
        text: "Zod typed schema দেয় এবং error message readable রাখে। বড় project এ maintain করা সহজ হয়।",
      },
      { type: "h2", text: "Clean middleware pattern" },
      {
        type: "p",
        text: "validate(schema) middleware বানাও। req.body parse করো। success হলে next(), fail হলে 400 + structured error পাঠাও। এতে সব route consistent থাকে।",
      },
    ],
  },

  {
    id: "nextjs-auth-nextauth",
    title: "Next.js Auth: NextAuth Basics (Credentials + OAuth)",
    excerpt:
      "Google/Github OAuth + credentials login—একদম beginner-friendly roadmap।",
    cover:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-02",
    readTime: "11 min read",
    tags: ["Next.js", "Auth", "NextAuth"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "NextAuth একটা shortcut—তুমি auth system নিজে build না করে ready features use করতে পারো। OAuth + credentials—দুইটাই support করে।",
      },
      { type: "h2", text: "OAuth vs Credentials" },
      {
        type: "p",
        text: "OAuth (Google/Github) login fast + user-friendly। Credentials (email/password) দরকার হয় custom auth এর জন্য।",
      },
      { type: "h2", text: "Session strategy" },
      {
        type: "p",
        text: "JWT session lightweight। Database session advanced (revocation, audit) দরকার হলে ভালো। Use case দেখে choose করো।",
      },
    ],
  },

  {
    id: "mern-rtk-query",
    title: "Frontend with MERN: RTK Query Patterns (Fetching Like a Pro)",
    excerpt:
      "Caching, invalidation, optimistic updates—API integration ultra clean করে।",
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    date: "2026-01-01",
    readTime: "8 min read",
    tags: ["React", "Redux Toolkit", "RTK Query", "MERN"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "Fetching logic লিখতে লিখতে project জট লাগে। RTK Query দিলে code clean, caching automatic, refetch control easy হয়।",
      },
      { type: "h2", text: "Caching + refetch wins" },
      {
        type: "p",
        text: "RTK Query data cache করে রাখে। Tab change বা focus হলে auto refetch ও করা যায়। UX improve হয়।",
      },
      { type: "h2", text: "Invalidation (pro feature)" },
      {
        type: "p",
        text: "Mutation এর পরে providesTags/invalidatesTags দিলে manual refetch লাগবে না। UI automatically consistent থাকবে।",
      },
      { type: "h2", text: "Optimistic updates (bonus)" },
      {
        type: "p",
        text: "User click করেই UI update দেখাতে পারো—পরে request fail হলে rollback। Fast-feeling apps এর secret sauce এটা।",
      },
    ],
  },

  {
    id: "nextjs-components-structure",
    title: "Next.js Component Structure: Feature-Based Folder Setup",
    excerpt:
      "Big project এ component jungle হয়—feature-based structure দিয়ে calm রাখো।",
    cover:
      "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?auto=format&fit=crop&w=1600&q=80",
    date: "2025-12-30",
    readTime: "6 min read",
    tags: ["Next.js", "Architecture", "Frontend"],
    author: { name: "Foysal", role: "Frontend Developer" },
    content: [
      {
        type: "p",
        text: "Project বড় হলে components folder এ 300টা file জমে যায়—তারপর কেউ কিছু খুঁজে পায় না। Feature-based structure এই chaos কমায়।",
      },
      { type: "h2", text: "Feature folders idea" },
      {
        type: "p",
        text: "features/blog, features/auth, features/dashboard—প্রতিটা feature এর ui, hooks, api, utils একসাথে রাখো। এতে feature isolate থাকে।",
      },
      { type: "h2", text: "Shared layer clean রাখো" },
      {
        type: "p",
        text: "shared/ui, shared/lib, shared/constants শুধু reusable global stuff এর জন্য। সবকিছু shared এ ঢুকালে আবার chaos হবে 😄",
      },
    ],
  },
];

export default blogs;

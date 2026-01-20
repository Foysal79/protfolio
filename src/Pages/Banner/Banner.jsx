// import { useEffect, useRef } from "react";
// import { useTypewriter } from "react-simple-typewriter";
// import gsap from "gsap";

// const Banner = () => {
//   const root = useRef(null);
//   const heroRef = useRef(null);

//   const [typeEffect] = useTypewriter({
//     words: [
//       "Building APIs & Auth Systems",
//       "Scaling MERN Products",
//       "Next.js + Node.js Architectures",
//       "Clean Code • Fast UI • Secure Backend",
//     ],
//     loop: {},
//     typeSpeed: 75,
//     deleteSpeed: 35,
//   });

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".c-reveal",
//         { y: 20, opacity: 0, filter: "blur(8px)" },
//         {
//           y: 0,
//           opacity: 1,
//           filter: "blur(0px)",
//           duration: 0.95,
//           ease: "power3.out",
//           stagger: 0.12,
//           delay: 0.15,
//         },
//       );

//       // slow neon shimmer line
//       gsap.to(".scanline", {
//         y: 520,
//         duration: 4.8,
//         ease: "none",
//         repeat: -1,
//       });

//       // tiny bg drift
//       gsap.to(".gridMove", {
//         backgroundPosition: "120px 120px",
//         duration: 10,
//         ease: "linear",
//         repeat: -1,
//       });

//       // mouse parallax
//       const onMove = (e) => {
//         const el = heroRef.current;
//         if (!el) return;
//         const r = el.getBoundingClientRect();
//         const x = (e.clientX - (r.left + r.width / 2)) / r.width;
//         const y = (e.clientY - (r.top + r.height / 2)) / r.height;

//         gsap.to(".p1", {
//           x: x * 18,
//           y: y * 18,
//           duration: 0.35,
//           ease: "power3.out",
//         });
//         gsap.to(".p2", {
//           x: x * -22,
//           y: y * -18,
//           duration: 0.35,
//           ease: "power3.out",
//         });
//         gsap.to(".p3", {
//           x: x * 12,
//           y: y * -14,
//           duration: 0.35,
//           ease: "power3.out",
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, root);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={root}
//       className="relative min-h-screen overflow-hidden bg-[#050612] text-white font-Poppins"
//     >
//       {/* ===== cyber background grid ===== */}
//       <div
//         className="absolute inset-0 opacity-[0.22] gridMove"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
//           backgroundSize: "42px 42px",
//         }}
//       />

//       {/* vignette + noise feel */}
//       <div
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 25%, rgba(168,85,247,0.18), transparent 55%), radial-gradient(circle at 80% 60%, rgba(34,211,238,0.14), transparent 55%), radial-gradient(circle at 20% 75%, rgba(236,72,153,0.10), transparent 55%)",
//         }}
//       />

//       {/* scanline */}
//       <div
//         className="scanline pointer-events-none absolute left-0 right-0 top-[-120px] h-[110px] opacity-40"
//         style={{
//           background:
//             "linear-gradient(to bottom, transparent, rgba(34,211,238,0.18), transparent)",
//           filter: "blur(1px)",
//         }}
//       />

//       <div
//         ref={heroRef}
//         className="relative z-10 flex items-center min-h-screen"
//       >
//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* ===== left content ===== */}
//             <div className="order-2 lg:order-1 text-center lg:text-left space-y-7">
//               <div className="c-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
//                 <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                 <span className="text-xs sm:text-sm text-white/70">
//                   Shipping production-ready full-stack apps
//                 </span>
//               </div>

//               <h1 className="c-reveal text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
//                 Foysal Nur Onthor
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-400">
//                   Shikder
//                 </span>
//               </h1>

//               <h2 className="c-reveal text-lg sm:text-xl md:text-2xl font-medium">
//                 <span className="text-white/70">Currently:</span>{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400">
//                   {typeEffect}
//                 </span>
//                 <span className="ml-1 text-white/50">▍</span>
//               </h2>

//               <p className="c-reveal max-w-xl mx-auto lg:mx-0 text-white/70 leading-relaxed text-sm sm:text-base">
//                 I build secure auth, REST APIs, database-driven systems, and
//                 modern UIs. Focused on performance, maintainability, and clean
//                 architecture.
//               </p>

//               {/* badges */}
//               <div className="c-reveal flex flex-wrap gap-2 justify-center lg:justify-start">
//                 {[
//                   "Next.js",
//                   "React",
//                   "Node.js",
//                   "Express",
//                   "MongoDB",
//                   "JWT/Auth",
//                 ].map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10 bg-black/30 text-white/70"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* CTA */}
//               <div className="c-reveal flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
//                 <a
//                   href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view"
//                   target="blank"
//                   className="inline-flex justify-center"
//                 >
//                   <button className="relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-95 transition shadow-[0_18px_70px_rgba(34,211,238,0.25)]">
//                     <span className="relative">Download Resume</span>
//                     <span className="absolute inset-0 opacity-0 hover:opacity-100 transition">
//                       <span className="absolute -inset-10 bg-white/15 blur-2xl rotate-12" />
//                     </span>
//                   </button>
//                 </a>

//                 <a href="#projects" className="inline-flex justify-center">
//                   <button className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition backdrop-blur">
//                     My Work / Projects
//                   </button>
//                 </a>
//               </div>
//             </div>

//             {/* ===== right image card (cyber frame) ===== */}
//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//               <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[430px]">
//                 {/* parallax layers */}
//                 <div className="p1 pointer-events-none absolute -inset-8 rounded-[36px] bg-gradient-to-r from-cyan-500/15 to-fuchsia-500/15 blur-3xl" />
//                 <div className="p2 pointer-events-none absolute -inset-10 rounded-[40px] bg-purple-500/10 blur-3xl" />

//                 {/* frame */}
//                 <div className="p3 relative rounded-[32px] border border-white/12 bg-white/5 backdrop-blur-xl p-2 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
//                   <div className="rounded-[26px] border border-white/10 overflow-hidden bg-black/30">
//                     <img
//                       src="/my_profile_1.png"
//                       alt="Foysal"
//                       className="w-full h-auto object-cover"
//                     />
//                   </div>

//                   {/* corner ticks */}
//                   <span className="absolute -top-2 -left-2 h-6 w-6 border-l-2 border-t-2 border-cyan-400/70" />
//                   <span className="absolute -top-2 -right-2 h-6 w-6 border-r-2 border-t-2 border-fuchsia-400/70" />
//                   <span className="absolute -bottom-2 -left-2 h-6 w-6 border-l-2 border-b-2 border-purple-400/70" />
//                   <span className="absolute -bottom-2 -right-2 h-6 w-6 border-r-2 border-b-2 border-cyan-400/70" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom fade */}
//         <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default Banner;

// //* second version start from here */

// import { useEffect, useRef } from "react";
// import { useTypewriter } from "react-simple-typewriter";
// import gsap from "gsap";

// const Banner = () => {
//   const rootRef = useRef(null);

//   const [typeEffect] = useTypewriter({
//     words: [
//       "Full Stack Developer",
//       "React • Next.js • Node.js",
//       "MERN Stack Engineer",
//       "API & Auth Builder",
//       "Production-ready Applications",
//     ],
//     loop: {},
//     typeSpeed: 80,
//     deleteSpeed: 40,
//   });

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".b-reveal", {
//         opacity: 0,
//         y: 20,
//         filter: "blur(6px)",
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.12,
//       });
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={rootRef}
//       className="relative overflow-hidden bg-[#050612] text-white font-Poppins"
//     >
//       {/* ===== background glows ===== */}
//       <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-[140px]" />
//       <div className="pointer-events-none absolute top-20 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/18 blur-[140px]" />
//       <div className="pointer-events-none absolute bottom-[-360px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-fuchsia-500/12 blur-[180px]" />

//       {/* ===== content ===== */}
//       <div className="relative min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* ===== IMAGE (stylish + mobile perfect) ===== */}
//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-10 lg:mb-0">
//               <div className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[430px]">
//                 {/* glow */}
//                 <div className="pointer-events-none absolute -inset-10 rounded-[44px] bg-gradient-to-r from-purple-500/20 via-fuchsia-500/15 to-cyan-500/20 blur-3xl" />

//                 {/* animated border */}
//                 <div className="relative rounded-[34px] p-[1.5px] bg-[linear-gradient(90deg,rgba(34,211,238,.7),rgba(236,72,153,.7),rgba(168,85,247,.7),rgba(34,211,238,.7))] bg-[length:300%_300%] animate-[gradMove_6s_ease_infinite]">
//                   {/* glass card */}
//                   <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_35px_120px_rgba(0,0,0,0.65)]">
//                     {/* top bar */}
//                     <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
//                       <div className="flex gap-2">
//                         <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
//                         <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
//                         <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
//                       </div>
//                       <span className="text-xs text-white/55">foysal.dev</span>
//                     </div>

//                     {/* image */}
//                     <div className="p-3 sm:p-4">
//                       <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/30">
//                         <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rotate-12 bg-white/10 blur-2xl" />

//                         <img
//                           src="/my_profile_1.png"
//                           alt="Foysal"
//                           className="w-full aspect-[4/5] object-cover object-top scale-[1.02]"
//                         />

//                         {/* bottom overlay */}
//                         <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
//                           <div className="rounded-2xl bg-black/45 border border-white/10 backdrop-blur px-3 py-2">
//                             <p className="text-sm sm:text-base font-semibold">
//                               Foysal Nur Onthor
//                             </p>
//                             <p className="text-xs sm:text-sm text-white/65 mt-1">
//                               Full Stack Developer
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* small stats */}
//                       <div className="mt-4 grid grid-cols-3 gap-2 text-center">
//                         <div className="rounded-2xl border border-white/10 bg-white/5 py-3">
//                           <p className="text-xs text-white/55">Stack</p>
//                           <p className="text-sm font-semibold">MERN</p>
//                         </div>
//                         <div className="rounded-2xl border border-white/10 bg-white/5 py-3">
//                           <p className="text-xs text-white/55">Focus</p>
//                           <p className="text-sm font-semibold">APIs</p>
//                         </div>
//                         <div className="rounded-2xl border border-white/10 bg-white/5 py-3">
//                           <p className="text-xs text-white/55">Level</p>
//                           <p className="text-sm font-semibold">Prod</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* mobile shadow */}
//                 <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-10 w-4/5 rounded-full bg-black/60 blur-2xl lg:hidden" />
//               </div>
//             </div>

//             {/* ===== TEXT CONTENT ===== */}
//             <div className="order-2 lg:order-1 space-y-7 text-center lg:text-left">
//               <p className="b-reveal text-white/60 tracking-wide uppercase text-sm">
//                 Hello, I’m
//               </p>

//               <h1 className="b-reveal text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
//                 Foysal Nur Onthor
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
//                   Shikder
//                 </span>
//               </h1>

//               <h2 className="b-reveal text-xl sm:text-2xl md:text-3xl font-medium">
//                 <span className="text-white/70">I build </span>
//                 <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
//                   {typeEffect}
//                 </span>
//                 <span className="text-white/50 ml-1">▍</span>
//               </h2>

//               <p className="b-reveal mx-auto lg:mx-0 max-w-xl text-white/70 leading-relaxed text-sm sm:text-base">
//                 Full-stack developer specializing in React and Node.js. I build
//                 secure, scalable web applications with authentication, REST
//                 APIs, and clean architecture.
//               </p>

//               {/* CTAs */}
//               <div className="b-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a
//                   href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view"
//                   target="blank"
//                 >
//                   <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition shadow-[0_15px_50px_rgba(168,85,247,0.45)]">
//                     Download Resume
//                   </button>
//                 </a>

//                 <a href="#projects">
//                   <button className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition backdrop-blur">
//                     My Work / Projects
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom fade */}
//         <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
//       </div>

//       {/* gradient animation */}
//       <style>{`
//         @keyframes gradMove {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Banner;

// //* third version end here */

// import { useEffect, useRef } from "react";
// import { useTypewriter } from "react-simple-typewriter";
// import gsap from "gsap";

// const Banner = () => {
//   const rootRef = useRef(null);

//   const [typeEffect] = useTypewriter({
//     words: [
//       "Full Stack Developer",
//       "React • Next.js • Node.js",
//       "MERN Stack Engineer",
//       "API & Auth Builder",
//       "Production-ready Applications",
//     ],
//     loop: {},
//     typeSpeed: 80,
//     deleteSpeed: 40,
//   });

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Stagger text
//       gsap.fromTo(
//         ".b-reveal",
//         { opacity: 0, y: 18, filter: "blur(8px)" },
//         {
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//           duration: 0.95,
//           ease: "power3.out",
//           stagger: 0.12,
//           delay: 0.12,
//         },
//       );

//       // Image card entrance + subtle float (mobile safe)
//       gsap.fromTo(
//         ".img-card",
//         { opacity: 0, y: 18, scale: 0.98 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1.05,
//           ease: "power3.out",
//           delay: 0.18,
//         },
//       );

//       gsap.to(".img-float", {
//         y: -8,
//         duration: 2.6,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });

//       // Slow blob drift
//       gsap.to(".blob-1", {
//         x: 18,
//         y: 10,
//         duration: 10,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//       gsap.to(".blob-2", {
//         x: -14,
//         y: 12,
//         duration: 11,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//       gsap.to(".blob-3", {
//         x: 0,
//         y: -16,
//         duration: 12,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={rootRef}
//       className="relative overflow-hidden bg-[#050612] text-white font-Poppins"
//     >
//       {/* ===== background glows (polished) ===== */}
//       <div className="blob-1 pointer-events-none absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[140px]" />
//       <div className="blob-2 pointer-events-none absolute top-16 -right-44 h-[520px] w-[520px] rounded-full bg-cyan-400/14 blur-[140px]" />
//       <div className="blob-3 pointer-events-none absolute bottom-[-380px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

//       {/* subtle grid for premium depth */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.14]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
//           backgroundSize: "52px 52px",
//           maskImage:
//             "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)",
//         }}
//       />

//       {/* ===== content ===== */}
//       <div className="relative min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//             {/* ===== IMAGE (polished + mobile perfect) ===== */}
//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-10 lg:mb-0">
//               <div className="img-card img-float relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[430px]">
//                 {/* outer glow */}
//                 <div className="pointer-events-none absolute -inset-10 rounded-[44px] bg-gradient-to-r from-purple-500/18 via-fuchsia-500/12 to-cyan-500/16 blur-3xl" />

//                 {/* animated border wrapper */}
//                 <div className="relative rounded-[34px] p-[1.5px] bg-[linear-gradient(90deg,rgba(34,211,238,.75),rgba(236,72,153,.75),rgba(168,85,247,.75),rgba(34,211,238,.75))] bg-[length:300%_300%] animate-[gradMove_7s_ease_infinite]">
//                   {/* glass card */}
//                   <div className="rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_35px_120px_rgba(0,0,0,0.62)]">
//                     {/* top bar */}
//                     <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
//                       <div className="flex gap-2">
//                         <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
//                         <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
//                         <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
//                       </div>
//                       <span className="text-xs text-white/55">portfolio</span>
//                     </div>

//                     {/* image */}
//                     <div className="p-3 sm:p-4">
//                       <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/30">
//                         {/* glossy highlight */}
//                         <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rotate-12 bg-white/10 blur-2xl" />

//                         <img
//                           src="/my_profile_1.png"
//                           alt="Foysal"
//                           loading="eager"
//                           className="
//                             w-full aspect-[4/5]
//                             object-cover object-top
//                             scale-[1.03]
//                           "
//                         />

//                         {/* bottom overlay */}
//                         <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
//                           <div className="rounded-2xl bg-black/45 border border-white/10 backdrop-blur px-3 py-2">
//                             <p className="text-sm sm:text-base font-semibold leading-none">
//                               Foysal Nur Onthor
//                             </p>
//                             <p className="text-xs sm:text-sm text-white/65 mt-1">
//                               Full Stack Developer
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* mini stats (cleaner) */}
//                       <div className="mt-4 grid grid-cols-3 gap-2 text-center">
//                         {[
//                           { k: "Stack", v: "MERN" },
//                           { k: "Focus", v: "APIs" },
//                           { k: "Ship", v: "Prod" },
//                         ].map((x) => (
//                           <div
//                             key={x.k}
//                             className="rounded-2xl border border-white/10 bg-white/5 py-3"
//                           >
//                             <p className="text-[11px] sm:text-xs text-white/55">
//                               {x.k}
//                             </p>
//                             <p className="text-sm font-semibold">{x.v}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* mobile shadow base */}
//                 <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-10 w-4/5 rounded-full bg-black/60 blur-2xl lg:hidden" />
//               </div>
//             </div>

//             {/* ===== TEXT CONTENT ===== */}
//             <div className="order-2 lg:order-1 space-y-7 text-center lg:text-left">
//               <p className="b-reveal text-white/60 tracking-widest uppercase text-sm">
//                 Hello, I’m
//               </p>

//               <h1 className="b-reveal text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05]">
//                 Foysal Nur Onthor
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
//                   Shikder
//                 </span>
//               </h1>

//               <h2 className="b-reveal text-xl sm:text-2xl md:text-3xl font-medium">
//                 <span className="text-white/70">I build </span>
//                 <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
//                   {typeEffect}
//                 </span>
//                 <span className="text-white/50 ml-1">▍</span>
//               </h2>

//               <p className="b-reveal mx-auto lg:mx-0 max-w-xl text-white/70 leading-relaxed text-sm sm:text-base">
//                 Full-stack developer specializing in React and Node.js. I build
//                 secure, scalable web applications with authentication, REST
//                 APIs, and clean architecture.
//               </p>

//               {/* tech pills (adds “full stack vibe”) */}
//               <div className="b-reveal flex flex-wrap gap-2 justify-center lg:justify-start">
//                 {[
//                   "React",
//                   "Next.js",
//                   "Node.js",
//                   "Express",
//                   "MongoDB",
//                   "JWT/Auth",
//                 ].map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10 bg-white/5 text-white/70"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* CTAs (polished) */}
//               <div className="b-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a
//                   href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex"
//                 >
//                   <button
//                     className="
//                       w-full sm:w-auto
//                       px-6 py-3 rounded-xl
//                       bg-gradient-to-r from-purple-500 to-fuchsia-500
//                       hover:opacity-90 active:scale-[0.98] transition
//                       shadow-[0_15px_50px_rgba(168,85,247,0.45)]
//                     "
//                   >
//                     Download Resume
//                   </button>
//                 </a>

//                 <a href="#projects" className="inline-flex">
//                   <button
//                     className="
//                       w-full sm:w-auto
//                       px-6 py-3 rounded-xl
//                       border border-white/15 bg-white/5
//                       hover:bg-white/10 active:scale-[0.98] transition
//                       backdrop-blur
//                     "
//                   >
//                     My Work / Projects
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom fade */}
//         <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
//       </div>

//       {/* keyframes */}
//       <style>{`
//         @keyframes gradMove {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Banner;

// * modern circle fourth version start from here *///
// import { useEffect, useRef } from "react";
// import { useTypewriter } from "react-simple-typewriter";
// import gsap from "gsap";

// const Banner = () => {
//   const rootRef = useRef(null);

//   const [typeEffect] = useTypewriter({
//     words: [
//       "Designing clean UIs",
//       "Building secure APIs",
//       "Shipping MERN products",
//       "Auth • REST • MongoDB",
//     ],
//     loop: {},
//     typeSpeed: 70,
//     deleteSpeed: 35,
//   });

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".r",
//         { opacity: 0, y: 18, filter: "blur(10px)" },
//         {
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//           duration: 0.9,
//           ease: "power3.out",
//           stagger: 0.12,
//         },
//       );

//       gsap.fromTo(
//         ".orb",
//         { opacity: 0, scale: 0.96 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1.1,
//           ease: "power3.out",
//           delay: 0.15,
//         },
//       );

//       gsap.to(".ring", {
//         rotate: 360,
//         duration: 18,
//         ease: "linear",
//         repeat: -1,
//       });

//       gsap.to(".floaty", {
//         y: -10,
//         duration: 2.8,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={rootRef}
//       className="relative overflow-hidden bg-[#050612] text-white font-Poppins"
//     >
//       {/* ===== background: clean but premium ===== */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-purple-500/18 blur-[150px]" />
//         <div className="absolute top-24 -right-44 h-[560px] w-[560px] rounded-full bg-cyan-400/12 blur-[150px]" />
//         <div className="absolute bottom-[-380px] left-1/2 -translate-x-1/2 h-[980px] w-[980px] rounded-full bg-fuchsia-500/10 blur-[190px]" />
//       </div>

//       {/* subtle stripes */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage:
//             "linear-gradient(transparent 0, rgba(255,255,255,0.06) 1px, transparent 2px)",
//           backgroundSize: "100% 44px",
//           maskImage:
//             "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
//         }}
//       />

//       <div className="relative min-h-screen flex items-center pt-5">
//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
//           <div className="grid lg:grid-cols-12 gap-10 items-center">
//             {/* ===== LEFT: BIG TYPOGRAPHY ===== */}
//             <div className="lg:col-span-7 text-center lg:text-left space-y-7">
//               <div className="r inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
//                 <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                 <span className="text-xs sm:text-sm text-white/70">
//                   Open to full-time / remote
//                 </span>
//               </div>

//               <h1 className="r text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
//                 I build{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
//                   modern products
//                 </span>
//                 <br />
//                 for the web.
//               </h1>

//               <p className="r text-white/70 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
//                 I’m{" "}
//                 <span className="text-white font-semibold">
//                   Foysal Nur Onthor Shikder
//                 </span>{" "}
//                 — a full-stack developer focused on fast UI, secure
//                 authentication, scalable APIs, and clean architecture.
//               </p>

//               {/* typing row */}
//               <div className="r inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-3 rounded-2xl border border-white/10 bg-black/35">
//                 <span className="text-emerald-400">$</span>
//                 <span className="text-white/80">{typeEffect}</span>
//                 <span className="text-white/50 animate-pulse">▍</span>
//               </div>

//               {/* quick proof row */}
//               <div className="r flex flex-wrap gap-2 justify-center lg:justify-start">
//                 {[
//                   "React",
//                   "Next.js",
//                   "Node",
//                   "Express",
//                   "MongoDB",
//                   "JWT/Auth",
//                 ].map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10 bg-white/5 text-white/70"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* CTA */}
//               <div className="r flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//                 <a
//                   href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex"
//                 >
//                   <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition shadow-[0_18px_70px_rgba(255,255,255,0.18)] active:scale-[0.98]">
//                     Download Resume
//                   </button>
//                 </a>

//                 <a href="#projects" className="inline-flex">
//                   <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition backdrop-blur active:scale-[0.98]">
//                     View Case Studies
//                   </button>
//                 </a>
//               </div>
//             </div>

//             {/* ===== RIGHT: ORB AVATAR (NEW STYLE) ===== */}
//             <div className="lg:col-span-5 flex justify-center lg:justify-end">
//               <div className="orb floaty relative">
//                 {/* outer glow */}
//                 <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-purple-500/22 via-fuchsia-500/16 to-cyan-500/18 blur-3xl" />

//                 {/* rotating ring */}
//                 <div className="ring pointer-events-none absolute inset-[-18px] rounded-full border border-white/10" />
//                 <div className="ring pointer-events-none absolute inset-[-36px] rounded-full border border-white/10 opacity-60" />

//                 {/* avatar */}
//                 <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] rounded-full p-[2px] bg-[linear-gradient(90deg,rgba(34,211,238,.7),rgba(236,72,153,.7),rgba(168,85,247,.7))]">
//                   <div className="h-full w-full rounded-full bg-[#050612] p-3 border border-white/10">
//                     <div className="relative h-full w-full rounded-full overflow-hidden border border-white/10 bg-black/30">
//                       <img
//                         src="/my_profile_1.png"
//                         alt="Foysal"
//                         className="h-full w-full object-cover object-top scale-[1.02]"
//                       />

//                       {/* small label */}
//                       <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
//                         <div className="px-4 py-2 rounded-full bg-black/45 border border-white/10 backdrop-blur text-xs sm:text-sm text-white/80">
//                           Full Stack • MERN
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* floating chips */}
//                 <div className="pointer-events-none absolute -left-6 top-10 hidden sm:block">
//                   <div className="px-3 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-xs text-white/75">
//                     Next.js
//                   </div>
//                 </div>
//                 <div className="pointer-events-none absolute -right-6 bottom-12 hidden sm:block">
//                   <div className="px-3 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-xs text-white/75">
//                     Node.js
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom fade */}
//         <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default Banner;



// * modern circle fourth version (mobile: image first + center align) *//
import { useEffect, useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import gsap from "gsap";

const Banner = () => {
  const rootRef = useRef(null);

  const [typeEffect] = useTypewriter({
    words: [
      "Designing clean UIs",
      "Building secure APIs",
      "Shipping MERN products",
      "Auth • REST • MongoDB",
    ],
    loop: {},
    typeSpeed: 68,
    deleteSpeed: 32,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".r",
        { opacity: 0, y: 16, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.08,
        },
      );

      gsap.fromTo(
        ".orb",
        { opacity: 0, y: 14, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.12,
        },
      );

      gsap.to(".ring", {
        rotate: 360,
        duration: 26,
        ease: "linear",
        repeat: -1,
      });
      gsap.to(".floaty", {
        y: -8,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[#050612] text-white font-Poppins"
    >
      {/* ===== background ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-purple-500/18 blur-[150px]" />
        <div className="absolute top-24 -right-44 h-[560px] w-[560px] rounded-full bg-cyan-400/12 blur-[150px]" />
        <div className="absolute bottom-[-380px] left-1/2 -translate-x-1/2 h-[980px] w-[980px] rounded-full bg-fuchsia-500/10 blur-[190px]" />
      </div>

      {/* subtle stripes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(transparent 0, rgba(255,255,255,0.06) 1px, transparent 2px)",
          backgroundSize: "100% 44px",
          maskImage:
            "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative min-h-screen flex items-center pt-5">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* ===== RIGHT first on mobile (Image/Orb) ===== */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="orb floaty relative mx-auto">
                {/* outer glow */}
                <div className="pointer-events-none absolute -inset-12 rounded-full bg-gradient-to-r from-purple-500/22 via-fuchsia-500/16 to-cyan-500/18 blur-3xl" />

                {/* rotating rings */}
                <div className="ring pointer-events-none absolute inset-[-18px] rounded-full border border-white/10" />
                <div className="ring pointer-events-none absolute inset-[-36px] rounded-full border border-white/10 opacity-50" />

                {/* shimmer ring */}
                <div className="pointer-events-none absolute inset-[-8px] rounded-full p-[1px] bg-[linear-gradient(90deg,rgba(34,211,238,.35),rgba(255,255,255,.10),rgba(236,72,153,.30),rgba(255,255,255,.08),rgba(34,211,238,.35))] bg-[length:220%_220%] animate-[shine_7.5s_ease_infinite]" />

                {/* avatar */}
                <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[370px] md:w-[370px] rounded-full p-[2px] bg-[linear-gradient(90deg,rgba(34,211,238,.75),rgba(236,72,153,.75),rgba(168,85,247,.75))]">
                  <div className="h-full w-full rounded-full bg-[#050612] p-3 border border-white/10">
                    <div className="relative h-full w-full rounded-full overflow-hidden border border-white/10 bg-black/30">
                      {/* highlights */}
                      <div className="pointer-events-none absolute -top-20 -left-24 h-56 w-56 rotate-12 bg-white/10 blur-2xl" />
                      <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rotate-12 bg-white/8 blur-2xl" />

                      <img
                        src="/my_profile_1.png"
                        alt="Foysal"
                        className="h-full w-full object-cover object-top scale-[1.03] brightness-[1.03] contrast-[1.05] saturate-[1.02]"
                      />

                      {/* label */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <div className="px-4 py-2 rounded-full bg-black/45 border border-white/10 backdrop-blur text-xs sm:text-sm text-white/85">
                          Full Stack • React / Next / Node
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating chips */}
                <a
                  href="#projects"
                  className="absolute -left-6 top-10 hidden sm:block"
                >
                  <div className="px-3 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-xs text-white/75 hover:bg-white/10 transition">
                    Next.js
                  </div>
                </a>

                <a
                  href="#projects"
                  className="absolute -right-6 bottom-12 hidden sm:block"
                >
                  <div className="px-3 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-xs text-white/75 hover:bg-white/10 transition">
                    Node.js
                  </div>
                </a>
              </div>
            </div>

            {/* ===== LEFT (Text) second on mobile ===== */}
            <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left space-y-7">
              <div className="r inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs sm:text-sm text-white/70">
                  Open to full-time / remote • Reliable • Team-friendly
                </span>
              </div>

              <h1 className="r text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                I build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
                  modern products
                </span>
                <br />
                for the web.
              </h1>

              <p className="r text-white/70 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                I’m{" "}
                <span className="text-white font-semibold">
                  Foysal Nur Onthor Shikder
                </span>{" "}
                — a full-stack developer focused on fast UI, secure
                authentication, scalable APIs, and clean architecture.
              </p>

              {/* typing row */}
              <div className="r inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-3 rounded-2xl border border-white/10 bg-black/35">
                <span className="text-emerald-400">$</span>
                <span className="text-white/80">{typeEffect}</span>
                <span className="text-white/50 animate-pulse">▍</span>
              </div>

              {/* quick proof row */}
              <div className="r flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  "React",
                  "Next.js",
                  "Node",
                  "Express",
                  "MongoDB",
                  "JWT/Auth",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10 bg-white/5 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="r flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition shadow-[0_18px_70px_rgba(255,255,255,0.18)] active:scale-[0.98]">
                    Download Resume
                  </button>
                </a>

                <a href="#projects" className="inline-flex">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition backdrop-blur active:scale-[0.98]">
                    View Case Studies
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Banner;

///* morder card fifth version start from here */
// import { useEffect, useRef } from "react";
// import { useTypewriter } from "react-simple-typewriter";
// import gsap from "gsap";

// const Banner = () => {
//   const rootRef = useRef(null);

//   const [typeEffect] = useTypewriter({
//     words: [
//       "clean React/Next UI",
//       "secure JWT authentication",
//       "REST APIs + MongoDB",
//       "production-ready code quality",
//     ],
//     loop: {},
//     typeSpeed: 62,
//     deleteSpeed: 28,
//   });

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".reveal",
//         { opacity: 0, y: 18, filter: "blur(10px)" },
//         {
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//           duration: 0.95,
//           ease: "power3.out",
//           stagger: 0.11,
//           delay: 0.1,
//         },
//       );

//       gsap.fromTo(
//         ".trustCard",
//         { opacity: 0, y: 16, scale: 0.985 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1.05,
//           ease: "power3.out",
//           delay: 0.18,
//         },
//       );

//       gsap.to(".softFloat", {
//         y: -6,
//         duration: 2.9,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });

//       gsap.to(".blobA", {
//         x: 18,
//         y: 10,
//         duration: 10,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//       gsap.to(".blobB", {
//         x: -14,
//         y: 12,
//         duration: 11,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//       gsap.to(".blobC", {
//         x: 0,
//         y: -16,
//         duration: 12,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={rootRef}
//       className="relative overflow-hidden bg-[#050612] text-white font-Poppins"
//     >
//       {/* ===== background ===== */}
//       <div className="blobA pointer-events-none absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full bg-purple-500/18 blur-[150px]" />
//       <div className="blobB pointer-events-none absolute top-16 -right-44 h-[520px] w-[520px] rounded-full bg-cyan-400/12 blur-[150px]" />
//       <div className="blobC pointer-events-none absolute bottom-[-380px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-fuchsia-500/10 blur-[190px]" />

//       {/* subtle grid */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
//           backgroundSize: "54px 54px",
//           maskImage:
//             "radial-gradient(circle at 50% 28%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at 50% 28%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
//         }}
//       />

//       {/* ===== content ===== */}
//       <div className="relative min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//             {/* ===== LEFT (HR trust copy) ===== */}
//             <div className="order-2 lg:order-1 text-center lg:text-left space-y-7">
//               {/* trust pill */}
//               <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
//                 <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                 <span className="text-xs sm:text-sm text-white/70">
//                   Junior Full-Stack Developer • Reliable • Strong fundamentals
//                 </span>
//               </div>

//               <h1 className="reveal text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05]">
//                 Foysal Nur Onthor
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
//                   Shikder
//                 </span>
//               </h1>

//               {/* HR-friendly value paragraph */}
//               <p className="reveal mx-auto lg:mx-0 max-w-2xl text-white/70 leading-relaxed text-sm sm:text-base">
//                 I build modern web applications with clean UI and secure
//                 backend. I communicate clearly, deliver on time, and write
//                 maintainable code that teams can work on.
//               </p>

//               {/* typing proof line */}
//               <div className="reveal inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-3 rounded-2xl border border-white/10 bg-black/35">
//                 <span className="text-emerald-400">$</span>
//                 <span className="text-white/80">I ship </span>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400">
//                   {typeEffect}
//                 </span>
//                 <span className="text-white/50 animate-pulse">▍</span>
//               </div>

//               {/* credibility chips */}
//               <div className="reveal flex flex-wrap gap-2 justify-center lg:justify-start">
//                 {[
//                   "React",
//                   "Next.js",
//                   "Node.js",
//                   "Express",
//                   "MongoDB",
//                   "JWT/Auth",
//                   "REST API",
//                 ].map((x) => (
//                   <span
//                     key={x}
//                     className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10 bg-white/5 text-white/70"
//                   >
//                     {x}
//                   </span>
//                 ))}
//               </div>

//               {/* CTAs */}
//               <div className="reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//                 <a
//                   href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex"
//                 >
//                   <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition shadow-[0_18px_70px_rgba(255,255,255,0.14)] active:scale-[0.98]">
//                     View Resume
//                   </button>
//                 </a>

//                 <a href="#projects" className="inline-flex">
//                   <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition backdrop-blur active:scale-[0.98]">
//                     See Projects
//                   </button>
//                 </a>
//               </div>

//               {/* micro trust line */}
//               <p className="reveal text-xs sm:text-sm text-white/55">
//                 Clear communication • Clean commits • Predictable delivery
//               </p>
//             </div>

//             {/* ===== RIGHT (trust card: proof + identity) ===== */}
//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//               <div className="trustCard softFloat relative w-[300px] sm:w-[350px] md:w-[390px] lg:w-[450px]">
//                 {/* glow */}
//                 <div className="pointer-events-none absolute -inset-10 rounded-[44px] bg-gradient-to-r from-purple-500/16 via-fuchsia-500/10 to-cyan-500/14 blur-3xl" />

//                 <div className="rounded-[28px] p-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,.20),rgba(255,255,255,.06),rgba(255,255,255,.16))]">
//                   <div className="rounded-[27px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_35px_120px_rgba(0,0,0,0.62)] overflow-hidden">
//                     {/* header */}
//                     <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-semibold">Trust signals</p>
//                         <p className="text-xs text-white/55 mt-0.5">
//                           How I work with teams
//                         </p>
//                       </div>
//                       <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/20">
//                         Available
//                       </span>
//                     </div>

//                     {/* body */}
//                     <div className="p-5">
//                       {/* avatar row */}
//                       <div className="flex items-center gap-4">
//                         <div className="relative">
//                           <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/35 to-cyan-400/25 blur-xl" />
//                           <img
//                             src="/my_profile_1.png"
//                             alt="Foysal"
//                             className="relative h-16 w-16 rounded-full object-cover object-top border border-white/10"
//                           />
//                         </div>

//                         <div className="text-left">
//                           <p className="font-semibold leading-none">
//                             Foysal Nur Onthor
//                           </p>
//                           <p className="text-sm text-white/60 mt-1">
//                             Full Stack • React/Next + Node
//                           </p>
//                         </div>
//                       </div>

//                       {/* proof bullets */}
//                       <div className="mt-5 grid gap-3">
//                         {[
//                           {
//                             k: "Communication",
//                             v: "Clear updates & progress tracking",
//                           },
//                           {
//                             k: "Code quality",
//                             v: "Readable structure + best practices",
//                           },
//                           {
//                             k: "Delivery",
//                             v: "On-time, stable & production-ready",
//                           },
//                         ].map((x) => (
//                           <div
//                             key={x.k}
//                             className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
//                           >
//                             <p className="text-xs text-white/55">{x.k}</p>
//                             <p className="text-sm text-white/80 mt-0.5">
//                               {x.v}
//                             </p>
//                           </div>
//                         ))}
//                       </div>

//                       {/* compact tech row */}
//                       <div className="mt-5 grid grid-cols-3 gap-2 text-center">
//                         {[
//                           { k: "Auth", v: "JWT" },
//                           { k: "API", v: "REST" },
//                           { k: "DB", v: "Mongo" },
//                         ].map((x) => (
//                           <div
//                             key={x.k}
//                             className="rounded-2xl border border-white/10 bg-white/5 py-3"
//                           >
//                             <p className="text-[11px] text-white/55">{x.k}</p>
//                             <p className="text-sm font-semibold">{x.v}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* mobile shadow */}
//                 <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-10 w-4/5 rounded-full bg-black/60 blur-2xl lg:hidden" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom fade */}
//         <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default Banner;

// import { useEffect, useRef } from "react";
// import { useTypewriter } from "react-simple-typewriter";
// import gsap from "gsap";

// const Banner = () => {
//   const rootRef = useRef(null);

//   const [typeEffect] = useTypewriter({
//     words: [
//       "React & Next.js UI",
//       "Node.js + Express APIs",
//       "JWT Authentication",
//       "MongoDB Data Modeling",
//     ],
//     loop: {},
//     typeSpeed: 58,
//     deleteSpeed: 26,
//   });

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".reveal",
//         { opacity: 0, y: 14, filter: "blur(8px)" },
//         { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out", stagger: 0.10, delay: 0.08 }
//       );

//       gsap.fromTo(
//         ".img",
//         { opacity: 0, y: 12, scale: 0.99 },
//         { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.14 }
//       );
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={rootRef} className="relative overflow-hidden bg-[#050612] text-white font-Poppins">
//       {/* subtle background */}
//       <div className="pointer-events-none absolute -top-52 -left-52 h-[560px] w-[560px] rounded-full bg-purple-500/16 blur-[180px]" />
//       <div className="pointer-events-none absolute top-20 -right-52 h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[180px]" />
//       <div className="pointer-events-none absolute bottom-[-440px] left-1/2 -translate-x-1/2 h-[980px] w-[980px] rounded-full bg-fuchsia-500/8 blur-[230px]" />

//       {/* subtle lines */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.10]"
//         style={{
//           backgroundImage: "linear-gradient(transparent 0, rgba(255,255,255,0.06) 1px, transparent 2px)",
//           backgroundSize: "100% 46px",
//           maskImage: "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)",
//           WebkitMaskImage: "radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)",
//         }}
//       />

//       <div className="relative min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//             {/* LEFT */}
//             <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
//               <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
//                 <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                 <span className="text-xs sm:text-sm text-white/70">
//                   Junior Full-Stack Developer • Dhaka • Open to Onsite/Remote
//                 </span>
//               </div>

//               <h1 className="reveal text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05]">
//                 Foysal Nur Onthor
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
//                   Shikder
//                 </span>
//               </h1>

//               <p className="reveal mx-auto lg:mx-0 max-w-xl text-white/70 leading-relaxed text-sm sm:text-base">
//                 I build reliable web applications with clean UI, secure authentication, and scalable APIs.
//                 I work with clear communication, maintainable code, and predictable delivery.
//               </p>

//               {/* type line */}
//               <div className="reveal inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-3 rounded-2xl border border-white/10 bg-black/35">
//                 <span className="text-emerald-400">$</span>
//                 <span className="text-white/80">{typeEffect}</span>
//                 <span className="text-white/40 animate-pulse">▍</span>
//               </div>

//               {/* concise skills */}
//               <div className="reveal flex flex-wrap gap-2 justify-center lg:justify-start">
//                 {["React", "Next.js", "Node.js", "Express", "MongoDB", "JWT"].map((x) => (
//                   <span key={x} className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10 bg-white/5 text-white/70">
//                     {x}
//                   </span>
//                 ))}
//               </div>

//               {/* CTAs */}
//               <div className="reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-1">
//                 <a
//                   href="https://drive.google.com/file/d/1W8KVVTGKv72R6PmyQodb5cSJa2l9v3j1/view"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex"
//                 >
//                   <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition active:scale-[0.98]">
//                     Resume
//                   </button>
//                 </a>

//                 <a href="#projects" className="inline-flex">
//                   <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition backdrop-blur active:scale-[0.98]">
//                     Projects
//                   </button>
//                 </a>
//               </div>

//               <p className="reveal text-xs sm:text-sm text-white/55">
//                 Clean code • Clear updates • Team-friendly
//               </p>
//             </div>

//             {/* RIGHT (professional image block) */}
//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//               <div className="img relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
//                 {/* frame */}
//                 <div className="rounded-[26px] p-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,.18),rgba(255,255,255,.06),rgba(255,255,255,.14))]">
//                   <div className="rounded-[25px] border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_30px_110px_rgba(0,0,0,0.62)] overflow-hidden">
//                     <div className="p-3">
//                       <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-black/30">
//                         <img
//                           src="/my_profile_1.png"
//                           alt="Foysal"
//                           className="w-full aspect-[4/5] object-cover object-top"
//                         />
//                         {/* subtle name tag */}
//                         <div className="absolute inset-x-0 bottom-0 p-3">
//                           <div className="rounded-2xl bg-black/45 border border-white/10 backdrop-blur px-3 py-2">
//                             <p className="text-sm font-semibold leading-none">Foysal Nur Onthor</p>
//                             <p className="text-xs text-white/60 mt-1">Full Stack Developer</p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* minimal metrics */}
//                       <div className="mt-3 grid grid-cols-3 gap-2 text-center">
//                         {[
//                           { k: "Auth", v: "JWT" },
//                           { k: "API", v: "REST" },
//                           { k: "DB", v: "Mongo" },
//                         ].map((x) => (
//                           <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 py-2.5">
//                             <p className="text-[11px] text-white/55">{x.k}</p>
//                             <p className="text-sm font-semibold">{x.v}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* base shadow for mobile */}
//                 <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-10 w-4/5 rounded-full bg-black/60 blur-2xl lg:hidden" />
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* bottom fade */}
//         <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050612] to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default Banner;

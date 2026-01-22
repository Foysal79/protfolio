// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const SmoothScrollProvider = ({ children }) => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.1,
//       smooth: true,
//       smoothTouch: false, // mobile এ heavy লাগলে false রাখাই ভালো
//       wheelMultiplier: 1,
//       touchMultiplier: 1.2,
//     });

//     // Lenis -> requestAnimationFrame loop
//     let rafId;
//     const raf = (time) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };
//     rafId = requestAnimationFrame(raf);

//     // ScrollTrigger sync with Lenis
//     lenis.on("scroll", ScrollTrigger.update);

//     // Let GSAP use Lenis’s scroll position
//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         return arguments.length
//           ? lenis.scrollTo(value, { immediate: true })
//           : lenis.scroll;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//     });

//     const onRefresh = () => lenis.resize();
//     ScrollTrigger.addEventListener("refresh", onRefresh);
//     ScrollTrigger.refresh();

//     return () => {
//       ScrollTrigger.removeEventListener("refresh", onRefresh);
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//       ScrollTrigger.killAll(false);
//     };
//   }, []);

//   return children;
// };

// export default SmoothScrollProvider;

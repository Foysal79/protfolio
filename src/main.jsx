// main.jsx
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";

import "./index.css";
import Router from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MotionConfig
    transition={{ duration: 0.45, ease: "easeOut" }}
    reducedMotion="never"
  >
    {/* Less jank on initial load + route transitions */}
    <AnimatePresence mode="wait" initial={false}>
      <RouterProvider router={Router} />
    </AnimatePresence>
  </MotionConfig>,
);

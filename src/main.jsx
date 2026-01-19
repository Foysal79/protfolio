import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";

import "./index.css";
import Router from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Global motion config */}
    <MotionConfig
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      reducedMotion="user"
    >
      {/* For route-level animations (future ready) */}
      <AnimatePresence mode="wait">
        <RouterProvider router={Router} />
      </AnimatePresence>
    </MotionConfig>
  </React.StrictMode>,
);

import React from "react";
import { motion } from "framer-motion";
function Rescroll() {
  return (
    <motion.div className="rescroll">
      <div className="line"></div>
      <motion.a
        href="#homepage"
        id="rescroll-button"
        whileHover={{ color: "bisque", fontWeight: 800, duration: 0.4 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Scroll Back To The Top
      </motion.a>
      <div className="line"></div>
    </motion.div>
  );
}

export default Rescroll;

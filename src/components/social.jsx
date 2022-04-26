import React from "react";
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io";
import { motion } from "framer-motion";
import styled from "styled-components";
function Social() {
  return (
    <div className="social-links">
      <motion.a
        href="#"
        whileHover={{ scale: 1.2 }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        className="social-svg"
      >
        {<IoLogoTwitter />}
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.2 }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        className="social-svg"
      >
        {<IoLogoLinkedin />}
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.2 }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        className="social-svg"
      >
        {<IoLogoInstagram />}
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.2 }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        className="social-svg"
      >
        {<IoLogoGithub />}
      </motion.a>
    </div>
  );
}

export default Social;

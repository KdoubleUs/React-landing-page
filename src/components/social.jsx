import React from "react";
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import styled from "styled-components";

const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
function Social() {
  return (
    <motion.div
      className="social-links"
      variants={fadeFromLeft}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="social-svg"
      >
        {<IoLogoTwitter />}
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/kevinwunyc/"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="social-svg"
      >
        {<IoLogoLinkedin />}
      </motion.a>
      <motion.a
        href="https://www.instagram.com/KdoubleUs/"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="social-svg"
      >
        {<IoLogoInstagram />}
      </motion.a>
      <motion.a
        href="https://github.com/KdoubleUs"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="social-svg"
      >
        {<IoLogoGithub />}
      </motion.a>
      <motion.a
        href="mailto:kevinwuinbox@gmail.com"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="social-svg"
      >
        {<AiOutlineMail />}
      </motion.a>
    </motion.div>
  );
}

export default Social;

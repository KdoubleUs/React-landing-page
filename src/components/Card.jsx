import React from "react";
import { IoMdFolder } from "react-icons/io";
import { FcOpenedFolder } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
import styledComponents from "styled-components";

function Card(props) {
  return (
    <motion.div
      className="card-container"
      whileHover={{ y: -10, boxShadow: "10px 10px 0 rgba(236, 236, 236, 0.4)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div class="card-head">
        <h3 className="card-title">{props.title}</h3>
        {/* <FcOpenedFolder className="fclogo" href={props.link} /> */}
        <motion.a
          href={props.link}
          target="_blank"
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FcOpenedFolder className="fclogo" />
        </motion.a>
        <motion.a
          href={props.github}
          target="_blank"
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <IoLogoGithub className="fclogo" />
        </motion.a>
      </div>
      <p>{props.text}</p>
      <h4 className="card-tool">{props.tools}</h4>
    </motion.div>
  );
}

export default Card;

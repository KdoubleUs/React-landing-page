import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

function Contact() {
  return (
    <Section>
      <form className="contact-form">
        <label className="label">
          Name:
          <motion.input
            type="text"
            placeholder="insert your name"
            whileFocus={{ boxShadow: "3px 3px 0 rgba(255,245,10, 0.9)" }}
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="inputs"
          />
        </label>
        <label>
          Email:
          <motion.input
            type="text"
            placeholder="insert your email"
            whileFocus={{ boxShadow: "3px 3px 0px rgba(255,245,10, 0.9)" }}
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="inputs"
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            whileFocus={{ boxShadow: "3px 3px 0px rgba(255,245,10, 0.9)" }}
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="inputs"
          />
        </label>
      </form>
    </Section>
  );
}

export default Contact;

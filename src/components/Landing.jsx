import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import img from "/Users/kdoubleu/sei/projects/react-personal-profile/src/images/computer-programmer-icon-7-removebg-preview.png";
export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Container = styled.section`
display:grid; 
grid-template-columns: 1fr 1fr; 
height:100vh; 
padding: 3rem calc((100vw-1300px) / 2) @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
`;
const ColumnLeft = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  justify-item: flex-start;
  justify-content: center;
  align-item: flex-start;
  margin: 0 0 10em 6em;
  overflow: visible;
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-item: flex-start;
  justify-content: center;
  align-item: flex-start;
`;

const fadeFromBelow = {
  hidden: { opacity: 0, y: 1000 },
  visible: { opacity: 1, y: 0 },
};
export default function Landing() {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.p
            className="top-head"
            variants={fadeFromBelow}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Hi, my name is{" "}
          </motion.p>
          <motion.h1
            className="name-title"
            variants={fadeFromBelow}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2 }}
          >
            Kevin Wu.
          </motion.h1>
          <motion.p
            className="bottom-head"
            variants={fadeFromBelow}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.4 }}
          >
            I am a full-stack engineer looking to progress my career in
            becomming a better coder. I'm looking for a new adventure in my
            coding journey. I can't wait for what the future lies ahead for me.
          </motion.p>
        </ColumnLeft>
        <ColumnRight>
          <img src={img} height="400" width="400" className="hero" />
        </ColumnRight>
      </Container>
    </Section>
  );
}

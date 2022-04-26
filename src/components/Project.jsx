import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "./Landing";

const Container = styled.section`
display: grid; 
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr; 
height: 100vh; 
width: 80%;
padding: 3rem calc((100vw-1300px) / 2) @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

`;

function Project() {
  return (
    <Section>
      <Container>
        <h1> My Projects</h1>
      </Container>
    </Section>
  );
}

export default Project;

import React from "react";
import { motin } from "framer-motion";
import styled from "styled-components";

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
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-item: flex-start;
  justify-content: center;
  align-item: flex-start;
`;
export default function Landing() {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>What I have</h1>
        </ColumnLeft>
        <ColumnRight>
          <h1>What I have</h1>
        </ColumnRight>
      </Container>
    </Section>
  );
}

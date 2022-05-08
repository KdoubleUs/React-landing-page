import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import personalImg from "../images/personal-image.jpg";
const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 70%;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 1.8;
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
`;
function AboutMe() {
  return (
    <Section id="about">
      <Container>
        <ColumnLeft>
          <h1 className="aboutme-title">Who Am I? </h1>
          <div>
            <p>
              <span className="span-text">
                Hello everyone! My name is Kevin Wu and I am a Software
                developer from New York City.
              </span>
              I love to build projects for the webs. I graduated from John Jay
              College with a degree in Forensic Chemistry and minor in
              psychology. I transition to software development when I was first
              introuduce to HTML5 and CSS3. I instantly fell in love with the
              freedom, creativity, and the ability to control what i do and
              create. I knew right away that coding was a career path i want to
              take. I love the complexity and challenges that coding present.
            </p>
            <p>
              The inspiration and liberty of building a website from scratch was
              so appealing to me and It's because of this passion, I continue to
              love software development.
              <span className="span-text">
                I continue to learn everyday and I enjoy every step of the
                journey. I want to take my coding experiences and skills to new
                heights.
              </span>
            </p>
          </div>
        </ColumnLeft>
        <ColumnRight>
          <img src={personalImg} className="personal-img" alt="none" />
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default AboutMe;

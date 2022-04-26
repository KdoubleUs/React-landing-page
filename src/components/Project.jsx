import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "./Landing";
import Card from "./Card";
const Container = styled.section`
display: grid; 
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr; 
height: 80vh; 
width: 70%;
margin-top: 2em;
padding: 3rem calc((100vw-1300px) / 2) @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

`;

function Project() {
  return (
    <div id="project">
      <h1 className="prj-title"> Projects Collection</h1>
      <Section>
        <Container>
          <Card
            title="Restaurant App"
            text="Full Crud Application of a restaurant App. Find New York City top spots
          to hangout, eat, or drink."
            tools="EXPRESSJS || NODEJS || MONGOOSE || MONGODB "
          ></Card>
          <Card
            title="Restaurant App"
            text="Full Crud Application of a restaurant App. Find New York City top spots
          to hangout, eat, or drink."
            tools="EXPRESSJS || NODEJS || MONGOOSE || MONGODB "
          ></Card>
          <Card
            title="Restaurant App"
            text="Full Crud Application of a restaurant App. Find New York City top spots
          to hangout, eat, or drink."
            tools="EXPRESSJS || NODEJS || MONGOOSE || MONGODB "
          ></Card>
          <Card
            title="Restaurant App"
            text="Full Crud Application of a restaurant App. Find New York City top spots
          to hangout, eat, or drink."
            tools="EXPRESSJS || NODEJS || MONGOOSE || MONGODB "
          ></Card>
          <Card
            title="Restaurant App"
            text="Full Crud Application of a restaurant App. Find New York City top spots
          to hangout, eat, or drink."
            tools="EXPRESSJS || NODEJS || MONGOOSE || MONGODB "
          ></Card>{" "}
          <Card
            title="Restaurant App"
            text="Full Crud Application of a restaurant App. Find New York City top spots
        to hangout, eat, or drink."
            tools="EXPRESSJS || NODEJS || MONGOOSE || MONGODB "
          ></Card>
        </Container>
      </Section>
    </div>
  );
}

export default Project;

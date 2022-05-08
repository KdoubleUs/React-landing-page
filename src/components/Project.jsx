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
padding: 3rem calc((100vw-1300px) / 2) @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;

`;

function Project() {
  return (
    <div id="project">
      <h1 className="prj-title"> Projects Collection</h1>
      <Section className="project-section">
        <Container className="project-container">
          <Card
            title="Restaurant App"
            text="Full Crud Application of a restaurant App. Find New York City top spots
          to hangout, eat, or drink."
            tools="EXPRESSJS || NODEJS || MONGOOSE || MONGODB || FIREBASE || NETLIFY || HEROKU"
          ></Card>
          <Card
            title="Pokemon PokeDex Modal UI"
            text="Modal user interface application. Creating a library of the original 151 kanto pokemon from my childhood."
            tools="JAVASCRIPT || NODEJS || BOOTSTRAP|| REST-API"
          ></Card>
          <Card
            title="Card War Game"
            text="A game of card war using vanilla javascript, css, and html. This game focuses on the fundamental of object-oriented programming, event-handling, and conditional rendering.
             A simple and fun game to play!"
            tools="JAVASCRIPT || HTML5 || CSS3"
          ></Card>
          <Card
            title="LinkedFin (IN-PROGRESS)"
            text="Full Crud Application of a restaurant App. Find New York City top spots
          to hangout, eat, or drink."
            tools="PYTHON3 || DJANGO || REACTJS || JAVASCRIPT || HEROKU || NETLIFY "
          ></Card>
          <Card title="IN-PROGRESS" text="NA" tools="NA "></Card>
          <Card title="IN-PROGRESS" text="NA" tools="NA"></Card>
        </Container>
      </Section>
    </div>
  );
}

export default Project;

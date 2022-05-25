import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "./Landing";
import Card from "../components/Card";
import "../style/experience.css";
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
            link="https://wheretony.netlify.app"
            github=" https://github.com/KdoubleUs/Restaurant-CRUD-WebApp"
          ></Card>
          <Card
            title="LinkedFin"
            link="https://linkedfinkw.netlify.app/"
            text="Full Crud Application of a restaurant App. Find New York City top spots
            to hangout, eat, or drink."
            tools="PYTHON3 || DJANGO || REACTJS || JAVASCRIPT || HEROKU || NETLIFY "
          ></Card>
          <Card
            title="Pokemon PokeDex Modal UI"
            text="Modal user interface application. Creating a library of the original 151 kanto pokemon from my childhood."
            tools="JAVASCRIPT || NODEJS || BOOTSTRAP|| REST-API"
            link="https://kantopokedemodal.netlify.app "
            github="https://github.com/KdoubleUs/Pokemon-React-UI-Modal"
          ></Card>
          <Card
            title="Cross-Road Game"
            text="A fun little vanilla javascript game where I used 2D-collision and event handling to make a block version of frogger"
            link="https://crossroadkw.netlify.app/"
            github="https://github.com/KdoubleUs/Crossing-Game"
            tools="Javascript || HTML5 || CSS3 || NETLIFY "
          ></Card>
          <Card
            title="Card War Game"
            text="A game of card war using vanilla javascript, css, and html. This game focuses on the fundamental of object-oriented programming, event-handling, and conditional rendering.
             A simple and fun game to play!"
            tools="JAVASCRIPT || HTML5 || CSS3"
            link="https://cardwarbattles.netlify.app"
            github=" https://github.com/KdoubleUs/KW-Card-War-Game-M"
          ></Card>
          <Card title="PROJECT" text="IN-PROGRESS" tools="NA"></Card>
        </Container>
      </Section>
    </div>
  );
}

export default Project;

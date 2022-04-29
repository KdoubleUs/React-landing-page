import React from "react";
import styled from "styled-components";
// import img from "../images/react.svg";
import SetOfImage from "../files/imageSet";
import gear from "../images/gears2.png";

// import Container from "../components/Project";
const Container = styled.section`
  display: grid;
  margin: 0;
  padding: 0;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  // grid-template-rows: 1fr 1fr;
  height: 100vh;
  width: 100%;
  margin-top: 2em;
  // padding: 3rem calc((100vw-1300px) / 2) @media screen and (max-width: 768px) {
  //     grid-template-columns: 1fr;
`;
// const Section = styled.section`
//   height: 80vh;
//   width: 80%;
// `;
function Experience() {
  return (
    <div className="experience" id="experience">
      <Container className="big-Container">
        <div className="experience-text">
          <h3 id="et-1">SKILLS &amp; TOOLS</h3>
          <h1 id="et-2">My set of skills and tools that I use to develop</h1>
          <h3 id="et-3">Check out my aresenal of tools: </h3>
        </div>
        {/* <div className="development">
          <h1>Development</h1>
          <ul className="ul-dev">
            <li>JavaScript</li>
            <li>Python</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>React</li>
            <li>DJANGO</li>
            <li>Flask</li>
            <li>Mongoose</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div> */}
        {/* <div className="tools-section">
          <h1 className="tools-title"> Tools</h1>
          <ul className="tools">
            <li>Git/Github</li>
            <li>Heroku</li>
            <li>Netlify</li>

            <li>Command Line</li>
            <li>Postman</li>
            <li>Chrome DevTools</li>

            <li>Firebase</li>
            <li>AWS</li>
          </ul>
        </div> */}
        {/* <div className="database">
          <h1 className="db-title"> Database</h1>
          <ul className="database-title">
            <li>MongoDB</li>
            <li>Postgres</li>
            <li>MySQL</li>
          </ul>
        </div> */}
        <div className="setoftools">
          {SetOfImage.map((item, index) => (
            <div>
              <img
                src={require("../files/icons/" + item.image + ".svg")}
                height={75}
                className="toolitem"
                id={"tool" + item.number}
              />
            </div>
          ))}
        </div>
        <div className="tools-section">
          <h1 className="tools-title"> "Tools"</h1>
          <ul className="tools">
            <li>
              <span>
                <img src={gear} height={30} className="gear" />
                Git/Github
              </span>
            </li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Command Line</li>
            <li>Postman</li>
            <li>Chrome DevTools</li>
            <li>Firebase</li>
            <li>AWS</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Experience;

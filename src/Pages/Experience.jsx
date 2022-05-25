import React from "react";
import styled from "styled-components";
// import img from "../images/react.svg";
import SetOfImage from "../files/imageSet";
import gear from "../images/gears2.png";
import Tools from "../files/tools";
import "../style/tools.css";
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
          <h1 id="et-2">My Set Of Skills And Tools That I Use To Develop</h1>
          <h3 id="et-3">Check out my aresenal of tools: </h3>
        </div>

        <div className="setoftools">
          {SetOfImage.map((item, index) => (
            <div>
              <img
                src={require("../files/icons/" + item.image + ".svg")}
                height={85}
                className="toolitem"
                id={"tool" + item.number}
              />
            </div>
          ))}
        </div>
        <div className="tools-section">
          <h1 className="tools-title"> "Tools"</h1>
          <ul className="tools">
            {Tools.map((items, index) => (
              <li>
                <span>
                  <img src={gear} height={26} className="gear" />
                  {items.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Experience;

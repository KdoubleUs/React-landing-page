import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import "../style/contact.css";
const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Container = styled.section`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

function Contact() {
  return (
    <Section id="contact">
      <Container className="contact-container">
        <h1 className="contact-title"> Lets Connect </h1>
        <p id="contact-text">
          Click on one of the social links on the side of the page to connect to
          one of my media pages. Feel free to send me an email about anything. I
          love to meet new people and make new friends! Lets Connect
        </p>
        <div className="contact-input">
          <div className="contact-innerBox">
            <div className="tr">
              <span className="label"> Name:</span>
              <motion.input
                type="text"
                placeholder="insert your name"
                whileFocus={{
                  boxShadow: "3px 5px 0 rgb(101, 247, 191)",
                }}
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="inputs"
              />
            </div>
            <div className="tr">
              <span className="label"> Email:</span>
              <motion.input
                type="text"
                placeholder="insert your email"
                whileFocus={{
                  boxShadow: "3px 5px 0px rgb(101, 247, 191)",
                }}
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="inputs"
              />
            </div>
            <div>
              <span className="label"> Message:</span>
              <motion.input
                type="text"
                whileFocus={{
                  boxShadow: "3px 5px 0px rgb(101, 247, 191)",
                }}
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="inputs"
              />
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          className="submitbtn"
          whileHover={{
            scale: 1.05,
          }}
          initial="none"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          Submit
        </motion.button>
        <Footer />
      </Container>
    </Section>
  );
}

export default Contact;

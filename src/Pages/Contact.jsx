import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../components/footer";

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
      <Container>
        <h1 className="contact-title"> Lets Connect </h1>
        <p>
          Click on one of the social links on the side of the page to connect to
          one of my media pages. Feel free to send me an email about anything. I
          love to meet new people and make new friends! Lets Connect
        </p>
        <form className="contact-form">
          <table className="contact-form">
            <tr>
              <td align="">
                <span className="label"> Name:</span>
                <motion.input
                  type="text"
                  placeholder="insert your name"
                  whileFocus={{ boxShadow: "3px 5px 0 rgba(0,255,0, 0.9)" }}
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inputs"
                />
              </td>
            </tr>
            <tr>
              <td align="">
                <span className="label"> Email:</span>
                <motion.input
                  type="text"
                  placeholder="insert your email"
                  whileFocus={{
                    boxShadow: "3px 5px 0px rgba(0,255,0, 0.9)",
                  }}
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inputs"
                />
              </td>
            </tr>
            <tr>
              <td align="" className="label">
                <span className="label"> Message:</span>
                <motion.input
                  type="text"
                  whileFocus={{
                    boxShadow: "3px 5px 0px rgba(0,255,0, 0.9 )",
                  }}
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inputs"
                />
              </td>
            </tr>

            <motion.button
              type="submit"
              className="submitbtn"
              whileHover={{
                scale: 1.1,
              }}
              initial="none"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              Submit
            </motion.button>
          </table>
        </form>
        <Footer />
      </Container>
    </Section>
  );
}

export default Contact;

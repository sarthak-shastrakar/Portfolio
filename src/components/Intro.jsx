import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 60vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 35%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 65%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;
const SubBox = styled.div`
  position: relative;
  display: flex;
`;

const Text = styled.div`
  font-size: calc(1em + 1.1vw);
  padding: 1rem;
  cursor: pointer;
  font-weight: 900;
  display: flex;
  font-family: cursive;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    // color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.6rem + 1.5vw);
    font-weight: 300;
    font-family: cursive;

    background: rgb(21, 140, 219);
    background: Radial-gradient(
      circle farthest-corner at center center,
      #b8e1fc 0%,
      #231421 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  background: #fffeef;
  background: linear-gradient(to right, #fffeef 0%, #7277ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <TypeAnimation
            sequence={["I'm Sarthak Shastrakar", 1000]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "1.5rem", display: "inline-block" }}
            repeat={0}
          />

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
              "Aspiring Full Stack Web Developer",
              1000,
              "Passionated about MERN stack developer",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "2rem", display: "inline-block" }}
            repeat={Infinity}
          />
        </Text>
      </SubBox>
    </Box>
  );
};

export default Intro;

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import "./styles.css";

//images
import reactjs from "../assets/Skills/react.png";
import nodejs from "../assets/Skills/node.png";
import javascript from "../assets/Skills/javascript.png";
import html from "../assets/Skills/html.jpg";
import css from "../assets/Skills/css.jpg";
import bootstrap from "../assets/Skills/bootstrap.jpg";
import mern from "../assets/Skills/MERN.jpg";
import java from "../assets/Skills/java.jpg";
import dsa from "../assets/Skills/dsa.jpg";

const Box = styled.div`
  // background-color: ${(props) => props.theme.body};
  background: linear-gradient(132deg, rgb(251, 251, 255) 0.00%, rgb(215, 223, 252) 100.00%);
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

// const Main = styled.div`
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -47%);
//   width: 80vw;
//   height: 75vh;
//   display: fle;
//   padding: 20px;
//   overflow-y: scroll;
//   overflow-x: hidden;
//   background: linear-gradient(
//     132deg,
//     rgb(115, 93, 142) 0%,
//     rgb(58, 33, 86) 100%
//   );
//  `;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 4.5,
    },
  },
};

const MySkillsPage = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <Box className="box">
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-mirror="true">
          <div className="MAIN">
            <div data-aos="zoom-out-down" data-aos-duration="3000">
              <div className="skills_1">
                <div class="wrapper" variants={container} initial="hidden" animate="show">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={reactjs} alt="" />
                        <p>React.js</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={nodejs} alt="" />
                        <p>Node.js</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={javascript} alt="" />
                        <p>JavaScript</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={html} alt="" style={{width:"100px"}}/>
                        <p>HTML5</p>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={css} alt="" />
                        <p>CSS3</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={bootstrap} alt="" />
                        <p>BOOTSTRAP</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={mern} alt="" style={{height:"50px"}}/>
                        <p>MERN</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={java} alt="" />
                        <p>JAVA</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="wrapper">
                  <ul class="items">
                    <li class="item">
                      <div className="inner">
                        <img src={dsa} alt="" />
                        <p>DS&A</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BigTitle text="TOP SKILLS" top="75%" right="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

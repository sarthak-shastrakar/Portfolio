import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";
import "../assets/styles/About.css";
// const Box = styled.div`
//   background-color: ${(props) => props.theme.body};
//   width: 100vw;
//   height: 90vh;
//   position: relative;  
//   overflow: hidden;
// `;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <div className="Box">
        <div className="Logo">
          <LogoComponent theme="dark" />
        </div>
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <div className="Main_Content">
        <div className="Main">
          <div
            data-aos="zoom-in-left"
            data-aos-duration="3000"
            data-aos-mirror="true"
          >
            <p>
              I'm a dedicated computer engineering student passionate about
              crafting innovative web applications. With a strong foundation in
              MERN stack technologies (MongoDB, Express.js, React.js, Node.js),
            </p>
            <br />
            I've honed my skills in building dynamic and user-friendly web
            interfaces. I'm constantly exploring new technologies and eager to
            contribute to challenging projects.
            <br />
            <p>You can connect with me via social links.</p>
            <div className="Social_Links">
              <ul>
                <li>
                  {" "}
                  <a
                    href="mailto:sarthakshastrakar9@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    E-Mail
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/sarthak-shastrakar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sarthakshastrakar91/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.naukri.com/mnjuser/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Naukri
                  </a>
                </li>
                <li>
                  <a href="tel:+8767901968">Phone</a>
                </li>
              </ul>
            </div>
          </div></div>
        </div>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;

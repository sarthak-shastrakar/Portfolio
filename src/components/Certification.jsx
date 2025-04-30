import React from "react";
import Animation from "../subComponents/Animation";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";
import SocialIcons from "../subComponents/SocialIcons";
// import { motion } from "framer-motion";
import certificate1 from "../assets/Images/certificate1.jpg";
import certificate2 from "../assets/Images/certificate2.jpg";
import certificate3 from "../assets/Images/certificate3.jpg";
import astronaut from "../assets/Images/spaceman.png";
import Resume from "../assets/Images/My-Resume.pdf";
import "../assets/styles/certification.css";

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 2%;
  right: 3%;
  width: 13vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;


function Certification() {
  return (
    <ThemeProvider theme={DarkTheme}>
    <div className="container">
       {/* <Animation/>   */}
      <SocialIcons theme="dark" />
      <PowerButton />
      <Spaceman>
          <img src={astronaut} alt="spaceman" />
      </Spaceman>
      <div className="box">
      
        <div className="Main_Certificae_section">
       
          <div
            className="Resume_certificate"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="Resume_title">
              <a target="_blank">My Resume..</a>
              
            </div>
            <button className="btn">
              <a href={Resume}>Resume</a>
            </button>
          </div>
          <img
            src={certificate1}
            alt=""
            srcset=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <img
            src={certificate2}
            alt=""
            srcset=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
            <img
            src={certificate3}
            alt=""
            srcset=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
      </div>
      <BigTitle text="CERTIFICATION" top="75%" right="5%" className="Text-Heading"/>
    </div>
    </ThemeProvider>
  );
}

export default Certification;

import React from "react";
import Animation from "../subComponents/Animation";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";
import SocialIcons from "../subComponents/SocialIcons";
// import { motion } from "framer-motion";
import certificate1 from "../assets/Images/certificate1.jpg";
import certificate2 from "../assets/Images/certificate2.jpg";
import Resume from "../assets/Images/Reader_RESUME.docx";
import "../assets/styles/certification.css";

function Certification() {
  return (
    <div className="container">
      <Animation/>
      <SocialIcons theme="light" />
      <PowerButton />
      <div className="box">
        <div className="Main_Certificae_section">
          <div
            className="Resume_certificate"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="Resume_title">
              <p>My Resume..</p>
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
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
      </div>
      <BigTitle text="CERTIFICATION" top="75%" right="5%" />
    </div>
  );
}

export default Certification;

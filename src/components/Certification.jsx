// import React from "react";
// import Animation from "../subComponents/Animation";
// import styled, { keyframes, ThemeProvider } from "styled-components";
// import { DarkTheme } from "./Themes";
// import PowerButton from "../subComponents/PowerButton";
// import BigTitle from "../subComponents/BigTitlte";
// import SocialIcons from "../subComponents/SocialIcons";
// // import { motion } from "framer-motion";
// import certificate1 from "../assets/Images/certificate1.jpg";
// import certificate2 from "../assets/Images/certificate2.jpg";
// import certificate3 from "../assets/Images/certificate3.jpg";
// import astronaut from "../assets/Images/spaceman.png";
// import Resume from "../assets/Images/My-Resume.pdf";
// import "../assets/styles/certification.css";

// const float = keyframes`
// 0% { transform: translateY(-10px) }
// 50% { transform: translateY(15px) translateX(15px) }
// 100% { transform: translateY(-10px) }
// `;
// const Spaceman = styled.div`
//   position: absolute;
//   top: 2%;
//   right: 3%;
//   width: 13vw;
//   animation: ${float} 4s ease infinite;
//   img {
//     width: 100%;
//     height: auto;
//   }
// `;


// function Certification() {
//   return (
//     <ThemeProvider theme={DarkTheme}>
//     <div className="container">
//        {/* <Animation/>   */}
//       <SocialIcons theme="dark" />
//       <PowerButton />
//       <Spaceman>
//           <img src={astronaut} alt="spaceman" />
//       </Spaceman>
//       <div className="box">
      
//         <div className="Main_Certificae_section">
       
//           <div
//             className="Resume_certificate"
//             data-aos="flip-left"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"
//           >
//             <div className="Resume_title">
//               <a target="_blank">My Resume..</a>
              
//             </div>
//             <button className="btn">
//               <a href={Resume}>Resume</a>
//             </button>
//           </div>
//           <img
//             src={certificate1}
//             alt=""
//             srcset=""
//             data-aos="flip-left"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"
//           />
//           <img
//             src={certificate2}
//             alt=""
//             srcset=""
//             data-aos="flip-left"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"
//           />
//             <img
//             src={certificate3}
//             alt=""
//             srcset=""
//             data-aos="flip-left"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"
//           />
//         </div>
//       </div>
//       <BigTitle text="CERTIFICATION" top="75%" right="5%" className="Text-Heading"/>
//     </div>
//     </ThemeProvider>
//   );
// }

// export default Certification;




"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { DarkTheme } from "./Themes"
import PowerButton from "../subComponents/PowerButton"
import BigTitle from "../subComponents/BigTitlte"
import SocialIcons from "../subComponents/SocialIcons"
import certificate1 from "../assets/Images/certificate1.jpg"
import certificate2 from "../assets/Images/certificate2.jpg"
import certificate3 from "../assets/Images/certificate3.jpg"
import astronaut from "../assets/Images/spaceman.png"
import Resume from "../assets/Images/My-Resume.pdf"
import "../assets/styles/certification.css";

// Simple Styled Components
const Container = styled.div`
  background: #000;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
  padding: 2rem;
`

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 2%;
  right: 3%;
  width: 13vw;
  z-index: 10;
  
  img {
    width: 100%;
    height: auto;
  }
`

const MainContent = styled(motion.div)`
  position: relative;
  z-index: 5;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
`

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 15px;
  padding: 2rem 1rem;
  text-align: center;
  backdrop-filter: blur(10px);
`

const CertificationGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`

const CertificateCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
`

const ResumeSection = styled(motion.div)`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 4rem;
`

function Certification() {
  const [selectedCert, setSelectedCert] = useState(null)

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const spacemanVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const certificates = [
    {
      id: 1,
      image: certificate1,
      title: "Web Development Certification",
      description: "Full-stack web development with React, Node.js, and modern technologies",
      date: "2023",
      issuer: "Tech Academy",
    },
    {
      id: 2,
      image: certificate2,
      title: "JavaScript Advanced",
      description: "Advanced JavaScript concepts and modern ES6+ features",
      date: "2023",
      issuer: "Code Institute",
    },
    {
      id: 3,
      image: certificate3,
      title: "UI/UX Design",
      description: "User interface design and user experience principles",
      date: "2023",
      issuer: "Design School",
    },
  ]

   const stats = [
  //   { number: "15+", label: "Certificates" },
  //   { number: "3+", label: "Years Experience" },
  //   { number: "50+", label: "Projects" },
  //   { number: "100%", label: "Satisfaction" },
   ]

  return (
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <SocialIcons theme="dark" />


        <PowerButton />

        {/* Animated Spaceman */}
        <Spaceman
          variants={spacemanVariants}
          animate="float"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src={astronaut || "/placeholder.svg"} alt="spaceman" />
        </Spaceman>

        <MainContent variants={containerVariants} initial="hidden" animate="visible">
          {/* Stats Section */}
          <StatsGrid variants={itemVariants}>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="stat-card"
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  className="stat-number"
                >
                  {stat.number}
                </motion.h3>
                <p className="stat-label">{stat.label}</p>
              </StatCard>
            ))}
          </StatsGrid>

          {/* Resume Section */}
          <ResumeSection variants={itemVariants} whileHover={{ scale: 1.02 }} className="resume-section">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="resume-title"
            >
              Professional Resume
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="resume-description"
            >
              Download my complete professional resume with detailed experience and skills
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="download-btn"
            >
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </motion.button>
          </ResumeSection>

          {/* Certificates Grid */}
          <CertificationGrid variants={itemVariants}>
            {certificates.map((cert, index) => (
              <CertificateCard
                key={cert.id}
                variants={itemVariants}
                {...cardHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSelectedCert(cert)}
                className="certificate-card"
                layoutId={`cert-${cert.id}`}
              >
                <motion.img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="cert-title"
                >
                  {cert.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="cert-description"
                >
                  {cert.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="cert-meta"
                >
                  <span className="cert-date">{cert.date}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </motion.div>
              </CertificateCard>
            ))}
          </CertificationGrid>
        </MainContent>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="modal-content"
                layoutId={`cert-${selectedCert.id}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.div
                  className="modal-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3>{selectedCert.title}</h3>
                  <p>{selectedCert.description}</p>
                  <div className="modal-meta">
                    <span>Issued: {selectedCert.date}</span>
                    <span>By: {selectedCert.issuer}</span>
                  </div>
                </motion.div>
                <motion.button
                  className="close-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCert(null)}
                >
                  ×
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <BigTitle text="CERTIFICATIONS" top="85%" right="5%" />
      </Container>
    </ThemeProvider>
  )
}

export default Certification

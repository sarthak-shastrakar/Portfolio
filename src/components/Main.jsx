import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import LogoComponent from "../subComponents/LogoComponent"
import SocialIcons from "../subComponents/SocialIcons"
import Intro from "./Intro"
import Dragon from "../assets/Images/image_1.png"
import "./styles.css"

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const pulse = keyframes`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.6; transform: scale(1); }
`

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

// Styled components with enhanced styling
const MainContainer = styled.div`
  background-image: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%);
    pointer-events: none;
  }
  
  h2, h3, h4, h5, h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  
  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  padding: 1.5rem;
  height: 100%;
  position: relative;
  z-index: 1;
`

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  pointer-events: none;
`

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
  
  &.active {
    color: #8b5cf6 !important;
  }
`

const CONNECT = styled(NavLinkStyled)`
  position: absolute;
  top: 50%;
  right: -1.8rem;
  transform: rotate(90deg);
  
  .nav-text {
    position: relative;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5rem 1.5rem;
    // background: rgba(139, 92, 246, 0.1);
    border-radius: 2rem;
    border: 1px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(139, 92, 246, 0.2);
      border-color: rgba(139, 92, 246, 0.5);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 2rem;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      background-size: 200% 100%;
      animation: ${shimmer} 3s infinite;
      pointer-events: none;
    }
  }
`

const WORK = styled(NavLinkStyled)`
  position: absolute;
  top: 50%;
  left: -1.2rem;
  transform: rotate(-90deg);
  
  .nav-text {
    position: relative;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5rem 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 2rem;
    border: 1px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(139, 92, 246, 0.2);
      border-color: rgba(139, 92, 246, 0.5);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 2rem;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      background-size: 200% 100%;
      animation: ${shimmer} 3s infinite;
      pointer-events: none;
    }
  }
`

const Certification = styled(NavLinkStyled)`
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  
  .nav-text {
    position: relative;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5rem 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 2rem;
    border: 1px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(139, 92, 246, 0.2);
      border-color: rgba(139, 92, 246, 0.5);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 2rem;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      background-size: 200% 100%;
      animation: ${shimmer} 3s infinite;
      pointer-events: none;
    }
  }
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
`

const ABOUT = styled(NavLinkStyled)`
  .nav-text {
    position: relative;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5rem 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 2rem;
    border: 1px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(139, 92, 246, 0.2);
      border-color: rgba(139, 92, 246, 0.5);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 2rem;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      background-size: 200% 100%;
      animation: ${shimmer} 3s infinite;
      pointer-events: none;
    }
  }
`

const SKILLS = styled(NavLinkStyled)`
  .nav-text {
    position: relative;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5rem 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 2rem;
    border: 1px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(139, 92, 246, 0.2);
      border-color: rgba(139, 92, 246, 0.5);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 2rem;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      background-size: 200% 100%;
      animation: ${shimmer} 3s infinite;
      pointer-events: none;
    }
  }
`

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  z-index: 3;

  .dragon-container {
    position: relative;
    width: ${(props) => (props.click ? "80px" : "120px")};
    height: ${(props) => (props.click ? "80px" : "120px")};
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.1);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    animation: ${pulse} 3s infinite ease-in-out;
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
    
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 50%;
      border: 2px solid rgba(139, 92, 246, 0.5);
      animation: ${rotate} 10s linear infinite;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border-radius: 50%;
      border: 1px solid rgba(139, 92, 246, 0.3);
      animation: ${rotate} 15s linear infinite reverse;
    }
    
    img {
      width: ${(props) => (props.click ? "70px" : "100px")};
      height: ${(props) => (props.click ? "70px" : "100px")};
      object-fit: contain;
      transition: all 0.5s ease;
      filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.8));
      animation: ${float} 3s ease-in-out infinite;
    }
  }
  
  span {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
    font-size: 1rem;
    color: white;
    letter-spacing: 2px;
    font-weight: 500;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, white, transparent);
    }
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
  const [click, setClick] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Create random particles
    const particlesArray = []
    for (let i = 0; i < 50; i++) {
      particlesArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
      })
    }
    setParticles(particlesArray)

    // Animate particles
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y + particle.speed > 100 ? 0 : particle.y + particle.speed,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleClick = () => setClick(!click)

  return (
    <MainContainer>
      <ParticlesContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.size / 4,
            }}
          />
        ))}
      </ParticlesContainer>

      <DarkDiv click={click} />
      <Container>
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click} onClick={handleClick}>
          <div className="dragon-container">
            <img src={Dragon || "/placeholder.svg"} alt="Dragon" />
          </div>
          <span>click</span>
        </Center>

        <Certification to="/certification">
          <motion.div
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className="nav-text">Certified</p>
          </motion.div>
        </Certification>

        <CONNECT to="/connect">
          <motion.div
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className="nav-text">Connect</p>
          </motion.div>
        </CONNECT>

        <WORK to="/work" click={+click}>
          <motion.div
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className="nav-text">Work</p>
          </motion.div>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={+click}>
            <motion.div
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p className="nav-text">About</p>
            </motion.div>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.div
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p className="nav-text">My Skills</p>
            </motion.div>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main











// part 2

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "../components/AllSvgs";

const GlassCard = styled(motion.div)`
  width: 19rem;
  min-height: 420px;
  background: linear-gradient(135deg, #ffffffaa, #f0f4ffcc);
  border-radius: 1rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
  margin: 1rem;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #1f2937;
  margin-bottom: 0.6rem;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
`;

const CardDesc = styled.p`
  font-size: 1.05rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;


const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Tag = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #2563eb;
  background: rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
`;


const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VisitBtn = styled.a`
  position: relative;
  padding: 0.7rem 1.4rem;
  background: linear-gradient(135deg, #6366f1, #7c3aed);
  color: #fff;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(124, 58, 237, 0.3);
  transition: all 0.3s ease;
  overflow: hidden;
  user-select: none;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 60%);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.5);
  }

  &:hover:before {
    opacity: 1;
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0 3px 12px rgba(124, 58, 237, 0.4);
  }
`;


const GitLink = styled.a`
  color: #6b7280;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #111827;
  }

  svg {
    fill: currentColor;
    transition: fill 0.3s ease;
  }
`;

const modernVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      duration: 0.6,
    },
  },
  whileHover: {
    scale: 1.03,
    rotate: 0.5,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};


const ModernGlassCard = ({ data }) => {
  const { name, description, tags, demo, github } = data;

  return (
    <GlassCard
  variants={modernVariants}
  initial="hidden"
  animate="visible"
  whileHover="whileHover"
  role="listitem"
  tabIndex={0}
  aria-label={`Project card for ${name}`}
>
      <div>
        <CardTitle>{name}</CardTitle>
        <CardDesc>{description}</CardDesc>
        <TagList>
          {tags.map((tag, idx) => (
            <Tag key={idx}>#{tag}</Tag>
          ))}
        </TagList>
      </div>
      <CardFooter>
        <VisitBtn href={demo} target="_blank" rel="noopener noreferrer">
          Visit
        </VisitBtn>
        <GitLink href={github} target="_blank" rel="noopener noreferrer">
          <Github width={28} height={28} />
        </GitLink>
      </CardFooter>
    </GlassCard>
  );
};

export default ModernGlassCard;

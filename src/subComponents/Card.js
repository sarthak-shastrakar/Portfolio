// import { motion } from "framer-motion";
// import React from "react";
// // import { NavLink } from 'react-router-dom';
// import styled from "styled-components";
// import { Github } from "../components/AllSvgs";
// import "../assets/styles/workpage.css";
// const Box = styled(motion.li)`
//   width: 18rem;
//   height: 55vh;
//   // background-color: ${(props) => props.theme.text};
//   background: linear-gradient(#fff2, transparent);
//   // box-shadow: 0px 0px 3px 1px #00000088;
//   // box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
//   box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
//   backdrop-filter: blur(10px);
//   cursor: pointer;
//   // color: ${(props) => props.theme.body};
//   color: white;
//   padding: 0.7rem 1.5rem;
//   margin-right: 8rem;
//   background: rgba(255, 255, 255, 0.15);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   border: 1px solid grey;
//   // transition: all 0.2s ease;

//   // &:hover {
//   //   background-color: ${(props) => props.theme.body};
//   //   color: ${(props) => props.theme.text};
//   //   border: 1px solid ${(props) => props.theme.text};
//   // }

//   &:hover {
//     transform: translateY(-20px);
//   }
// `;
// const Title = styled.h2`
//   font-size: calc(1em + 0.5vw);
// `;

// const Description = styled.h2`
//   font-size: calc(0.8em + 0.3vw);
//   font-family: "Karla", sans-serif;
//   font-weight: 500;
// `;
// const Tags = styled.div`
//   border-top: 2px solid ${(props) => props.theme.body};
//   padding-top: 0.5rem;
//   display: flex;
//   flex-wrap: wrap;
//   ${Box}:hover & {
//     border-top: 2px solid ${(props) => props.theme.text};
//   }
// `;
// const Tag = styled.span`
//   margin-right: 1rem;
//   font-size: calc(0.8em + 0.3vw);
// `;

// const Footer = styled.footer`
//   display: flex;
//   justify-content: space-between;
// `;

// const Link = styled.a`
//   background-color: ${(props) => props.theme.body};
//   color: ${(props) => props.theme.text};
//   text-decoration: none;
//   padding: 0.5rem calc(2rem + 2vw);
//   font-size: calc(1em + 0.5vw);

//   // ${Box}:hover & {
//   //   background-color: ${(props) => props.theme.text};
//   //   color: ${(props) => props.theme.body};
//   // }
// `;

// const Git = styled.a`
//   color: inherit;
//   text-decoration: none;
//   ${Box}:hover & {
//     & > * {
//       fill: ${(props) => props.theme.text};
//     }
//   }
// `;

// // Framer motion configuration
// const Item = {
//   hidden: {
//     scale: 0,
//   },
//   show: {
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//     },
//   },
// };

// const Card = (props) => {
//   const { id, name, description, tags, demo, github } = props.data;

//   return (
//     <Box key={id} variants={Item}>
//       <Title>{name}</Title>
//       <Description>{description}</Description>
//       <Tags>
//         {tags.map((t, id) => {
//           return <Tag key={id}>#{t}</Tag>;
//         })}
//       </Tags>
//       <Footer>
//         <Link href={demo} target="_blank">
//           <button class="button">Start</button>
//         </Link>
//         <Git href={github} target="_blank">
//           <Github width={30} height={30} />
//         </Git>
//       </Footer>
//     </Box>
//   );
// };

// export default Card;

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";

const Box = styled(motion.li)`
  width: 19rem;
  min-height: 65vh;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  cursor: pointer;
  color: #111827;
  padding: 2rem 2.5rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow-y: scroll;

  &:hover {
    transform: translateY(-12px) scale(1.05) rotate(1deg);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
  line-height: 1.1;
  user-select: none;
  transition: color 0.3s ease;

  ${Box}:hover & {
    color: #2563eb; /* Change color on hover */
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-family: "Karla", sans-serif;
  font-weight: 400;
  color: #6b7280;
  margin-bottom: 2rem;
  flex-grow: 1;
  user-select: text;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;

  ${Box}:hover & {
    animation: bounce 0.3s ease forwards;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
`;

const Tag = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: rgba(0, 0, 0, 0.25);
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  user-select: none;
  backdrop-filter: blur(8px);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.45);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  // background-color: #000;
  // color: #fff;
  // font-weight: 700;
  // font-size: 1.125rem;
  // padding: 0.85rem 3rem;
  // border-radius: 0.5rem;
  // text-decoration: none;
  // box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  // user-select: none;
  // transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;

  // &:hover,
  // &:focus-visible {
  //   background-color: #222;
  //   box-shadow: 0 10px 22px rgba(0, 0, 0, 0.45);
  //   transform: scale(1.05);
  //   outline: none;
  // }




  position: relative;
  margin: 0;
  padding: 0.8em 1em;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  background-color: #333;
  border-radius: 10px;
  color: #fff;
  font-weight: 300;
  font-size: 18px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

&:hover {
  animation: sh0 0.5s ease-in-out both;
}

@keyframes sh0 {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(7deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-7deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

&:hover span {
  animation: storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

&::before,
&::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
  z-index: -1;
  transform: translate(100%, -25%) translate3d(0, 0, 0);
}

&:hover::before,
&:hover::after {
  opacity: 0.15;
  transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
}

&:hover::before {
  transform: translate3d(50%, 0, 0) scale(0.9);
}

&:hover::after {
  transform: translate(50%, 0) scale(1.1);
}


`;

const Git = styled.a`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.3s ease;

  display: flex;
  align-items: center;

  &:hover {
    color: #111827;
  }

  svg {
    fill: currentColor;
    transition: fill 0.3s ease;
  }
`;

const itemVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 0.5, bounce: 0.3 },
  },
};

const Card = ({ data }) => {
  const { id, name, description, tags, demo, github } = data;

  return (
    <Box
      key={id}
      variants={itemVariants}
      initial="hidden"
      animate="show"
      role="listitem"
      tabIndex={0}
      aria-label={`Project card for ${name}`}
    >
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </Tags>
      <Footer>
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit demo for ${name}`}
        >
          VISIT
        </Link>
        <Git
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit GitHub repository for ${name}`}
        >
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;

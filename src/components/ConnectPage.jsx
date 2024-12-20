import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import AnchorComponent from "../subComponents/Anchor";
// import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";
import { Gmail, Github, LinkedinIcon, Phone } from "../components/AllSvgs";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  // background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />

        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <div className="Maincontent">
            <div className="Mainconnect_head">
              <p>Connect Me.</p>
              <h1>GET IN TOUCH</h1>
            </div>
            <div className="Mainconnect_contact">
              <div className="Maincontent_left">
                <form
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  action="https://formsubmit.co/3e402040bbbf75922b8b3b59a828011f"
                  method="POST"
                >
                  <input type="text" name="name" placeholder="Name" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    required
                  />
                  <textarea
                    name="message"
                    type="message"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button className="btn">
                    <span>Submit</span>
                  </button>
                </form>
              </div>
              <div className="Maincontent_right">
                <p>My Social Media..</p>
                <ul>
                  <li>
                    <a href="https://github.com/sarthak-shastrakar">
                      {" "}
                      <i>
                        <Github
                          width={25}
                          height={25}
                          style={{ backgroundColor: "transparent" }}
                        />
                      </i>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sarthakshastrakar91/">
                      <i>
                        <LinkedinIcon width={25} height={25} />
                      </i>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:sarthakshastrakar9@gmail.com">
                      <i>
                        <Gmail width={25} height={25} />
                      </i>
                      E-Mail
                    </a>
                  </li>
                  <li>
                    <a href="tel:+8767901968">
                      <i>
                        {" "}
                        <Phone width={25} height={25} />
                      </i>
                      Phone
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Center>
        {/* <BigTitle text="CONNECT" top="5rem" left="3rem" />  */}
      </Container>
    </MainContainer>
  );
};

export default BlogPage;

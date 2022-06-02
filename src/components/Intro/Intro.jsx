import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
import boy from "../../img/dd.png";
import glassesimoji from "../../img/solidity.png";
import thumbup from "../../img/node.png";
import crown from "../../img/react1.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/twit2.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Sahil Pachlore</span>
          <span>
            Fullstack Developer with high level of experience in web designing
            and Building in Web3.0
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/SahilPachlore">
          <img src={Github} alt=""/></a>
          <a href="https://www.linkedin.com/in/sahil-pachlore-a695b51a4">
          <img src={LinkedIn} alt=""/></a>
          <a href="https://twitter.com/0xsahil_?t=2J9hDBvPexKVeNb5AxPrPQ&s=09">
          <img src={Instagram} alt=""/></a>
         
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        <img src={boy} alt="" />
        {/* animation */}
      
        <motion.div
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={ crown} text1="Frontend" text2="Development" />
        </motion.div>

        <motion.div
          initial={{ top: "5%", left: "74%" }}
          whileInView={{ left: "50%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={glassesimoji} text1="Blockchain" text2="Development" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Backend" text2="Development" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

import React from "react";
import "./Footer.css";
import Wave from "../../img/foot2.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-twitter";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sahilpachlore@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/sahil-pachlore-a695b51a4">
          <Insta color="white" size={"3rem"} /></a>
          <a href="https://twitter.com/0xsahil_?t=2J9hDBvPexKVeNb5AxPrPQ&s=09">
          <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/SahilPachlore">
          <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

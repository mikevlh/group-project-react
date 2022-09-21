import React from "react";

import "./Footer.css";
import Card from "../UI/Card/Card";

function Footer() {
  return (
    <Card>
      <div className="footer">
        <h1>Contact Us</h1>
        <a href="https://github.com/DphnAgl" className="Social" target="_blank">
          <img
            src={require("../Footer/icons/da.png")}
            width="60"
            height="60"
            alt="github"
          />
        </a>
        <a
          href="https://github.com/nieroferhagos"
          className="Social"
          target="_blank"
        >
          <img
            src={require("../Footer/icons/rn.png")}
            width="60"
            height="60"
            alt="github"
          />
        </a>
        <a href="https://github.com/mikevlh" className="Social" target="_blank">
          <img
            src={require("../Footer/icons/mv.png")}
            width="60"
            height="60"
            alt="github"
          />
        </a>
        <a href="https://github.com/EfiGavr" className="Social" target="_blank">
          <img
            src={require("../Footer/icons/eg.png")}
            width="60"
            height="60"
            alt="github"
          />
        </a>
        <a
          href="https://github.com/vagpappas"
          className="Social"
          target="_blank"
        >
          <img
            src={require("../Footer/icons/vp.png")}
            width="60"
            height="60"
            alt="github"
          />
        </a>
        <span></span>
        <img src={require("./Logoairline.png")} width="250px" height="400px" />
      </div>
        <p>
          Copyright
          <br />
          All rights Reserved &#169;
        </p>
    </Card>
  );
}

export default Footer;

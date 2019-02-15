import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <div className="brand animated lightSpeedIn">
      <a href="/clicky-game/">Start Over</a>
      <h5 id="rw">{props.rightWrong}</h5>
      <h5 id="cur-sco">Current Score: {props.score}</h5>
      <h5 id="top-sco">Top Score: {props.topScore}</h5>
    </div>
  </nav>
);

export default Navbar;

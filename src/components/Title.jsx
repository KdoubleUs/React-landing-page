import React from "react";
import appstyling from "../App.css";
import Char from "./Char";
function Title(props) {
  let { copy, role } = props;
  return (
    <span aria-label={copy} role={role} className="name-title">
      {copy.split("").map(function (char, index) {
        let style = { "animation-delay": 2 + index / 10 + "s" };
        return (
          <span aria-hidden="true" key={index} style={style} id="name">
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default Title;
